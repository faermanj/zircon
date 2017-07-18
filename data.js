'use strict';

const urls = {
  'gist' : 'https://gist.github.com/jfaerman/546902c79d21e53c3a724d00a30566f2',
  'zircon':'https://github.com/jfaerman/zircon',
  'sec-job0': 'https://www.youtube.com/watch?v=T7MnJOfOVcY',
  'sec-overview': 'https://d0.awsstatic.com/whitepapers/aws-security-whitepaper.pdf',
  'sec-minicon': 'https://www.youtube.com/watch?v=8ZljcKn8FPA',
  'aws-tue': 'https://www.youtube.com/watch?v=AyOAjFNPAbA',
  'tdc-aws17':'https://gist.github.com/jfaerman/4b2f97922bb41fa2df322492d01b3cf5'
};

const pathOf = (path) =>
    new Promise((resolve) => {
        resolve(`${path}`.split('/').slice(-1)[0]);
});

const lookup = (path) =>  new Promise((resolve,reject) => {
    const url = urls[path];
    if (url) {
      resolve(url);
    }
    else {
      reject();
    }
  });

module.exports.lookup = lookup;
module.exports.pathOf = pathOf;
