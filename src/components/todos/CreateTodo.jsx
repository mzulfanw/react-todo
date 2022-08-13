import React from 'react'
import Button from '../form/Button'
import Input from '../form/Input'
import PropTypes from 'prop-types'

function CreateTodo({
  value,
  error,
  onChange = () => { },
  handleSubmit = () => { }
}) {

  return (
    <div
      className='flex justify-center items-center flex-col'
    >
      <div className='mt-10'>
        <Input
          id='todo'
          name='todo'
          label='Masukan Todo anda hari ini'
          onChange={onChange}
          value={value.todo}
          error={error.todo}
        />
      </div>
      <div>
        <Button
          label='Tambah'
          onClick={handleSubmit}
          type='submit'
        />
      </div>
    </div>
  )
}

CreateTodo.propTypes = {
  value: PropTypes.object,
  error: PropTypes.any,
  onChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default CreateTodo