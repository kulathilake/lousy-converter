/**
 * 
 */

import { ConversionLogger } from "./libs/logger";
import { ILousyConverter } from "./types/ILousyConverterLib";
import { LengthUnits, Units, WeightUnits } from "./types/units";
import { LengthConverter } from "./variants/length";
import { MassConverter } from "./variants/mass";

export class LousyConverter implements ILousyConverter {
    private _length = new LengthConverter();
    private _mass = new MassConverter()
    private _logger = new ConversionLogger();

    public get LengthConverter(): LengthConverter {
        return this._length;
    }

    public get MassConverter(): MassConverter {
        return this._mass;
    }

    public get Logger(): ConversionLogger {
        return this._logger;
    }


}

export type units = Units;
export type type = ILousyConverter;

