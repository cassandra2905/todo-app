import { Injectable, NotFoundException } from '@nestjs/common';
import { createTodoDto } from './dto/create-todo.dto';
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

    create(todo: createTodoDto) {
        this.todos = [...this.todos, todo];
    }

    update(id: string, todo: Todo) {
        // récuupérer le todo à mettre à jour
        const todoToUpdate = this.todos.find(todo => todo.id === +id);
        if (!todoToUpdate) {
            return new NotFoundException('avez vous trouvé ce todo');
        }
        // appliquer la mise à jour d'une seule propriéte (ici, la propriéte done)
        if (todo.hasOwnProperty('done')) {
            todoToUpdate.done = todo.done;
        }
        // appliquer la mise à jour d'une seule propriéte (ici, la propriéte title)
        if (todo.title) {
            todoToUpdate.title = todo.title;
        }
        // 
        if (todo.description) {
            todoToUpdate.description = todo.description;
        }
        const updatedTodos = this.todos.map(t => t.id !== +id ? t : todoToUpdate);
        this.todos = [...updatedTodos];
        return { updatedTodo: 1, todo: updatedTodos };
    }
}
