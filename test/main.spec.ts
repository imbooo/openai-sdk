import { expect, assert } from "chai";
import { OpenAI } from "../src/main";

describe("OpenAI", () => {
  let ai;
  before(() => {
    ai = new OpenAI("", "");
  });

  it("test chat", async () => {
    const chatRes = await ai.chat({ username: "uid", msg: "你好吗" });
    assert.isString(chatRes.answer);
  });

  describe("nlp", () => {
    it("test tokenize", async () => {
      const res = await ai.nlp.tokenize({
        uid: "uid",
        data: {
          q: "我的家乡叫中国。"
        }
      });
      expect(res).to.have.property("words").with.lengthOf(6);
    });

    it("test ner", async () => {
      const { entities } = await ai.nlp.ner({
        uid: "uid",
        data: {
          q: "帮我订两张后天上午的火车票"
        }
      });

      expect(entities).with.lengthOf(2);
      expect(entities[0]?.type).to.equal("number");
    });

    it("test sentiment", async () => {
      const res = await ai.nlp.sentiment({
        uid: "uid",
        data: {
          q: "恭喜小张脱单成功",
          mode: "6class"
        }
      });
      expect(res).to.have.property("result").with.lengthOf(6);
    });

    it("test sensitive", async () => {
      const res = await ai.nlp.sensitive({
        uid: "uid",
        data: {
          q: "楼主真垃圾，祝你早日死全家"
        }
      });
      expect(res).to.have.property("result").with.lengthOf(4);
    });

  });
});

