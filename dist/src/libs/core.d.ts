import { Operation } from "../types/basic.types";
/**
 * Converter Core Component.
 * Performs simple arithmatic on quantities
 * irrespective of the units by a given factor.
 */
export declare class ConverterCore {
    /**
     * Multiplies a given quantity by a given factor.
     * @param quantity
     * @param factor
     * @returns
     */
    convert(quantity: number, factor: number): number;
    /**
     * Performs addition on values of different units
     * @param quantity1 Quantity to be converted
     * @param quantity2 Quantity to which the converted quantity will be added
     * @param factor factor by which the first quantity is to be converted.
     */
    operateAfterConversion(quantity1: number, quantity2: number, factor: number, operation: Operation): number;
}
//# sourceMappingURL=core.d.ts.map