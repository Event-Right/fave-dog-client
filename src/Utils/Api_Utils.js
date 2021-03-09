import request from 'superagent';

const URL = 'https://hidden-fjord-82693.herokuapp.com';

export async function searchEvents(search) {
  const event = await request.get(`${URL}/favorites?name=${search}`);

  return event.body;
}

export async function getEvents() {
  const { body } = await request.get(`${URL}/favorites`); //
  return body;
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
