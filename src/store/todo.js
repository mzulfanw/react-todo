import create from 'zustand'

// eslint-disable-next-line no-unused-vars
const useTodoStore = create((set) => ({
    list: 0,
    addTodo: () => set(state => ({ list: state.list + 1 }))
}))



export default useTodoStore