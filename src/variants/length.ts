/**
 * LengthConverter
 * Facilitates Length conversions. 
 */
import { ConverterCore } from "../libs/core";
import { Operation } from "../types/basic.types";
import { LengthUnits } from "../types/units";

export class LengthConverter {
    private Core = new ConverterCore();
    private convertToMeters(quantity:number, fromUnit: LengthUnits):number {
        switch(fromUnit){
            case LengthUnits.CENTIMETER:
                return this.Core.convert(quantity,0.01);
            case LengthUnits.FEET:
                return this.Core.convert(quantity, 0.3048);
            case LengthUnits.INCHES:
                return this.Core.convert(quantity,0.0254);
            case LengthUnits.METER:
                return this.Core.convert(quantity,1);
            case LengthUnits.MILIMETER:
                return this.Core.convert(quantity,0.001);
        }
    }

    private convertToCentiMeters(quantity:number, fromUnit: LengthUnits):number {
        return this.convertToMeters(quantity,fromUnit)*100;
    }

    private convertToFeet(quantity:number, fromUnit: LengthUnits):number {
        switch(fromUnit){
            case LengthUnits.CENTIMETER:
                return this.Core.convert(quantity,0.0328084);
            case LengthUnits.FEET:
                return this.Core.convert(quantity, 1);
            case LengthUnits.INCHES:
                return this.Core.convert(quantity,0.0833333);
            case LengthUnits.METER:
                return this.Core.convert(quantity,3.28084);
            case LengthUnits.MILIMETER:
                return this.Core.convert(quantity,0.00328084);
        }
    }

    private convertToInches(quantity:number, fromUnit: LengthUnits):number{
        switch(fromUnit){
            case LengthUnits.CENTIMETER:
                return this.Core.convert(quantity,0.0328084);
            case LengthUnits.FEET:
                return this.Core.convert(quantity, 1);
            case LengthUnits.INCHES:
                return this.Core.convert(quantity,0.0833333);
            case LengthUnits.METER:
                return this.Core.convert(quantity,3.28084);
            case LengthUnits.MILIMETER:
                return this.Core.convert(quantity,0.00328084);
        }
    }

    private convertToMiliMeters(quantity:number, fromUnit: LengthUnits):number{
       return this.convertToMeters(quantity,fromUnit)*1000;
    }

    /**
     * Converts a given a length from a unit to 
     * a desired unit.
     * @param length
     * @param fromUnit 
     * @param toUnit 
     * @returns converted value.
     */
    convert(length:number, fromUnit:LengthUnits, toUnit: LengthUnits):number {
        switch(toUnit){
            case LengthUnits.METER:
                return this.convertToMeters(length,fromUnit);
            case LengthUnits.CENTIMETER:
                return this.convertToCentiMeters(length,fromUnit);
            case LengthUnits.FEET:
                return this.convertToFeet(length,fromUnit);
            case LengthUnits.INCHES:
                return this.convertToInches(length,fromUnit);
            case LengthUnits.MILIMETER:
                return this.convertToMiliMeters(length,fromUnit);
        }
    }

    add(length1: number, length2:number, unit1:LengthUnits, unit2:LengthUnits){
        const factor = this.convert(1,unit1,unit2);
        const result =  this.Core.operateAfterConversion(length1,length2,factor,Operation.ADD);
        return result;
    }
    subtract(length1: number, length2:number, unit1:LengthUnits, unit2:LengthUnits){
        const factor = this.convert(1,unit1,unit2);
        return this.Core.operateAfterConversion(length1,length2,factor,Operation.SUBTRACT);
    }
    divide(length1: number, length2:number, unit1:LengthUnits, unit2:LengthUnits){
        const factor = this.convert(1,unit1,unit2);
        return this.Core.operateAfterConversion(length1,length2,factor,Operation.DIVIDE);
    }
    multiply(length1: number, length2:number, unit1:LengthUnits, unit2:LengthUnits){
        const factor = this.convert(1,unit1,unit2);
        return this.Core.operateAfterConversion(length1,length2,factor,Operation.MULTIPLY);
    }
}