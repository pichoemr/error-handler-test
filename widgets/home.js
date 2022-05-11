'use strict'

module.exports = (data, props) => {
    return {
        type: "flex",
        fillParent: true,
        direction: "vertical",
        children: [
            {
                type: "container",
                child: {
                    type: "widget",
                    name: "header",
                }
            },
            {
                type: "flex",
                fillParent: true,
                direction: "horizontal",
                children: [
                ]
            },
        ]
    }
}

