'use strict';
const data = require('./data');

const response = (statusCode, url) => {
    return {
        statusCode: statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Location': `${url}`
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

    Promise.all([data.pathOf(event.path)
        .then(path => data.lookup(path))
        .then((url) => response(302, url))
        .catch(() => response(404))
        .then((resp) => callback(null, resp))
    ]);
};
