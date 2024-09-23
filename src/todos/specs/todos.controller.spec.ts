import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from '../todos.controller';
import { TodosService } from '../todos.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';
describe('TodosController', () => {
  let controller: TodosController;
  let service: TodosService;
  let repository: Repository<Todo>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [TodosService,
        {
          provide: getRepositoryToken(Todo),
          useClass: Repository
        },
      ],
    }).compile();

    controller = module.get<TodosController>(TodosController);
    service = module.get<TodosService>(TodosService);
    repository = module.get<Repository<Todo>>(getRepositoryToken(Todo));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
