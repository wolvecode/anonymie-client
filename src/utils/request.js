const baseUrl = 'http://127.0.0.1:5000'

exports.signUp = (fullName, email, password) => {
  return fetch(baseUrl + '/signup', {
    method: 'POST',
    body: JSON.stringify(fullName, email, password),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

exports.login = (email, password) => {
  const data = { email, password }
  return fetch(baseUrl + '/login', {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}
