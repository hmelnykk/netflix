import axios, { AxiosInstance } from "axios";

let client: null | AxiosInstance = null;

const getClient = () => {
    if (client) {
        return client
    }

    client = axios.create({
        baseURL: 'http://localhost:1337',
        // proxy: {
        //     protocol: 'http',
        //     host: 'localhost',
        //     port: 1337,
        // }
    });

    return client;
}

export default getClient;