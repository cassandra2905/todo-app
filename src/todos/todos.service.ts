import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

//Mon objet
@Injectable()
export class TodosService {
    todos: Array<Todo> = [
        {
            id: 1,
            title: 'todos app',
            description: 'Create NestJS todos app',
            done: false,
        },
        {
            id: 2,
            title: 'bread',
            description: 'Buy bread',
            done: true,
        },
        {
            id: 3,
            title: 'wine',
            description: 'Buy wine',
            done: true,
        },
    ];

    findOne(id: string): Todo {
        return this.todos.find(todo => todo.id === Number(id));
    }

    findAll(): Todo[] {
        return this.todos;
    }

    create(todo: Todo) {
        this.todos = [...this.todos, todo];
    }
}
