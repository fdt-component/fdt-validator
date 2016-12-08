import validator from 'index';

class App {
  constructor() {
    this.test = this.test.bind(this);
    this.test(1234567890);
    this.test('543258363@qq.com');
    this.test('wer yui o pqqcom');
    this.test('142301199203100295');
    this.test('13890000000');
    this.test(void 0);
  }

  test(str) {
    document.write('测试 ' + str + '</br>');
    document.write('checkNum:     ' + validator.checkNum(str) + '</br>');
    document.write('checkEmail:     ' + validator.checkEmail(str) + '</br>');
    document.write('checkEmpty:     ' + validator.checkEmpty(str) + '</br>');
    document.write('checkIDCard:     ' + validator.checkIDCard(str) + '</br>');
    document.write('checkSpell:     ' + validator.checkSpell(str) + '</br>');
    document.write('checkMobile:     ' + validator.checkMobile(str) + '</br>');
    document.write('</br>');
    document.write('</br>');
  }
}

new App();
