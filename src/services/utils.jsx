export const dateFormater = (date) =>
  new Date(date)
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');

export const isLoggedIn = JSON.parse(localStorage.getItem('ili'));
