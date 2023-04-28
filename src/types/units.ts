export enum LengthUnits {
    MILIMETER="mm",
    CENTIMETER="cm",
    METER="m",
    FEET="ft",
    INCHES="in.",
}

export enum WeightUnits {
    GRAM="g",
    KILOGRAM="kg",
    POUNDS="lbs"
}

export type Units =  LengthUnits |  WeightUnits;
