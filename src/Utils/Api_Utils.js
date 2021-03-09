import request from 'superagent';

const URL = 'https://hidden-fjord-82693.herokuapp.com';

export async function searchLocations(search) {
  const location = await request.get(`${URL}/dogs?location=${search}`);
  
  return location.body;
}

<<<<<<< HEAD
export async function getDogs() {
  const Dogslist = await request.get(`${URL}/dogs`); 
  return Dogslist.body;
}
export async function getDogHouse(id) {
  const DogHouse = await request.get(`${URL}/dogs/${id}`); 
  return DogHouse.body;
=======
export async function getLocations() {
  const event = await request.get(`${URL}/dogs`); //
  return event.body;
>>>>>>> e6b65f2f8b3dbd1c166cea1d8ff86e6bb104d5b0
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
export async function addFavorite(location, token) {
  console.log(token, 'token')
  const response = await request
    .post(`${URL}/api/favorites`)
    .set('Authorization', token)
    .send(location);
  return response.body;
}

export async function getFavorites(token) {
  const { body } = await request
    .get(`${URL}/api/favorites`)
    .set('Authorization', token);

  return body;
}

export async function deleteFavorites(token, id) {
  const { body } = await request
    .delete(`${URL}/api/favorites/${id}`)
    .set('Authorization', token);

    return body;
}