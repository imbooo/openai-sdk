import { transferNLP } from "./util";

type TYPE = "text" | "music" | "news";
type STATUS = "FAQ" | "NOMATCH" | "CONTEXT_FAQ" | "GENERAL_FAQ";

interface IAnswerDetail {
  ans_node_id: number;
  ans_node_name: string;
  confidence: number;
  content: string;
  debug_info: string;
  msg_type: TYPE;
  resp_title: string;
  status: STATUS;
}

interface IAnswer {
  ans_node_name: string;
  title: string;
  answer: string;
  answer_type: TYPE,
  msg: IAnswerDetail[],
  from_user_name: string;
  status: STATUS;
  to_user_name: string;
}

async function chat(query: Object): Promise<IAnswer> {
  return transferNLP<IAnswer>("CHAT", query);
}

export { chat };
