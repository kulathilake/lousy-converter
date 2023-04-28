"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassConverter = void 0;
/**
 * LengthConverter
 * Facilitates Length conversions.
 */
const core_1 = require("../libs/core");
const basic_types_1 = require("../types/basic.types");
const units_1 = require("../types/units");
class MassConverter {
    constructor() {
        this.Core = new core_1.ConverterCore();
    }
    convertToKilogram(quantity, fromUnit) {
        switch (fromUnit) {
            case units_1.WeightUnits.GRAM:
                return this.Core.convert(quantity, 0.001);
            case units_1.WeightUnits.KILOGRAM:
                return quantity;
            case units_1.WeightUnits.POUNDS:
                return this.Core.convert(quantity, 0.45359237);
        }
    }
    convertToGram(quantity, fromUnit) {
        return this.convertToKilogram(quantity, fromUnit) / 1000;
    }
    convertToPound(quantity, fromUnit) {
        switch (fromUnit) {
            case units_1.WeightUnits.GRAM:
                return this.Core.convert(this.convertToKilogram(quantity, fromUnit), 2.20462);
            case units_1.WeightUnits.KILOGRAM:
                return this.Core.convert(quantity, 2.20462);
            case units_1.WeightUnits.POUNDS:
                return quantity;
        }
    }
    /**
     * Converts a given a length from a unit to
     * a desired unit.
     * @param weight
     * @param fromUnit
     * @param toUnit
     * @returns converted value.
     */
    convert(weight, fromUnit, toUnit) {
        switch (toUnit) {
            case units_1.WeightUnits.GRAM:
                return this.convertToGram(weight, fromUnit);
            case units_1.WeightUnits.KILOGRAM:
                return this.convertToKilogram(weight, fromUnit);
            case units_1.WeightUnits.POUNDS:
                return this.convertToPound(weight, fromUnit);
        }
    }
    add(weight1, weight2, unit1, unit2) {
        const factor = this.convert(1, unit1, unit2);
        const result = this.Core.operateAfterConversion(weight1, weight2, factor, basic_types_1.Operation.ADD);
        return result;
    }
    subtract(weight1, weight2, unit1, unit2) {
        const factor = this.convert(1, unit1, unit2);
        return this.Core.operateAfterConversion(weight1, weight2, factor, basic_types_1.Operation.SUBTRACT);
    }
    divide(weight1, weight2, unit1, unit2) {
        const factor = this.convert(1, unit1, unit2);
        return this.Core.operateAfterConversion(weight1, weight2, factor, basic_types_1.Operation.DIVIDE);
    }
    multiply(weight1, weight2, unit1, unit2) {
        const factor = this.convert(1, unit1, unit2);
        return this.Core.operateAfterConversion(weight1, weight2, factor, basic_types_1.Operation.MULTIPLY);
    }
}
exports.MassConverter = MassConverter;
