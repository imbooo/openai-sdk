declare let TOKEN: string;
declare let EncodingAESKey: string;
declare function auth(opt: any): void;
export { auth as init, TOKEN, EncodingAESKey };
