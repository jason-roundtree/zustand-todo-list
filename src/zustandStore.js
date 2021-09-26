import create from 'zustand'

const sampleTodo = {
    id: '123',
    text: 'make todo list in zustand'
}
const useStore = create(set => ({
    todos: [sampleTodo],
    addTodo: (todo) => set(state => {
        return { todos: [ ...state.todos, todo ] }
    }),
    removeTodo: (todoId) => set(state => {
        const filteredTodos = state.todos.filter((todo) => {
            return todo.id !== todoId
        })
        return { todos: filteredTodos }
    })
}))

export default useStore