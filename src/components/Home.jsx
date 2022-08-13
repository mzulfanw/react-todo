import React from 'react'
import CreateTodo from './todos/CreateTodo'
import { useFormik } from 'formik'
import useTodoStore from '../store/todo'
import ListTodo from './todos/ListTodo'

const validate = values => {
  const errors = {}

  if (!values.todo) {
    errors.todo = 'Todo harus diisi'
  } else if (values.todo.length < 5) {
    errors.todo = 'Minimal 5 kata '
  }

  return errors
}

function Home() {
  // Read data from the zustand 
  const todos = useTodoStore((state) => state.list)
  const handleAddTodo = useTodoStore((state) => state.addTodo)


  // Logic for the form, we're using formik to handle it 
  const formik = useFormik({
    initialValues: {
      id: 2,
      todo: '',
      isDone: false
    },
    validate,
    onSubmit: values => {
      handleAddTodo(values)

      // reset form 
      formik.resetForm()
    }
  })


  return (
    <div className='pt-10'>
      <h1
        className='text-center text-xl'
      >
        React TodoList
      </h1>
      <CreateTodo
        onChange={formik.handleChange}
        value={formik.values}
        error={formik.errors}
        handleSubmit={formik.handleSubmit}
      />
      <ListTodo
        list={todos}
      />
    </div>
  )
}

export default Home