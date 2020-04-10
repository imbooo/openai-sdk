declare function checkInit(): string;
declare function genToken(query: any): any;
declare function transferNLP(nlpType: string, query: Object): Promise<unknown>;
export { checkInit, genToken, transferNLP };
