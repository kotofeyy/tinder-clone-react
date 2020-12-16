import RegNewUser from './RegNewUser.js'

//Проверка на длину
test('Короткий пароль', async () => {
    let data = {}
    data.newName = "nikita"
    data.newPassword = "ni"
    data.newLogin = "nik400" 
    expect(() => RegNewUser(data)).toThrow();
  });
  test('Короткий логи', async () => {
    let data = {}
    data.newName = "nikita"
    data.newPassword = "ni111"
    data.newLogin = "ni" 
    expect(() => RegNewUser(data)).toThrow();
  });

  test('Короткий ник', async () => {
    let data = {}
    data.newName = "ni"
    data.newPassword = "ni111"
    data.newLogin = "nik400" 
    expect(() => RegNewUser(data)).toThrow();
  });

//Проверка на пустоту
  test('Пустой логин', async () => {
    let data = {}
    data.newName = "ni12"
    data.newPassword = "ni111"
    data.newLogin = "" 
    expect(() => RegNewUser(data)).toThrow();
  });

  test('Пустой пароль', async () => {
    let data = {}
    data.newName = "ni12"
    data.newPassword = ""
    data.newLogin = "niktia" 
    expect(() => RegNewUser(data)).toThrow();
  });

  test('Пустой ник', async () => {
    let data = {}
    data.newName = ""
    data.newPassword = "ni111"
    data.newLogin = "nikita324" 
    expect(() => RegNewUser(data)).toThrow();
  });

  //Проверка на Верхний регистр
  test('капс логин', async () => {
    let data = {}
    data.newName = "ni12"
    data.newPassword = "ni111"
    data.newLogin = "NIKITA" 
    expect(() => RegNewUser(data)).toThrow();
  });

  test('капс пароль', async () => {
    let data = {}
    data.newName = "ni12"
    data.newPassword = "NI111"
    data.newLogin = "nikita" 
    expect(() => RegNewUser(data)).toThrow();
  });

  test('капс имя', async () => {
    let data = {}
    data.newName = "NIKITACOOL"
    data.newPassword = "ni111"
    data.newLogin = "nikita" 
    expect(() => RegNewUser(data)).toThrow();
  });

  // проверка на максимум
  test('Длинный пароль', async () => {
    let data = {}
    data.newName = "nikita"
    data.newPassword = "ni1111111111111111111"
    data.newLogin = "nik400" 
    expect(() => RegNewUser(data)).toThrow();
  });
  test('Длинный логин', async () => {
    let data = {}
    data.newName = "nikita"
    data.newPassword = "ni111"
    data.newLogin = "ni2222222222222222222222222" 
    expect(() => RegNewUser(data)).toThrow();
  });

  test('Длинный ник', async () => {
    let data = {}
    data.newName = "ni33333333333333333333333333"
    data.newPassword = "ni111"
    data.newLogin = "nik400" 
    expect(() => RegNewUser(data)).toThrow();
  });