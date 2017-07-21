'use strict';
const data = require('./data');

const response = (statusCode, url) => {
    console.log("URL "+ typeof(url));
    return {
        status: statusCode,
        statusDescription: 'Found',
        headers: {
            location: [{
                key: 'Location',
                value: `${url}`
            }],
        },
    };
};

module.exports.lookup = (event, context, callback) => {
    console.log(event);
    process.on('unhandledRejection', (reason, message) => {
        console.error(reason);
        console.error(message);
        callback(reason,null);
    });

    Promise.all([data.pathOf(event.requestContext.path)
        .then(path => data.lookup(path))
        .then((url) => response(302, url))
        .catch(() => response(404))
        .then((resp) => callback(null, resp))
    ]);
};
