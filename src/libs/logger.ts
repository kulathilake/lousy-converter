/**
 * Logger Component
 * Will display the converted value with conversion steps
 */

import { Operation } from "../types/basic.types";
import { Units } from "../types/units";
import cowsay from "cowsay"
export class ConversionLogger {

    logConversion(quantity1:number, result:number, unit1:Units, unit2:Units){
        console.log(cowsay.think({
            text: `${quantity1 + unit1.toString()} ----> ${result + unit2.toString()}`
        }))
    }

    logOperation(quantity1:number, quantity2:number, result:number, unit1:Units, unit2: Units, operation: Operation){
        console.log(`${quantity1 + unit1.toString() + operation.toString()} = ${quantity2 + unit2.toString()} `);
    }
    
}