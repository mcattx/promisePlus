function Promise(executor) {
  var self = this;
  this.state = 'pending';
  this.value = undefined;
  this.reason = undefined;
  this.onFulfilledQueuee = [];
  this.onRejectedQueue = [];

  function resolve(value) {
    self.state = 'fulfilled';
    self.value = value;
    self.onFulfilledQueuee.forEach(function (fn) {
      fn.call(this, value);
    });
  }

  function reject(reason) {
    self.state = 'rejected';
    self.reason = reason;
    self.onRejectedQueue.forEach(function (fn) {
      fn.call(this, reason);
    });
  }

  executor(resolve, reject);
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  // 避免 onFulfilled 不是 function 导致 fn.call(this, value) 失败
  if (typeof onFulfilled !== 'function') {
    onFulfilled = function (x) {
      return x;
    };
  }
  // 避免 onRejected 不是 function 导致 fn.call(this, value) 失败
  if (typeof onRejected !== 'function') {
    onRejected = function (r) {
      return r;
    };
  }
  this.onFulfilledQueuee.push(onFulfilled);
  this.onRejectedQueue.push(onRejected);
  return this;
};

// for tests
Promise.deferred = Promise.defer = function () {
  var dfd = {};
  dfd.promise = new Promise(function (resolve, reject) {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

module.exports = Promise;
