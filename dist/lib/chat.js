"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
function chat(query) {
    return util_1.transferNLP('CHAT', query);
}
exports.chat = chat;
