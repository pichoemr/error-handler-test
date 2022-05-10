'use strict'

module.exports = (counters, props) => {
    return {
        type: "flex",
        children: [
            {
                type: "button",
                text: "New Counter",
                onPressed: {
                    action: "newCounter"
                }
            },
            {
                type: "text",
                value: "Shared counters : "
            },
            {
                type: "flex",
                direction: "vertical",
                children: counters.sort((a, b) => a._id - b._id).map((counter) => {
                    return {
                        type: "widget",
                        name: "counter",
                        props: counter
                    }
                })
            }
        ]
    }
}

