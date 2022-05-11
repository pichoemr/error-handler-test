'use strict'

const user_data_service = require("../services/user_data_service");

module.exports = (props, event, api) => {
    console.log(props);
    console.log(event);

    // var response = await user_data_service.get(api);

    // return user_data_service.put(api, response.data.data[0]._id, {
    //     register: false,
    // })
}