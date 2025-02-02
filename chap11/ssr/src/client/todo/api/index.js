import axios from 'axios';

import config from '@configuration';

import { isBrowser } from '@utils/frontend';

import { API } from './constants';

class Api {
    static fetchTodo() {
        // For Node (SSR) we have to specify our base domain (http://localhost:3000/api/todo/list)
        // For Client Side Render just /api/todo/list.
        const url = isBrowser()
            ? API.TODO
            : `${config.baseUrl}/${API.TODO}`;

        return axios(url);
    }
}

export default Api;