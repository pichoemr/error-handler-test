'use strict'

module.exports = (data, props) => {
    console.log(data)
    if (data.register) {
        return {
            type: "widget",
            name: "home"
        }
    } else {
        return {
            type: "flex",
            fillParent: true,
            direction: "vertical",
            children: [
                {
                    type: "text",
                    value: "Welcome to Lenra chat !"
                },
                {
                    type: "text",
                    value: "Please enter yout pseudo !"
                },
                {
                    type: "textfield",
                    value: "",
                    onChanged: {
                        action: "register"
                    }
                },
            ]
        }
    }

}

