/**
 * LengthConverter
 * Facilitates Length conversions. 
 */
import { ConverterCore } from "../libs/core";
import { Operation } from "../types/basic.types";
import { WeightUnits } from "../types/units";

export class MassConverter {
    private Core = new ConverterCore();
    
    private convertToKilogram(quantity:number, fromUnit:WeightUnits):number{
        switch(fromUnit){
            case WeightUnits.GRAM:
                return this.Core.convert(quantity,0.001);
            case WeightUnits.KILOGRAM:
                return quantity;
            case WeightUnits.POUNDS:
                return this.Core.convert(quantity,0.45359237);
        }
    }

    private convertToGram(quantity:number, fromUnit:WeightUnits):number{
        return this.convertToKilogram(quantity,fromUnit)/1000;
    }

    private convertToPound(quantity:number, fromUnit:WeightUnits):number{
        switch(fromUnit){
            case WeightUnits.GRAM:
                return this.Core.convert(this.convertToKilogram(quantity,fromUnit), 2.20462);
            case WeightUnits.KILOGRAM:
                return this.Core.convert(quantity, 2.20462);
            case WeightUnits.POUNDS:
                return quantity;
        }
    }

    /**
     * Converts a given a length from a unit to 
     * a desired unit.
     * @param weight
     * @param fromUnit 
     * @param toUnit 
     * @returns converted value.
     */
    convert(weight:number, fromUnit:WeightUnits, toUnit: WeightUnits):number {
        switch(toUnit){
            case WeightUnits.GRAM:
                return this.convertToGram(weight,fromUnit);
            case WeightUnits.KILOGRAM:
                return this.convertToKilogram(weight,fromUnit);
            case WeightUnits.POUNDS:
                return this.convertToPound(weight,fromUnit);
        }
    }

    add(weight1: number, weight2:number, unit1:WeightUnits, unit2:WeightUnits){
        const factor = this.convert(1,unit1,unit2);
        const result =  this.Core.operateAfterConversion(weight1,weight2,factor,Operation.ADD);
        return result;
    }
    subtract(weight1: number, weight2:number, unit1:WeightUnits, unit2:WeightUnits){
        const factor = this.convert(1,unit1,unit2);
        return this.Core.operateAfterConversion(weight1,weight2,factor,Operation.SUBTRACT);
    }
    divide(weight1: number, weight2:number, unit1:WeightUnits, unit2:WeightUnits){
        const factor = this.convert(1,unit1,unit2);
        return this.Core.operateAfterConversion(weight1,weight2,factor,Operation.DIVIDE);
    }
    multiply(weight1: number, weight2:number, unit1:WeightUnits, unit2:WeightUnits){
        const factor = this.convert(1,unit1,unit2);
        return this.Core.operateAfterConversion(weight1,weight2,factor,Operation.MULTIPLY);
    }
}