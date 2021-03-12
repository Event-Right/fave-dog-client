import * as request from 'superagent';

const URL = 'https://hidden-fjord-82693.herokuapp.com';

export async function searchLocations(search: string, sortBy: string) {
  const location = await request.get(
    `${URL}/dogs?location=${search}&sort_by=${sortBy}`
  );

  return location.body;
}

export async function getLocations() {
  const event = await request.get(`${URL}/dogs`);
  
  return event.body;
}

export async function getDogHouse(id: string) {
  const DogHouse = await request.get(`${URL}/dogs/${id}`);

  return DogHouse.body;
}

export async function logInUser(email: string, password: string, name: string) {
  const response = await request.post(`${URL}/auth/signin`).send({
    email: email,
    password: password,
    name: name
  });

  return response.body;
}

export async function signUpUser(email: string, password: string, name: string) {
  const response = await request.post(`${URL}/auth/signup`).send({
    email: email,
    password: password,
    name: name
  });

  return response.body;
}

export async function addFavorite(location: string, token: string) {
  const response = await request
    .post(`${URL}/api/favorites`)
    .set('Authorization', token)
    .send(location);

  return response.body;
}

export async function getFavorites(token: string) {
  const { body } = await request
    .get(`${URL}/api/favorites`)
    .set('Authorization', token);

  return body;
}

export async function deleteFavorites(token: string, id: number) {
  const { body } = await request
    .delete(`${URL}/api/favorites/${id}`)
    .set('Authorization', token);

  return body;
}
