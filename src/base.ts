import axios from "axios";
import * as api from "./API";
import * as jwt from "jsonwebtoken";

export abstract class Base {
  protected constructor(private readonly TOKEN: string, private readonly EncodingAESKey: string) {
    if (!TOKEN) {
      throw new Error("TOKEN不能为空，请先调用init方法初始化");
    }

    if (!EncodingAESKey) {
      throw new Error("EncodingAESKey不能为空，请先调用init方法初始化");
    }
  }

  protected async transferNLP<T>(nlpType: string, query: object): Promise<T> {
    const token = jwt.sign(query, this.EncodingAESKey);
    const res = await axios.post<T>(`${api[nlpType]}/${this.TOKEN}`, { query: token });
    return res.data;
  }
}
