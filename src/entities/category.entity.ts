import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Todo } from "./todo.entity";

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @ManyToMany(() => Todo, (todo) => todo.categories)
  @JoinTable({name: 'todo_x_category'})
  todos: Todo[];
}
