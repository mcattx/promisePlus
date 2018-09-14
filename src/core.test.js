var Promise = require('./core');

var p = new Promise(function (resolve, reject) {
  if (true) {
    setTimeout(function () {
      resolve(110);
    });
  } else {
    setTimeout(function () {
      reject(9527);
    });
  }
});

p.then(function (res) {
  console.log(res);
}).then(function (res) {
  console.log(res + 10);
}, function (reason) {
  console.log('reject: ' + reason);
});
