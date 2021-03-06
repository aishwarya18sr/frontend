import axios from 'axios';
import { BACKEND_URLS } from '../../constants/apiEndPoints';

const makeRequest = async (apiEndPoint, dynamicConfig = {}) => {
  const requestDetails = {
    ...apiEndPoint, url: `${BACKEND_URLS}${apiEndPoint.url}`, ...dynamicConfig,
  };
  const { data } = await axios(requestDetails);
  return data;
};

export default makeRequest;
