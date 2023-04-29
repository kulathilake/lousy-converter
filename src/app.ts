/**
 * CLI Application for the converter.
 */

import { LengthUnits, Units, WeightUnits } from "./types/units";
import { createInterface } from "readline";
import cowsay from "cowsay";
import { LousyConverter } from "./main";
import { ConversionLogger } from "./libs/logger";
import { Operation } from "./types/basic.types";

const converter = new LousyConverter();
const logger = new ConversionLogger();

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  cowsay.say({
    text: "Welcome to Lousy Converter v1.0",
  })
);

let isConverter: boolean;
let isLength: boolean;
let startUnit: Units;
let endUnit: Units;
let value: number;
let value2: number;
let op: Operation

readline.question("Select app. Converter=1, Calculator=2 \t", (answer) => {
  if (answer === "1") {
    isConverter=true;
    readline.question(
      "What do you want to convert? Length=1, Weight=2\t ",
      (answer) => {
        if (answer === "1") {
          isLength = true;
          console.log(
            cowsay.say({
              text: "You have selected the Length Converter. Select a starting unit.",
            })
          );
        } else if (answer === "2") {
        } else {
          console.log(
            cowsay.say({
              text: "Wrong option, I'm done here.",
            })
          );
          process.exit(0);
        }

        if (isLength) {
          listLengthUnits();
        } else {
          listWeightUnits();
        }
        readline.question("What is the starting unit? \t", (answer) => {
          startUnit = mapPromptToUnits(answer) as Units;
          console.log(
            cowsay.say({
              text: `Your starting unit is ${answer}`,
            })
          );

          if (isLength) {
            listLengthUnits();
          } else {
            listWeightUnits();
          }

          readline.question("What is target Unit? \t", (answer) => {
            endUnit = mapPromptToUnits(answer) as Units;
            console.log(
              cowsay.say({
                text: `Your target unit is ${answer}`,
              })
            );
            readline.question("What's the value? \t", (answer) => {
              value = Number(answer);
              readline.close();
            });
          });
        });
      }
    );
  } else if (answer === "2") {
    isConverter=false;
    readline.question("What do you want to calculate? Length=1, Weight=2",(answer)=>{
        if(answer==="1"){
            isLength=true;
        }else if(answer==="2"){
            isLength=false
        }else{
            console.log(
                cowsay.say({
                  text: "Wrong option, I'm done here.",
                })
              );
              process.exit(0);
        }

        console.log(cowsay.say({
            text: "Provide two values with their units and operator eg: 12 m + 23 ft"
        }));

        console.log("---- Units ----")
        if(isLength){
           listLengthUnits(); 
        }else{
            listWeightUnits();
        }
        console.log("---- Operators ----")
        listOperations();

        readline.question("VALUE1, UNIT, OP, VALUE2 UNIT$ \t",(answer)=>{
            console.log(answer);
            const args = answer.split(" ");
            value = Number(args[0]);
            startUnit = mapPromptToUnits(args[1]) as Units;
            op = mapPromptToUnits(args[2]) as Operation;
            value2 = Number(args[3])
            endUnit = mapPromptToUnits(args[4]) as Units;
            readline.close();
        })
    });

  } else {
    console.log(
        cowsay.say({
          text: "Wrong option, I'm done here.",
        })
      );
      process.exit(0);
  }
});

readline.on("close", function () {
if(isConverter){
     if (isLength) {
    const result = converter.LengthConverter.convert(
      value,
      startUnit as LengthUnits,
      endUnit as LengthUnits
    );
    logger.logConversion(value, result, startUnit, endUnit);
  } else {
    const result = converter.MassConverter.convert(
      value,
      startUnit as WeightUnits,
      endUnit as WeightUnits
    );
    logger.logConversion(value, result, startUnit, endUnit);
  }
}else{
    let result:number
    if(isLength){
        switch(op){
            case Operation.ADD:
                result = converter.LengthConverter.add(value,value2,startUnit as LengthUnits ,endUnit as LengthUnits);
                break;
            case Operation.SUBTRACT:
                result = converter.LengthConverter.subtract(value,value2,startUnit as LengthUnits ,endUnit as LengthUnits);
                break;
            case Operation.DIVIDE:
                result = converter.LengthConverter.divide(value,value2,startUnit as LengthUnits ,endUnit as LengthUnits);
                break;
            case Operation.MULTIPLY:
                result = converter.LengthConverter.multiply(value,value2,startUnit as LengthUnits ,endUnit as LengthUnits);
                break;
        }
    }else {
        switch(op){
            case Operation.ADD:
                result = converter.MassConverter.add(value,value2,startUnit as WeightUnits ,endUnit as WeightUnits);
                break;
            case Operation.SUBTRACT:
                result = converter.MassConverter.subtract(value,value2,startUnit as WeightUnits ,endUnit as WeightUnits);
                break;
            case Operation.DIVIDE:
                result = converter.MassConverter.divide(value,value2,startUnit as WeightUnits ,endUnit as WeightUnits);
                break;
            case Operation.MULTIPLY:
                result = converter.MassConverter.multiply(value,value2,startUnit as WeightUnits ,endUnit as WeightUnits);
                break;
        }
    }
    console.log(result);
    logger.logOperation(value,value2,result,startUnit,endUnit,op);
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
    console.log("Multiply - *")
  }

function mapPromptToUnits(prompt: string) {
  switch (prompt) {
    case "mm":
      return LengthUnits.MILIMETER;
    case "cm":
      return LengthUnits.CENTIMETER;
    case "m":
      return LengthUnits.METER;
    case "ft":
      return LengthUnits.FEET;
    case "in":
      return LengthUnits.INCHES;
    case "g":
      return WeightUnits.GRAM;
    case "kg":
      return WeightUnits.KILOGRAM;
    case "lbs":
      return WeightUnits.POUNDS;
    case "+":
        return Operation.ADD;
    case "-":
        return Operation.SUBTRACT;
    case "/":
        return Operation.DIVIDE;
    case "*":
        return Operation.MULTIPLY
    default:
      throw new Error("Invalid Unit");
  }
}
