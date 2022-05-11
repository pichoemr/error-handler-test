'use strict'

const { default: axios } = require("axios");

module.exports = {
    get(api, chatId) {
        return axios.get(`${api.url}/app/datastores/Counter/data/${chatId}`, { headers: { Authorization: `Bearer ${api.token}` } }
        );
    },
    put(api, chat) {
        return axios.put(`${api.url}/app/datastores/Counter/data/${chat._id}`, chat, { headers: { Authorization: `Bearer ${api.token}` } });
    },
    new(api, text, pseudo) {
        return axios.post(`${api.url}/app/datastores/Counter/data`, { "text": text, "pseudo": pseudo }, { headers: { Authorization: `Bearer ${api.token}` } });
    },
    delete(api, chatId) {
        return axios.delete(`${api.url}/app/datastores/Counter/data/${chatId}`, { headers: { Authorization: `Bearer ${api.token}` } });

    },
    createDatastore(api) {
        return axios.post(`${api.url}/app/datastores`, { "name": "Chat" }, { headers: { Authorization: `Bearer ${api.token}` } });
    }
}
