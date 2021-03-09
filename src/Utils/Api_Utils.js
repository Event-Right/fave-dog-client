import request from 'superagent';

const URL = 'https://hidden-fjord-82693.herokuapp.com';

export async function searchEvents(search) {
  const event = await request.get(`${URL}/events?search=${search}`)
  console.log(event);
  return event.body.results;
}

export async function getEvents() {
  const event = await request.get(`${URL}/events`); //
  return event.body;
}

export async function addFavorite(event, token){
  const { body } = await request
    .post(`${URL}/api/favorites`)
    .set('Authorization', token)
    .send(event)

    return body;
}

export async function getFavorites(token){
  const { body } = await request
    .get(`${URL}/api/favorites`)
    .set('Authorization', token);

    return body;
}