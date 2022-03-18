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

export const CREATE_NEW_TASK_URL = (listId) => ({
  url: `tasks/${listId}`,
  method: 'post',
});

export const EDIT_TASK_URL = (taskId) => ({
  url: `tasks/${taskId}`,
  method: 'patch',
});
