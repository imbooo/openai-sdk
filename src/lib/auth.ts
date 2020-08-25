let TOKEN = "";
let EncodingAESKey = "";

function auth(opt: { TOKEN: string, EncodingAESKey: string }) {
  TOKEN = opt.TOKEN;
  EncodingAESKey = opt.EncodingAESKey;
}

export { auth as init, TOKEN, EncodingAESKey };
