import axios from 'axios';
import { CREATE_EVENT } from './types';

export function createEvent(event) {
  return dispatch => {
    return axios.post('/api/events', event);
  }
}
