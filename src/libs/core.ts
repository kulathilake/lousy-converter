import { Operation } from "../types/basic.types";

/**
 * Converter Core Component.
 * Performs simple arithmatic on quantities
 * irrespective of the units by a given factor. 
 */
export class ConverterCore {
    /**
     * Multiplies a given quantity by a given factor.
     * @param quantity 
     * @param factor 
     * @returns 
     */
    convert(quantity:number, factor: number):number{
        return quantity * factor;
    }
    
    /**
     * Performs addition on values of different units
     * @param quantity1 Quantity to be converted 
     * @param quantity2 Quantity to which the converted quantity will be added
     * @param factor factor by which the first quantity is to be converted.
     */
    operateAfterConversion(quantity1:number, quantity2:number, factor: number, operation: Operation):number{
        const convertedQuantity1 = this.convert(quantity1,factor);
        switch(operation){
            case Operation.ADD:
                return convertedQuantity1 + quantity2;
            case Operation.SUBTRACT:
                return convertedQuantity1 - quantity2;
            case Operation.DIVIDE:
                if(quantity2>0){
                    return convertedQuantity1/quantity2
                }else{
                    throw new Error("Division by Zero");
                }
            case Operation.MULTIPLY:
                return convertedQuantity1 * quantity2
        }
    }


    
}