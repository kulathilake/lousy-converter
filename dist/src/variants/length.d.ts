import { LengthUnits } from "../types/units";
export declare class LengthConverter {
    private Core;
    private convertToMeters;
    private convertToCentiMeters;
    private convertToFeet;
    private convertToInches;
    private convertToMiliMeters;
    /**
     * Converts a given a length from a unit to
     * a desired unit.
     * @param length
     * @param fromUnit
     * @param toUnit
     * @returns converted value.
     */
    convert(length: number, fromUnit: LengthUnits, toUnit: LengthUnits): number;
    add(length1: number, length2: number, unit1: LengthUnits, unit2: LengthUnits): number;
    subtract(length1: number, length2: number, unit1: LengthUnits, unit2: LengthUnits): number;
    divide(length1: number, length2: number, unit1: LengthUnits, unit2: LengthUnits): number;
    multiply(length1: number, length2: number, unit1: LengthUnits, unit2: LengthUnits): number;
}
//# sourceMappingURL=length.d.ts.map