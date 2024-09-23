import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ITodosService } from './todos.interface';
import { GetAllParamsDto } from './dto/get-all-params.dto';
import { DEFAULT_PAGE_SIZE } from 'src/infrastructure/const';
import { Todo } from '@entities/todo.entity';

@Injectable()
export class TodosService implements ITodosService {
  constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(createTodoDto);
    return await this.todoRepository.save(todo);
  }

  async findAll(params: GetAllParamsDto): Promise<Todo[]> {
    return this.todoRepository.find({
      skip: params.skip,
      take: params.limit ?? DEFAULT_PAGE_SIZE
    });
  }

  async findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOne({
      where: {
        id
      }
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.findOne(id);
    // if (!todo) return NotFoundException('')
    Object.assign(todo, updateTodoDto);
    await this.todoRepository.update(id, todo);
    return todo;
  }

  async remove(id: number) {
    const todo = await this.findOne(id);
    return await this.todoRepository.remove(todo);
  }
}
