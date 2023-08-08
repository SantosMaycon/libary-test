# Casos de uso

## Caso de uso 1: Agendar empréstimo

### Pré-condições
- O livro deve estar cadastrado no sistema.
- O livro deve estar disponível.

### Fluxo principal
1. O usuário informa o login e a senha.
2. O sistema verifica se o usuário está cadastrado.
3. O sistema verifica se a senha está correta.
4. O sistema verifica se o livro está disponível.
5. O sistema agenda o empréstimo.

### Fluxo alternativo
2. O sistema informa que o usuário não está cadastrado.
3. O sistema informa que a senha está incorreta.
4. O sistema informa que o livro não está disponível.

## Caso de uso 2: Agendar devolução

### Pré-condições
- O livro deve estar cadastrado no sistema.
- O livro deve estar emprestado.

### Fluxo principal
1. O usuário informa o login e a senha.
2. O sistema verifica se o usuário está cadastrado.
3. O sistema verifica se a senha está correta.
4. O sistema verifica se o livro está emprestado.
5. O sistema agenda a devolução.

### Fluxo alternativo
2. O sistema informa que o usuário não está cadastrado.
3. O sistema informa que a senha está incorreta.
4. O sistema informa que o livro não está emprestado.

## Caso de uso 3: Consultar livros disponíveis

### Pré-condições
- O usuário deve estar cadastrado no sistema.

### Fluxo principal
1. O usuário informa o título do livro.
2. O sistema verifica se o livro está cadastrado.
3. O sistema exibe as informações do livro.

### Fluxo alternativo
2. O sistema informa que o livro não está cadastrado.

## Foram omitidos os casos de uso de cadastro de usuário, cadastro de livro e cadastro de autor, pois são casos de uso simples de CRUD (Create, Read, Update, Delete).
