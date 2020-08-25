import * as nJwt from "njwt";
import * as api from "./API";
import axios from "axios";
import { TOKEN, EncodingAESKey } from "./auth";

function checkInit() {
  let error = "";
  if (!TOKEN) {
    error = "TOKEN不能为空，请先调用init方法初始化";
  }
  if (!EncodingAESKey) {
    error = "EncodingAESKey不能为空，请先调用init方法初始化";
  }
  return error;
}

function genToken(query) {
  let jwt = nJwt.create(query, EncodingAESKey, "HS256");
  return jwt.compact();
}

async function transferNLP<T>(nlpType: string, query: Object): Promise<T> {
  let error = checkInit();
  if (!!error) {
    throw new Error(error);
  }

  const token = genToken(query);
  const res = await axios.post<T>(`${api[nlpType]}/${TOKEN}`, { query: token });
  return res.data;
}

export { checkInit, genToken, transferNLP };
