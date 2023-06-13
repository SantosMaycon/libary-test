# Projeto para Aula 2 de Tópicos Avançados 2

## Projeto
Um sistema onde é possível verificar os livros disponíveis, fazer empréstimos e devoluções.

## Entidades
Todas as entidades estenderão da classe Entity que possui um id único gerado automaticamente pelo pacote uuid (Identificador Único Universal).

### Entity
- Atributos:
  - id (string): Identificador único gerado automaticamente.

### User
- Atributos:
  - login (string): Login do usuário.
  - password (string): Senha do usuário (armazenada no formato hash).

### Author
- Atributos:
  - name (string): Nome do autor.
- Observação: Um livro pode ter mais de um autor.

### Book
- Atributos:
  - title (string): Título do livro.
  - authors (array): Autores do livro.
  - edition (string): Edição do livro.
  - publisher (string): Editora do livro.
  - year (number): Ano de publicação do livro.
  - pages (number): Número de páginas do livro.
  - quantity (number): Quantidade total de exemplares do livro.
  - available (number): Quantidade disponível de exemplares do livro.

### Borrowing
- Atributos:
  - user (User): Usuário que realiza o empréstimo.
  - book (Book): Livro emprestado.
  - start_date (date): Data de início do empréstimo.
  - end_date (date): Data de término do empréstimo.
  - returned (boolean): Indica se o livro foi devolvido.
  - returned_date (date): Data de devolução do livro.
