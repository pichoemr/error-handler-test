'use strict'

const salonService = require("../services/salonService");


module.exports = (props, event, api) => {
    return salonService.createDatastore(api).catch((e => { console.log(e) }));
}