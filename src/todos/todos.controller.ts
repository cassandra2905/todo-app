import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { TodosService } from './todos.service';

// localhost:3000/todos
@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService) { }

    // Récupérer un objet todo par son id 
    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log('id', id);
        return this.todosService.findOne(id);
    }

    // Récupérer le tableau des objets
    @Get()
    getAllTodos(): Todo[] {
        return this.todosService.findAll();
    }

    // Modifier le tableau des objets 
    @Post()
    createTodo(@Body() newTodo) {
        this.todosService.create(newTodo);
    }
}
