export const getData = () => {
  return fetch('photo.json').then((data) => {
    return data.json();
  });
};
