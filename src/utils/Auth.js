const storage = localStorage;
const TOKEN_KEY = 'auth_token';
const CURRENT_USER = 'current_user';

const setJsonValue = (key, value) => {
  storage.setItem(
    key,
    JSON.stringify(value)
  );
};

const getJsonValue = (key) => {
  const encodedStoredToken = storage.getItem(key);
  let result = null;
  if (encodedStoredToken) {
    try {
      result = JSON.parse(encodedStoredToken);
    } catch (e) { }
  }
  return result;
};


export const setToken = (token) => {
  storage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return storage.getItem(TOKEN_KEY);
};

export function deleteToken() {
  storage.removeItem(TOKEN_KEY);
}

export const setCurrentUser = (user) => {
  setJsonValue(CURRENT_USER, user);
};

export const getCurrentUser = () => {
  return getJsonValue(CURRENT_USER);
};

export function deleteCurrentUser() {
  storage.removeItem(CURRENT_USER);
}


export const isLoggedIn = () => {
  const currentUser = getCurrentUser();
  const authToken = getToken();

  return !!currentUser && !!authToken
}

export const isAdmin = () => {
  const currentUser = getCurrentUser();

  if (!currentUser) return false
  return currentUser.roles.includes("ROLE_ADMIN")
}

export const logOut = () => {
  deleteToken();
  deleteCurrentUser()

  window.location.reload();
}

export const getRoleByUser = () => {
  const user = getCurrentUser();

  if (!user) return ""
  if( user.roles.includes("ROLE_ADMIN")) return "Administrador"
  if( user.roles.includes("ROLE_USER")) return "Empleado"
}