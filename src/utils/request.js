const baseUrl = 'http://127.0.0.1:5000'

exports.signUp = (email, password) => {
  const data = { email, password }
  return fetch(baseUrl + 'signup', {
    method: 'POST',
    body: JSON.stringify(data),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

// exports.login = (email, password) => {
//   const data = { email, password }
//   return fetch(baseUrl + 'login', {
//     method: 'post',
//     mode: 'cors',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then(res => res.json())
// }
