const baseUrl = 'https://nonymi-server.herokuapp.com'

exports.signUp = (fullName, email, password) => {
  return fetch(baseUrl + '/signup', {
    method: 'POST',
    body: JSON.stringify(fullName, email, password),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

exports.login = (email, password) => {
  return fetch(baseUrl + '/login', {
    method: 'post',
    body: JSON.stringify(email, password),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}
