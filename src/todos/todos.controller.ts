import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { GetAllParamsDto } from './dto/get-all-params.dto';
import { ParseIdPipe } from 'src/infrastructure/pipes/parse-id.pipe';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(
    @Body() createTodoDto: CreateTodoDto,
  ) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  findAll(@Query() params: GetAllParamsDto) {
    return this.todosService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id', ParseIdPipe) id: number) {
    return this.todosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIdPipe) id: number) {
    return this.todosService.remove(id);
  }
}
