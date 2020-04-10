"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
function tokenize(query) {
    return util_1.transferNLP('TOKENIZE', query);
}
function ner(query) {
    return util_1.transferNLP('NER', query);
}
function sentiment(query) {
    return util_1.transferNLP('SENTIMENT', query);
}
function sensitive(query) {
    return util_1.transferNLP('SENSITIVE', query);
}
exports.nlp = { tokenize, ner, sentiment, sensitive };
