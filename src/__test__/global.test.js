const text = 'Hola Mundo';

test('Debe contener un texto', () => {
  expect(text).toMatch(/Mundo/);
});

test('Es mayor que', () => {
  expect(10).toBeGreaterThan(9);
});

test('Verdadero', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
}

test('Reverse Callback', () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH');
  })
});

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str)
      reject(Error('Error'));
    resolve(str.split('').reverse().join(''));
  });
}

test('Test Promesa', () => {
  return reverseString2('hola').then(str => {
    expect(str).toBe('aloh');
  });
})

test('Test Async Await', async () => {
  const str = await reverseString2('Hola');
  expect(str).toBe('aloH');
})

afterEach(() => {
  console.log('Despues de cada prueba');
})

afterAll(() => {
  console.log('Despues de todas las pruebas');
})

beforeEach(() => {
  console.log('Antes de cada prueba');
})

beforeAll(() => {
  console.log('Antes de todas las pruebas');
})