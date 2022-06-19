import { API_URL_PHOTOS, ACCESS_KEY } from './const.js';

export const getData = ({ page = 1, count, idPhoto }) => {
  const url = new URL(API_URL_PHOTOS);

  url.searchParams.set('client_id', ACCESS_KEY);

  if (page && count) {
    url.searchParams.append('per_page', count);
    url.searchParams.append('page', page);
  }

  if (idPhoto) {
    console.log(url);
    url.pathname += `/${idPhoto}`;
  }

  const headers = {};

  if (localStorage.getItem('Bearer')) {
    headers['Autorization'] = `Bearer ${localStorage.getItem('Bearer')}`;
  }

  return fetch(url, { headers }).then((data) => {
    return data.json();
  });
};
