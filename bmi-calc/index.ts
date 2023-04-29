import {LousyConverter} from '../dist/main';
import {LengthUnits,WeightUnits} from '../dist/types/units';

const converter = new LousyConverter();


const height = 170;
const weight = 190;
const weightUnit = WeightUnits.POUNDS;
const heightUnit = LengthUnits.CENTIMETER;

function calculateBMI(){

    const heightInMeters = converter.LengthConverter.convert(height, heightUnit, LengthUnits.METER);
    const weightInKilos = converter.MassConverter.convert(weight, weightUnit, WeightUnits.KILOGRAM);

    return weightInKilos/heightInMeters^2;
}

console.log(calculateBMI());