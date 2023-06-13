# Estórias de Usuário no formato Gherkin

## Funcionalidade: Consultar livros
  Como usuário <br>
  Eu quero consultar livros <br>
  Para saber se o livro está disponível <br>

  ### Cenário: Encontrar livro com sucesso
    Dado que o usuário está na tela de consulta de livros
    Quando o usuário informa o título do livro "Código Limpo"
    Então o sistema exibe as informações do livro

  ### Cenário: Não encontrar livro
    Dado que o usuário está na tela de consulta de livros
    Quando o usuário informa o título do livro "Código Limpo"
    Então o sistema informa que o livro não foi encontrado

## Funcionalidade: Agendar empréstimo de livro selecionado
  Como usuário <br>
  Eu quero informar data de retirada e devolução <br>
  Para agendar o empréstimo do livro selecionado  <br>

  ### Cenário: Agendar empréstimo com sucesso
    Dado que o usuário está na tela de agenda de empréstimo
    Quando o usuário informa a data de retirada e devolução
    Então o sistema agenda o empréstimo

  ### Cenário: Angendar empréstimo sem sucesso
    Dado que o usuário está na tela de agenda de empréstimo
    Quando o usuário informa a data de retirada e devolução
    E o usuário já possui um empréstimo não devolvido
    Então o sistema informa que o usuário tem empréstimo pendente
