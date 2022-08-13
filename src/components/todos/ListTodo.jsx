import React from 'react'
import PropTypes from 'prop-types'

function ListTodo({
  list
}) {


  return (
    <div className='p-5'>
      {
        list.length > 0 && (
          list.map((value, index) => (
            <p key={index}>{value.todo}</p>
          ))
        )
      }
    </div>
  )
}

ListTodo.propTypes = {
  list: PropTypes.array
}

export default ListTodo