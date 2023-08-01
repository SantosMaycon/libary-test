### O que são test doubles e a diferença entre Fake, Stub, Spy, Mock e Dummy?

Dummy: são objetos que são passados como parâmetro para uma função, mas não são utilizados por ela.

```
// Real function that will be tested
function fetchData(client: DatabaseClient): Promise<string> {
  return client.fetchData();
}

// Test using a dummy database client
test('fetchData from the dummy database client returns the correct data', async () => {
  const dummyClient = new DummyDatabaseClient();
  const data = await fetchData(dummyClient);
  expect(data).toBe('Dummy data'); // The dummy client returns 'Dummy data'
});
```

Fake: podem ser classes, objetos ou funções que possuem uma resposta fixa independente da maneira que forem chamadas.

```
// Fake implementation of a database client
class FakeDatabaseClient {
  fetchData(): Promise<string> {
    return Promise.resolve('Fake data'); // Fake implementation, always returns 'Fake data'
  }
}

// Test using a fake database client
test('fetchData from the fake database client returns the correct data', async () => {
  const fakeClient = new FakeDatabaseClient();
  const data = await fakeClient.fetchData();
  expect(data).toBe('Fake data'); // The fake client returns 'Fake data'
});
```

Spy: são objetos que gravam informações sobre as chamadas feitas a eles, como por exemplo, quais argumentos foram passados, quantas vezes foram chamados, etc.

```
// Real function that will be spied on
function logMessage(message: string): void {
  console.log(message);
}

// Test using a spy
test('logMessage is called with the correct message', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  logMessage('Hello, world!');
  expect(consoleSpy).toHaveBeenCalledWith('Hello, world!'); // The spy records the call to console.log with the correct message
});
```

Stub: são spies que conseguem mudar o comportamento dependendo da maneira em que forem chamados.

```
// Real function that will be stubbed
function logMessage(message: string): void {
  console.log(message);
}

// Test using a stub
test('logMessage is called with the correct message', () => {
  const consoleStub = jest.spyOn(console, 'log').mockImplementation(() => {}); // Stub the console.log function
  logMessage('Hello, world!');
  expect(consoleStub).toHaveBeenCalledWith('Hello, world!'); // The stub records the call to console.log with the correct message
});
```

Mock: são spies que conseguem mudar o comportamento dependendo da maneira em que forem chamados e também conseguem verificar se foram chamados corretamente.

```
// Real function that will be mocked
function logMessage(message: string): void {
  console.log(message);
}

// Test using a mock
test('logMessage is called with the correct message', () => {
  const consoleMock = jest.spyOn(console, 'log').mockImplementation(() => {}); // Mock the console.log function
  logMessage('Hello, world!');
  expect(consoleMock).toHaveBeenCalledWith('Hello, world!'); // The mock records the call to console.log with the correct message
  expect(consoleMock).toHaveBeenCalledTimes(1); // The mock was called exactly once
});
```

### TDD x BDD: quais as diferenças?

TDD (Test Driven Development) é uma técnica de desenvolvimento de software que consiste em escrever os testes antes de escrever o código que será testado. O objetivo é que o código seja escrito de forma mais simples e que atenda aos requisitos do teste.

BDD (Behavior Driven Development) é uma técnica de desenvolvimento de software que consiste em escrever os testes de forma que eles descrevam o comportamento esperado do código. O objetivo é que os testes sejam mais fáceis de serem lidos e entendidos.

### Gherkin é uma linguagem de domínio específico que facilita a escrita de testes BDD

Gherkin é uma linguagem de domínio específico que facilita a escrita de testes BDD. Ela é composta por palavras-chave que descrevem o comportamento esperado do código. Por exemplo:

```
Funcionalidade: Login
  Cenário: Login bem sucedido
    Dado que estou na página de login
    Quando eu digitar meu nome de usuário e senha
    Então eu devo estar logado
```

### Quais as vantagens de se utilizar TDD?

- Código mais simples e objetivo
- Código mais fácil de ser mantido
- Código mais fácil de ser testado
- Código mais fácil de ser reutilizado
- Código mais fácil de ser refatorado
- Código mais fácil de ser documentado
- Código mais fácil de ser entendido
- Código mais fácil de ser alterado
- Código mais fácil de ser evoluído
- Código mais fácil de ser debugado
- Código mais fácil de ser integrado
- Código mais fácil de ser entregue

### Github Actions

Github Actions é uma ferramenta de CI/CD integrada ao Github. Ela permite que você crie workflows que serão executados automaticamente quando determinados eventos ocorrerem no seu repositório, como por exemplo, quando um pull request for aberto ou quando um commit for feito na branch master.

CI: Continuous Integration (Integração Contínua) é uma prática de desenvolvimento de software que consiste em integrar o código de todos os desenvolvedores em um repositório compartilhado várias vezes ao dia. O objetivo é que o código seja integrado o mais rápido possível para que os desenvolvedores possam identificar e corrigir problemas de integração o mais rápido possível.

CD: Continuous Delivery (Entrega Contínua) é uma prática de desenvolvimento de software que consiste em entregar o código para o cliente o mais rápido possível. O objetivo é que o código seja entregue o mais rápido possível para que o cliente possa testá-lo e dar feedback o mais rápido possível.

### Deploy 

Deploy é o processo de implantação de uma aplicação em um ambiente de produção. O objetivo é que a aplicação esteja disponível para os usuários finais.

### Arquitetura Limpa

Arquitetura Limpa é um conjunto de boas práticas de desenvolvimento de software que consiste em separar o código em camadas, de forma que cada camada tenha uma responsabilidade única. O objetivo é que o código seja mais fácil de ser mantido, testado, reutilizado, refatorado, documentado, entendido, alterado, evoluído, debugado e integrado.

Camadas: são partes do código que possuem uma responsabilidade única. As camadas mais comuns são:

- Entities: são as entidades da aplicação, como por exemplo, um usuário, um produto, etc.
- Use Cases: são os casos de uso da aplicação, como por exemplo, um usuário fazer login, um usuário cadastrar um produto, etc.
- Controllers: são os controladores da aplicação, como por exemplo, uma rota de login, uma rota de cadastro de produto, etc.
- Gateways: são as interfaces que permitem que a aplicação se comunique com o mundo externo, como por exemplo, uma interface de banco de dados, uma interface de API, etc.
- Frameworks & Drivers: são os frameworks e drivers que permitem que a aplicação se comunique com o mundo externo, como por exemplo, um framework web, um driver de banco de dados, etc.


### Tipos de injeção de dependência

Injeção de dependência é um padrão de projeto que consiste em passar as dependências de uma classe por meio do construtor, em vez de instanciá-las dentro da classe. O objetivo é que a classe seja mais fácil de ser testada, pois as dependências podem ser substituídas por mocks ou stubs.

Existem três tipos de injeção de dependência:

- Construtor: as dependências são passadas por meio do construtor da classe
- Método: as dependências são passadas por meio de um método da classe
- Propriedade: as dependências são passadas por meio de uma propriedade da classe
- Registro: as dependências são passadas por meio de um registro da classe

### Inversão de dependência 

Inversão de dependência é um padrão de projeto que consiste em fazer com que as classes de alto nível não dependam das classes de baixo nível. O objetivo é que o código seja mais fácil de ser mantido, testado, reutilizado, refatorado, documentado, entendido, alterado, evoluído, debugado e integrado.