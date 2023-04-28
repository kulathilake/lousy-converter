/**
 *
 */
import { ConversionLogger } from "./libs/logger";
import { Units } from "./types/units";
import { LengthConverter } from "./variants/length";
import { MassConverter } from "./variants/mass";
export declare class LousyConverter {
    private _length;
    private _mass;
    private _logger;
    get LengthConverter(): LengthConverter;
    get MassConverter(): MassConverter;
    get Logger(): ConversionLogger;
}
export type units = Units;
//# sourceMappingURL=main.d.ts.map