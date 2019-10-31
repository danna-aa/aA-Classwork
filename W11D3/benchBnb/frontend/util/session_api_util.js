const signup = (user) => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  })
);

const login = (user) => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
);

const logout = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
);

export default { logout, login, signup };