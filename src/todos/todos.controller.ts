import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { createTodoDto } from './dto/create-todo.dto';
import { Todo } from './interfaces/todo.interface';
import { TodosService } from './todos.service';

// localhost:3000/todos
@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService) { }

    // Mise en place du CRUD

    // Récupérer un objet todo par son id 
    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log('id', id);
        return this.todosService.findOne(id);
    }

    // Récupérer le tableau des objets toto
    @Get()
    getAllTodos(): Todo[] {
        return this.todosService.findAll();
    }

    // Modifier le tableau des objets toto 
    @Post()
    createTodo(@Body() newTodo: createTodoDto) {
        this.todosService.create(newTodo);
    }

    // Mettre à jour un objet todo existant
    @Patch(':id')
    updateTodo(@Param('id') id: string, @Body() todo: createTodoDto) {
        return this.todosService.update(id, todo);
    }
}
