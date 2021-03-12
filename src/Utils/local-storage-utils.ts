export const USER: string = 'USER';
export const ID: string = 'ID';


export function getUserFromLocalStorage() {
  const user = localStorage.getItem(USER);

  if (user) return JSON.parse(user);
  return {
    email: '',
    id: '',
    token: '',
    name: '',
  };
}

export function putUserInLocalStorage(user: object) {
  localStorage.setItem(USER, JSON.stringify(user));
}

export function getIdFromLocalStorage() {
  const id = localStorage.getItem(ID);
  if (id) return JSON.parse(id);
}

export function putIdInLocalStorage(id: number) {
  localStorage.setItem(ID, JSON.stringify(id));
}
