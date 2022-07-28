export const BASE_URL = 'https://auth.nomoreparties.co';


export const register = (email, password) => {
  console.log(password)
  console.log(email)
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json" 
    },
    body: JSON.stringify({email, password})
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};



export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({email, password})
  })
  .then((response => response.json()))
    .then((data) => {
    console.log(data)
      if (data.token){
        localStorage.setItem('jwt', data.token);
      return data;
    }
  })
  .catch(err => console.log(err))
}; 