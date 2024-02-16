"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = exports.hi = void 0;
const uuid_1 = require("uuid");
exports.hi = "hello from packages/commons";
exports.number = `random uuid is: ${(0, uuid_1.v4)()}`;
