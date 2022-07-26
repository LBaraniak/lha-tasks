class  Validator {
  static checkEmail(email) {
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      throw new Error('Invalid email address');
    }
  }

  static isString(test) {
    if(typeof test !== 'string') {
      throw new Error('input value must be string');
    }
  }
}

class EmailBuilder{
  constructor() {
    this._mail = {
      from: "",
      to: "",
      title: "",
      cc: [],
      bcc: [],
      html: "",
    };
  }

  setFrom(from) {
    Validator.isString(from);
    Validator.checkEmail(from);
    this._mail.from = from;
    return this;
  }

  setTo(to) {
    Validator.isString(to);
    Validator.checkEmail(to);
    this._mail.to = to;
    return this;
  }

  setTitle(title) {
    Validator.isString(title)
    this._mail.title = title;
    return this;
  }

  _FunctionFactory(input, name) {
    if(!Array.isArray(input) && typeof input !== 'string') throw new Error('type error')

    if (this._mail.hasOwnProperty(name)) throw new Error(`bad proprty name: ${name}`) 

    if (typeof input === 'string') {
      Validator.checkEmail(input)
      this._mail[name].push(input)
      return this
    }

    input.forEach( el =>{
      Validator.isString(el)
      Validator.checkEmail(el)
      this._mail[name].push(el)
    })
    return this;
  }


  setCc(cc) {
    return this._FunctionFactory(cc, "cc")
  }

  setBcc(bcc) {
    return this._FunctionFactory(bcc, "bcc")
  }

  setHtml(html) {
    Validator.isString(html);
    this._mail.html = html;
    return this;
  }

  // Stwórz metody które będą zmieniać parametry from, to, title, cc, bcc, html

  buildMail = () => {
    return this._mail;
  }
}
const email = new EmailBuilder().setFrom('baraniak.l@gmail.com').setCc([]).buildMail()
console.log(email)