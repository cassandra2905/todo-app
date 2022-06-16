// Classe type script qui nous permet de décrire ce qui arrive lorsqu'on à du POST à gérer
export class createTodoDto {
    readonly id: number;
    readonly title: string;
    readonly done: boolean;
    readonly description?: string;
}