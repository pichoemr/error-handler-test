'use strict'

const { default: axios } = require("axios");
const counterService = require("../services/counterService");

module.exports = (props, event, api) => {
    let me = await axios.post(`${api.url}/app/query`,
        {
            "$find": {
                "_datastore": "_users",
                "_id": "@me"
            }
        }
        , { headers: { Authorization: `Bearer ${api.token}` } });
    let data = await counterService.new(api, me._id).then(function (response) {
        response.data
    })
    console.log(data)
    return data
}