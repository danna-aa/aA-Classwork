export const fetchTodos = () => {
  return $.ajax ({
    url: '/api/todos',
    method: 'get'
  })
}

export const postTodos = () => {
  return $.ajax({
    url: '/api/todos',
    method: 'post'
  })
}


export const fetchTodo = (todo) => {
  return $.ajax({
    url: `/api/todos/${todo.id}`,
    method: 'get'
  })
}


export const patchTodos = (todo) => {
  return $.ajax({
    url: `/api/todos/${todo.id}`,
    method: 'update'
  })
}

export const fetchTodos = () => {
  return $.ajax({
    url: '/api/todos',
    method: 'get'
  })
}


export const fetchTodos = () => {
  return $.ajax({
    url: '/api/todos',
    method: 'get'
  })
}