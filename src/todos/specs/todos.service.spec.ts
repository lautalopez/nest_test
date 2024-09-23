import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from '../todos.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';

describe('TodosService', () => {
  let service: TodosService;
  let repository: Repository<Todo>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodosService,
        {
          provide: getRepositoryToken(Todo),
          useClass: Repository
        },
      ],
    }).compile();

    service = module.get<TodosService>(TodosService);
    repository = module.get<Repository<Todo>>(getRepositoryToken(Todo));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a user when findOne is called', async () => {
    const todo = { id: 1, name: 'John Doe' } as Todo;
    jest.spyOn(repository, 'findOne').mockResolvedValue(todo);

    const result = await service.findOne(1);
    expect(result).toEqual(todo);
  });
});
