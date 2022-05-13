'use strict'

module.exports = (data, props) => {
    return {
        type: "flex",
        fillParent: true,
        direction: "horizontal",
        mainAxisAlignment: "center",
        children: [
            {
                type: "flex",
                direction: "vertical",
                children: [
                    // {
                    //     type: "text",
                    //     value: "Please enter your pseudo !"
                    // },
                    {
                        type: "container",
                        child: {
                            type: "textfield",
                            value: "",
                            onChanged: {
                                action: "register"
                            },
                            style: {
                                decoration: {
                                    labelText: "Please enter your pseudo !",
                                    filled: true,
                                    fillColor: 0xFFBBDEFB,
                                },
                            }
                        },
                        padding: {
                            bottom: 2,
                            top: 2,
                            left: 2,
                            right: 2
                        },
                    },
                ]
            }
        ]
    }
}

