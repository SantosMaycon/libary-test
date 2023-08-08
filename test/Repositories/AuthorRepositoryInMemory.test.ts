import IAuthor from "../../src/Interfaces/Entities/IAuthor";
import AuthorRepositoryInMemory from "../../src/Repositories/in-memory/AuthorRepositoryInMemory";

describe('AuthorRepositoryInMemory', () => {
  const obj: IAuthor = {
    id: '1',
    name: 'J. R. R. Tolkien',
  }

  let repositoryWithAuthor: AuthorRepositoryInMemory;

  beforeEach(() => {
    repositoryWithAuthor = new AuthorRepositoryInMemory();
    repositoryWithAuthor.create(obj);
  });

  describe('createAuthor', () => {
    it('should create an author', async () => {
      const repository = new AuthorRepositoryInMemory();
      const author = await repository.create(obj);
      expect(author).toEqual(obj);
    });

    it('should return null if author already exists', async () => {
      await repositoryWithAuthor.create(obj);
      const author = await repositoryWithAuthor.create(obj);
      expect(author).toBeNull();
    });
  });

  describe('findAuthors', () => {
    it('should return a list of authors', async () => {
      const authorList = await repositoryWithAuthor.findAll();
      expect(authorList).toEqual([obj]);
    });
  
    it('should return an empty authorlist', async () => {
      const repository = new AuthorRepositoryInMemory();
      const authorList = await repository.findAll();
      expect(authorList).toEqual([]);
    });
  });

  describe('findAuthorById', () => {
    it('should return an author by id', async () => {
      const author = await repositoryWithAuthor.findById('1');
      expect(author).toEqual(obj);
    });

    it('should return null if author does not exist', async () => {
      const author = await repositoryWithAuthor.findById('2');
      expect(author).toBeNull();
    });
  });

  describe('findAuthorByName', () => {
    it('should return an author by name', async () => {
      const author = await repositoryWithAuthor.findBy('name', 'J. R. R. Tolkien');
      expect(author).toEqual([obj]);
    });

    it('should return null if author does not exist', async () => {
      const author = await repositoryWithAuthor.findBy('name', 'J. R. R. Tolkien 2');
      expect(author).toEqual([]);
    });
  });


  describe('updateAuthor', () => {
    it('should update an author', async () => {
      const author = await repositoryWithAuthor.update('1', { name: 'J. R. R. Tolkien' });
      expect(author).toEqual(obj);
    });

    it('should return null if author does not exist', async () => {
      const author = await repositoryWithAuthor.update('2', { name: 'J. R. R. Tolkien' });
      expect(author).toBeNull();
    });
  });

  describe('deleteAuthor', () => {
    it('should delete an author', async () => {
      const author = await repositoryWithAuthor.delete('1');
      expect(author).toEqual(obj);
    });

    it('should return null if author does not exist', async () => {
      const author = await repositoryWithAuthor.delete('2');
      expect(author).toBeNull();
    });
  });
});
