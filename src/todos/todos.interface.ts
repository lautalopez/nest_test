import { Todo } from "src/entities/todo.entity";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { GetAllParamsDto } from "./dto/get-all-params.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";

export interface ITodosService {
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    findAll(params: GetAllParamsDto): Promise<Todo[]>;
    findOne(id: number): Promise<Todo>;
    update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo>;
    remove(id: number): Promise<any>
}