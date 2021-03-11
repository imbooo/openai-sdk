import { NLP } from "./nlp";
import { Base } from "./base";
import { IAnswer } from "./interface";

export * from "./interface";
export * from "./nlp";

export class OpenAI extends Base {
  nlp: NLP;

  constructor(TOKEN: string, EncodingAESKey: string) {
    super(TOKEN, EncodingAESKey);
    this.nlp = new NLP(TOKEN, EncodingAESKey);
  }

  async chat(query: Object): Promise<IAnswer> {
    return this.transferNLP<IAnswer>("CHAT", query);
  }
}
