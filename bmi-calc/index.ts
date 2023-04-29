import {LousyConverter} from '../dist/main';
import {LengthUnits,WeightUnits} from '../dist/types/units';

const converter = new LousyConverter();


const height = 170;
const weight = 190;
const weightUnit = WeightUnits.POUNDS;
const heightUnit = LengthUnits.CENTIMETER;

(function calculateBMI(){

    console.log("Welcome to DEMO BMI Calculator ");
    console.log("We will use the following measurements.");
    console.log( `Height: ${height + heightUnit.toString()} and Weight ${weight + weightUnit.toString()}`);

    const heightInMeters = converter.LengthConverter.convert(height, heightUnit, LengthUnits.METER);
    const weightInKilos = converter.MassConverter.convert(weight, weightUnit, WeightUnits.KILOGRAM);

    console.log(`Calculated BMI is ${weightInKilos/heightInMeters^2}`);
})()
