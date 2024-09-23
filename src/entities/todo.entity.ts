import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity({ name: 'todos' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  done: boolean;
  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(() => Category, (category) => category.todos)
  @JoinTable({name: 'todo_x_category'})
  categories: Category[];
}
