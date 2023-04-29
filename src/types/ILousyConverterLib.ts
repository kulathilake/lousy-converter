import { ConversionLogger } from "../libs/logger";
import { LengthConverter } from "../variants/length";
import { MassConverter } from "../variants/mass"

export interface ILousyConverter {
    MassConverter: MassConverter;
    LengthConverter: LengthConverter;
    Logger: ConversionLogger
}