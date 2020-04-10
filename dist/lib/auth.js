"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let TOKEN = '';
exports.TOKEN = TOKEN;
let EncodingAESKey = '';
exports.EncodingAESKey = EncodingAESKey;
function auth(opt) {
    exports.TOKEN = TOKEN = opt.TOKEN;
    exports.EncodingAESKey = EncodingAESKey = opt.EncodingAESKey;
}
exports.init = auth;
