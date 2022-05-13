'use strict'

module.exports = (data, props) => {
    if (data.register) {
        return {
            type: "widget",
            name: "home"
        }
    } else {
        return {
            type: "widget",
            name: "register"
        }
    }
}

