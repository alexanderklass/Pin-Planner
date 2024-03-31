import axios, { AxiosResponse } from 'axios';

export const URL = 'http://localhost:3001';
const token = ' apiToken';

const apiClient = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json',
        authorization: token,
    },
});

interface RequestData {
    endpoint: string;
    method?: 'GET' | 'POST';
    data?: object;
}

export const AxiosRequest = async ({ endpoint, method = 'GET', data }: RequestData): Promise<AxiosResponse> => {
    switch (method) {
        case 'GET':
            return apiClient.get(endpoint);
        case 'POST':
            return apiClient.post(endpoint, data);
        default:
            throw new Error(`Invalid method: ${method}`);
    }
};
