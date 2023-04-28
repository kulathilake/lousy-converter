"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterCore = void 0;
const basic_types_1 = require("../types/basic.types");
/**
 * Converter Core Component.
 * Performs simple arithmatic on quantities
 * irrespective of the units by a given factor.
 */
class ConverterCore {
    /**
     * Multiplies a given quantity by a given factor.
     * @param quantity
     * @param factor
     * @returns
     */
    convert(quantity, factor) {
        return quantity * factor;
    }
    /**
     * Performs addition on values of different units
     * @param quantity1 Quantity to be converted
     * @param quantity2 Quantity to which the converted quantity will be added
     * @param factor factor by which the first quantity is to be converted.
     */
    operateAfterConversion(quantity1, quantity2, factor, operation) {
        const convertedQuantity1 = this.convert(quantity1, factor);
        switch (operation) {
            case basic_types_1.Operation.ADD:
                return convertedQuantity1 + quantity2;
            case basic_types_1.Operation.SUBTRACT:
                return convertedQuantity1 - quantity2;
            case basic_types_1.Operation.DIVIDE:
                if (quantity2 > 0) {
                    return convertedQuantity1 / quantity2;
                }
                else {
                    throw new Error("Division by Zero");
                }
            case basic_types_1.Operation.MULTIPLY:
                return convertedQuantity1 * quantity2;
        }
    }
}
exports.ConverterCore = ConverterCore;
