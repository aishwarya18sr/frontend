export const BACKEND_URLS = 'http://localhost:3000/';

export const LIST_URL = {
  url: 'lists/',
  method: 'get',
};

export const getTaskUrl = (id) => ({
  url: `tasks/${id}/`,
  method: 'get',
});

export const CREATE_NEW_LIST_URL = {
  url: 'lists/',
  method: 'post',
};
