import { WeightUnits } from "../types/units";
export declare class MassConverter {
    private Core;
    private convertToKilogram;
    private convertToGram;
    private convertToPound;
    /**
     * Converts a given a length from a unit to
     * a desired unit.
     * @param weight
     * @param fromUnit
     * @param toUnit
     * @returns converted value.
     */
    convert(weight: number, fromUnit: WeightUnits, toUnit: WeightUnits): number;
    add(weight1: number, weight2: number, unit1: WeightUnits, unit2: WeightUnits): number;
    subtract(weight1: number, weight2: number, unit1: WeightUnits, unit2: WeightUnits): number;
    divide(weight1: number, weight2: number, unit1: WeightUnits, unit2: WeightUnits): number;
    multiply(weight1: number, weight2: number, unit1: WeightUnits, unit2: WeightUnits): number;
}
//# sourceMappingURL=mass.d.ts.map