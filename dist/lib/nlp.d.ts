declare function tokenize(query: Object): Promise<unknown>;
declare function ner(query: Object): Promise<unknown>;
declare function sentiment(query: Object): Promise<unknown>;
declare function sensitive(query: Object): Promise<unknown>;
export declare const nlp: {
    tokenize: typeof tokenize;
    ner: typeof ner;
    sentiment: typeof sentiment;
    sensitive: typeof sensitive;
};
export {};
