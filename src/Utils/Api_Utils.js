import request from 'superagent';

const URL = 'https://hidden-fjord-82693.herokuapp.com';

export async function searchEvents(search) {
  const location = await request.get(`${URL}/dogs?location=${search}`);
  console.log(location.body.results);
  return location.body;
}

export async function getDogs() {
  const Dogslist = await request.get(`${URL}/dogs`); 
  return Dogslist.body;
}
export async function getDogHouse(id) {
  const DogHouse = await request.get(`${URL}/dogs/${id}`); 
  return DogHouse.body;
}

export async function logInUser(email, password) {
  const response = await request.post(`${URL}/auth/signin`).send({
    email: email,
    password: password,
  });

  return response.body;
}

export async function signUpUser(email, password) {
  const response = await request.post(`${URL}/auth/signup`).send({
    email: email,
    password: password,
  });

  return response.body;
}
export async function addFavorite(event, token) {
  const { body } = await request
    .post(`${URL}/api/favorites`)
    .set('Authorization', token)
    .send(event);

  return body;
}

export async function getFavorites(token) {
  const { body } = await request
    .get(`${URL}/api/favorites`)
    .set('Authorization', token);

  return body;
}
