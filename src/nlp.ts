import { Base } from "./base";


export class NLP extends Base {
  tokenize(query: object) {
    return this.transferNLP("TOKENIZE", query);
  }

  ner(query: object) {
    return this.transferNLP("NER", query);
  }

  sentiment(query: object) {
    return this.transferNLP("SENTIMENT", query);
  }

  sensitive(query: object) {
    return this.transferNLP("SENSITIVE", query);
  }
}
