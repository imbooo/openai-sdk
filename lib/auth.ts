let TOKEN = ''
let EncodingAESKey = ''

function auth(opt: any) {
  TOKEN = opt.TOKEN
  EncodingAESKey = opt.EncodingAESKey
}

export { auth as init, TOKEN, EncodingAESKey };
