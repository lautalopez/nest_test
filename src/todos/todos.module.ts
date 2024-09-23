import { Module, ValidationPipe } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_PIPE } from '@nestjs/core';
import { Todo } from 'src/entities/todo.entity';
import { Category } from 'src/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo, Category])
  ],
  controllers: [TodosController],
  providers: [
    TodosService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true
        }
      })
    }
  ],
})
export class TodosModule {}
