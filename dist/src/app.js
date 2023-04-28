"use strict";
/**
 * CLI Application for the converter.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const units_1 = require("./types/units");
const readline_1 = require("readline");
const cowsay_1 = __importDefault(require("cowsay"));
const main_1 = require("./main");
const logger_1 = require("./libs/logger");
const basic_types_1 = require("./types/basic.types");
const converter = new main_1.LousyConverter();
const logger = new logger_1.ConversionLogger();
const readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
});
console.log(cowsay_1.default.say({
    text: "Welcome to Lousy Converter v1.0",
}));
let isConverter;
let isLength;
let startUnit;
let endUnit;
let value;
let value2;
let op;
readline.question("Select app. Converter=1, Calculator=2", (answer) => {
    if (answer === "1") {
        isConverter = true;
        readline.question("What do you want to convert? Length=1, Weight=2\t ", (answer) => {
            if (answer === "1") {
                isLength = true;
                console.log(cowsay_1.default.say({
                    text: "You have selected the Length Converter. Select a starting unit.",
                }));
            }
            else if (answer === "2") {
            }
            else {
                console.log(cowsay_1.default.say({
                    text: "Wrong option, I'm done here.",
                }));
                process.exit(0);
            }
            if (isLength) {
                listLengthUnits();
            }
            else {
                listWeightUnits();
            }
            readline.question("What is the starting unit? \t", (answer) => {
                startUnit = mapPromptToUnits(answer);
                console.log(cowsay_1.default.say({
                    text: `Your starting unit is ${answer}`,
                }));
                if (isLength) {
                    listLengthUnits();
                }
                else {
                    listWeightUnits();
                }
                readline.question("What is target Unit? \t", (answer) => {
                    endUnit = mapPromptToUnits(answer);
                    console.log(cowsay_1.default.say({
                        text: `Your target unit is ${answer}`,
                    }));
                    readline.question("What's the value? \t", (answer) => {
                        value = Number(answer);
                        readline.close();
                    });
                });
            });
        });
    }
    else if (answer === "2") {
        isConverter = false;
        readline.question("What do you want to calculate? Length=1, Weight=2", (answer) => {
            if (answer === "1") {
                isLength = true;
            }
            else if (answer === "2") {
                isLength = false;
            }
            else {
                console.log(cowsay_1.default.say({
                    text: "Wrong option, I'm done here.",
                }));
                process.exit(0);
            }
            console.log(cowsay_1.default.say({
                text: "Provide two values with their units and operator eg: 12 m + 23 ft"
            }));
            console.log("---- Units ----");
            if (isLength) {
                listLengthUnits();
            }
            else {
                listWeightUnits();
            }
            console.log("---- Operators ----");
            listOperations();
            readline.question("VALUE1, UNIT, OP, VALUE2 UNIT$ \t", (answer) => {
                console.log(answer);
                const args = answer.split(" ");
                value = Number(args[0]);
                startUnit = mapPromptToUnits(args[1]);
                op = mapPromptToUnits(args[2]);
                value2 = Number(args[3]);
                endUnit = mapPromptToUnits(args[4]);
                readline.close();
            });
        });
    }
    else {
        console.log(cowsay_1.default.say({
            text: "Wrong option, I'm done here.",
        }));
        process.exit(0);
    }
});
readline.on("close", function () {
    if (isConverter) {
        if (isLength) {
            const result = converter.LengthConverter.convert(value, startUnit, endUnit);
            logger.logConversion(value, result, startUnit, endUnit);
        }
        else {
            const result = converter.MassConverter.convert(value, startUnit, endUnit);
            logger.logConversion(value, result, startUnit, endUnit);
        }
    }
    else {
        let result;
        if (isLength) {
            switch (op) {
                case basic_types_1.Operation.ADD:
                    result = converter.LengthConverter.add(value, value2, startUnit, endUnit);
                    break;
                case basic_types_1.Operation.SUBTRACT:
                    result = converter.LengthConverter.subtract(value, value2, startUnit, endUnit);
                    break;
                case basic_types_1.Operation.DIVIDE:
                    result = converter.LengthConverter.divide(value, value2, startUnit, endUnit);
                    break;
                case basic_types_1.Operation.MULTIPLY:
                    result = converter.LengthConverter.multiply(value, value2, startUnit, endUnit);
                    break;
            }
        }
        else {
            switch (op) {
                case basic_types_1.Operation.ADD:
                    result = converter.MassConverter.add(value, value2, startUnit, endUnit);
                    break;
                case basic_types_1.Operation.SUBTRACT:
                    result = converter.MassConverter.subtract(value, value2, startUnit, endUnit);
                    break;
                case basic_types_1.Operation.DIVIDE:
                    result = converter.MassConverter.divide(value, value2, startUnit, endUnit);
                    break;
                case basic_types_1.Operation.MULTIPLY:
                    result = converter.MassConverter.multiply(value, value2, startUnit, endUnit);
                    break;
            }
        }
        console.log(result);
        logger.logOperation(value, value2, result, startUnit, endUnit, op);
    }
    console.log("Bye! Bye!");
    process.exit();
});
function listLengthUnits() {
    console.log("Milimeter - mm");
    console.log("Centimeter - cm");
    console.log("Meter - m");
    console.log("Feet - ft");
    console.log("Inches - in");
}
function listWeightUnits() {
    console.log("Gram - g");
    console.log("Kilogram - kg");
    console.log("Pounds - lbs");
}
function listOperations() {
    console.log("Add - +");
    console.log("Subtract - -");
    console.log("Divide - /");
    console.log("Multiply - *");
}
function mapPromptToUnits(prompt) {
    switch (prompt) {
        case "mm":
            return units_1.LengthUnits.MILIMETER;
        case "cm":
            return units_1.LengthUnits.CENTIMETER;
        case "m":
            return units_1.LengthUnits.METER;
        case "ft":
            return units_1.LengthUnits.FEET;
        case "in":
            return units_1.LengthUnits.INCHES;
        case "g":
            return units_1.WeightUnits.GRAM;
        case "kg":
            return units_1.WeightUnits.KILOGRAM;
        case "lbs":
            return units_1.WeightUnits.POUNDS;
        case "+":
            return basic_types_1.Operation.ADD;
        case "-":
            return basic_types_1.Operation.SUBTRACT;
        case "/":
            return basic_types_1.Operation.DIVIDE;
        case "*":
            return basic_types_1.Operation.MULTIPLY;
        default:
            throw new Error("Invalid Unit");
    }
}
