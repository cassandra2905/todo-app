//Interface representant comment doit être mon objet
export interface Todo {
    id: number;
    title: string;
    done: boolean;
    description?: string;
}