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
        body: ''
    };
};

const pathOf = (path) =>
    new Promise((resolve) => {
        resolve(`${path}`.split('/').slice(-1)[0]);
});

module.exports.lookup = (event, context, callback) => {
    process.on('unhandledRejection', (reason, message) => {
        console.error(reason);
        console.error(message);
        callback(reason,null);
    });

    Promise.all([pathOf(event.path)
        .then(path => data.lookup(path))
        .then((url) => response(301, url))
        .catch(() => response(404))
        .then((resp) => callback(null, resp))
    ]);
};
