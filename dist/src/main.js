"use strict";
/**
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LousyConverter = void 0;
const logger_1 = require("./libs/logger");
const length_1 = require("./variants/length");
const mass_1 = require("./variants/mass");
class LousyConverter {
    constructor() {
        this._length = new length_1.LengthConverter();
        this._mass = new mass_1.MassConverter();
        this._logger = new logger_1.ConversionLogger();
    }
    get LengthConverter() {
        return this._length;
    }
    get MassConverter() {
        return this._mass;
    }
    get Logger() {
        return this._logger;
    }
}
exports.LousyConverter = LousyConverter;
