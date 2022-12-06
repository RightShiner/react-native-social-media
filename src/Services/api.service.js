import axios from 'axios';

export const PostApi = (url, data, config) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, config)
      .then(response => {
        resolve(response.data);
      })
      .catch(e => {
        reject(e.response.data);
      });
  });
};

export const PutApi = (url, data, config) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(url, data, config)
      .then(response => {
        resolve(response.data);
      })
      .catch(e => {
        reject(e.response.data);
      });
  });
};

export const GetApi = (url, config) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, config)
      .then(response => {
        resolve(response.data);
      })
      .catch(e => {
        reject(e.response.data);
      });
  });
};

export const DeleteApi = (url, data, config) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, data, config)
      .then(response => {
        resolve(response.data);
      })
      .catch(e => {
        reject(e.response.data);
      });
  });
};
