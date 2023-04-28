"use strict";
/**
 * Logger Component
 * Will display the converted value with conversion steps
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionLogger = void 0;
class ConversionLogger {
    logConversion(quantity1, result, unit1, unit2) {
        console.log(`${quantity1 + unit1.toString()} ----> ${result + unit2.toString()}`);
    }
    logOperation(quantity1, quantity2, result, unit1, unit2, operation) {
        console.log(`${quantity1 + unit1.toString() + operation.toString()} = ${quantity2 + unit2.toString()} `);
    }
}
exports.ConversionLogger = ConversionLogger;
