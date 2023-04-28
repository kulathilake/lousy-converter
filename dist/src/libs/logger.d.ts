/**
 * Logger Component
 * Will display the converted value with conversion steps
 */
import { Operation } from "../types/basic.types";
import { Units } from "../types/units";
export declare class ConversionLogger {
    logConversion(quantity1: number, result: number, unit1: Units, unit2: Units): void;
    logOperation(quantity1: number, quantity2: number, result: number, unit1: Units, unit2: Units, operation: Operation): void;
}
//# sourceMappingURL=logger.d.ts.map