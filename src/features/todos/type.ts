interface Todo {
    id: number,
    text: string,
    completed: boolean
}

export interface StateTodo {
    items: Todo[]
    filter: 'all' | 'active' | 'completed'
}