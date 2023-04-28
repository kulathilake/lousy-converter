"use strict";
/**
 * Logger Component
 * Will display the converted value with conversion steps
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionLogger = void 0;
const cowsay_1 = __importDefault(require("cowsay"));
class ConversionLogger {
    logConversion(quantity1, result, unit1, unit2) {
        console.log(cowsay_1.default.think({
            text: `${quantity1 + unit1.toString()} ----> ${result + unit2.toString()}`
        }));
    }
    logOperation(quantity1, quantity2, result, unit1, unit2, operation) {
        console.log(`${quantity1 + unit1.toString() + operation.toString()} = ${quantity2 + unit2.toString()} `);
    }
}
exports.ConversionLogger = ConversionLogger;
