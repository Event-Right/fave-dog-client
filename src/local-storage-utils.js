export const USER = 'USER';
export const ID = 'ID';
export function getUserFromLocalStorage() {
  const user = localStorage.getItem(USER);

  if (user && user.token) return JSON.parse(user);
  else
    return {
      email: '',
      id: '',
      token: '',
    };
}

export function putUserInLocalStorage(user) {
  localStorage.setItem(USER, JSON.stringify(user));
}
export function getIdFromLocalStorage() {
  const id = localStorage.getItem(ID);
  if (id) return JSON.parse(id);
}
export function putIdInLocalStorage(id) {
  localStorage.setItem(ID, JSON.stringify(id));
}
