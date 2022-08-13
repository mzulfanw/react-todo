import create from 'zustand'

// eslint-disable-next-line no-unused-vars
const useTodoStore = create((set) => ({
  list: [
    {
      id: 1,
      todo: 'Bersihin Kamar',
      isDone: false
    }
  ],
  addTodo: (values) => set(state => state.list = [...state.list, values])
}))



export default useTodoStore