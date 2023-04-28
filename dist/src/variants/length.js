"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LengthConverter = void 0;
/**
 * LengthConverter
 * Facilitates Length conversions.
 */
const core_1 = require("../libs/core");
const basic_types_1 = require("../types/basic.types");
const units_1 = require("../types/units");
class LengthConverter {
    constructor() {
        this.Core = new core_1.ConverterCore();
    }
    convertToMeters(quantity, fromUnit) {
        switch (fromUnit) {
            case units_1.LengthUnits.CENTIMETER:
                return this.Core.convert(quantity, 0.01);
            case units_1.LengthUnits.FEET:
                return this.Core.convert(quantity, 0.3048);
            case units_1.LengthUnits.INCHES:
                return this.Core.convert(quantity, 0.0254);
            case units_1.LengthUnits.METER:
                return this.Core.convert(quantity, 1);
            case units_1.LengthUnits.MILIMETER:
                return this.Core.convert(quantity, 0.001);
        }
    }
    convertToCentiMeters(quantity, fromUnit) {
        return this.convertToMeters(quantity, fromUnit) * 100;
    }
    convertToFeet(quantity, fromUnit) {
        switch (fromUnit) {
            case units_1.LengthUnits.CENTIMETER:
                return this.Core.convert(quantity, 0.0328084);
            case units_1.LengthUnits.FEET:
                return this.Core.convert(quantity, 1);
            case units_1.LengthUnits.INCHES:
                return this.Core.convert(quantity, 0.0833333);
            case units_1.LengthUnits.METER:
                return this.Core.convert(quantity, 3.28084);
            case units_1.LengthUnits.MILIMETER:
                return this.Core.convert(quantity, 0.00328084);
        }
    }
    convertToInches(quantity, fromUnit) {
        switch (fromUnit) {
            case units_1.LengthUnits.CENTIMETER:
                return this.Core.convert(quantity, 0.0328084);
            case units_1.LengthUnits.FEET:
                return this.Core.convert(quantity, 1);
            case units_1.LengthUnits.INCHES:
                return this.Core.convert(quantity, 0.0833333);
            case units_1.LengthUnits.METER:
                return this.Core.convert(quantity, 3.28084);
            case units_1.LengthUnits.MILIMETER:
                return this.Core.convert(quantity, 0.00328084);
        }
    }
    convertToMiliMeters(quantity, fromUnit) {
        return this.convertToMeters(quantity, fromUnit) * 1000;
    }
    /**
     * Converts a given a length from a unit to
     * a desired unit.
     * @param length
     * @param fromUnit
     * @param toUnit
     * @returns converted value.
     */
    convert(length, fromUnit, toUnit) {
        switch (toUnit) {
            case units_1.LengthUnits.METER:
                return this.convertToMeters(length, fromUnit);
            case units_1.LengthUnits.CENTIMETER:
                return this.convertToCentiMeters(length, fromUnit);
            case units_1.LengthUnits.FEET:
                return this.convertToFeet(length, fromUnit);
            case units_1.LengthUnits.INCHES:
                return this.convertToInches(length, fromUnit);
            case units_1.LengthUnits.MILIMETER:
                return this.convertToMiliMeters(length, fromUnit);
        }
    }
    add(length1, length2, unit1, unit2) {
        const factor = this.convert(1, unit1, unit2);
        const result = this.Core.operateAfterConversion(length1, length2, factor, basic_types_1.Operation.ADD);
        return result;
    }
    subtract(length1, length2, unit1, unit2) {
        const factor = this.convert(1, unit1, unit2);
        return this.Core.operateAfterConversion(length1, length2, factor, basic_types_1.Operation.SUBTRACT);
    }
    divide(length1, length2, unit1, unit2) {
        const factor = this.convert(1, unit1, unit2);
        return this.Core.operateAfterConversion(length1, length2, factor, basic_types_1.Operation.DIVIDE);
    }
    multiply(length1, length2, unit1, unit2) {
        const factor = this.convert(1, unit1, unit2);
        return this.Core.operateAfterConversion(length1, length2, factor, basic_types_1.Operation.MULTIPLY);
    }
}
exports.LengthConverter = LengthConverter;
