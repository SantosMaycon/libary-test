export default interface ILoan {
  id: string; // Identificador único do empréstimo.
  bookId: string; // Identificador único do livro emprestado.
  userId: string; // Identificador único do usuário que pegou o livro emprestado.
  loanDate: Date; // Data em que o livro foi emprestado.
  returnDate: Date; // Data em que o livro deve ser devolvido.
  returnedAt?: Date; // Data em que o livro foi devolvido.
}
