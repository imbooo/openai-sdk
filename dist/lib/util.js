"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const nJwt = require('njwt');
const request = require('request');
const auth_1 = require("./auth");
const api = __importStar(require("./API"));
function checkInit() {
    let error = "";
    if (!auth_1.TOKEN) {
        error = "TOKEN不能为空，请先调用init方法初始化";
    }
    if (!auth_1.EncodingAESKey) {
        error = "EncodingAESKey不能为空，请先调用init方法初始化";
    }
    return error;
}
exports.checkInit = checkInit;
function genToken(query) {
    let jwt = nJwt.create(query, auth_1.EncodingAESKey, "HS256");
    let token = jwt.compact();
    return token;
}
exports.genToken = genToken;
async function transferNLP(nlpType, query) {
    return new Promise(async (resolve, reject) => {
        let error = checkInit();
        if (!!error) {
            reject(error);
            return;
        }
        let token = genToken(query);
        await request.post(`${api[nlpType]}/${auth_1.TOKEN}`, {
            json: {
                query: token
            }
        }, (error, stderr, stdout) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(stdout);
        });
    });
}
exports.transferNLP = transferNLP;
