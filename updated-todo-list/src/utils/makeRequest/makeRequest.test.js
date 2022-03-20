import axiosMock from 'axios';
import makeRequest from './makeRequest';

jest.mock('axios');

describe('makeRequest', () => {
  it('should load and display the data', async () => {
    axiosMock.mockResolvedValueOnce({
      data: { greeting: 'hello there' },
    });

    await makeRequest({ url: 'lists', method: 'get' });
    expect(axiosMock).toHaveBeenCalledTimes(1);
    expect(axiosMock).toHaveBeenCalledWith({ url: 'http://localhost:3000/lists', method: 'get' });
  });
});
