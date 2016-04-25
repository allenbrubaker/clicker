var Update = require('react/lib/update');
var Subjects = require('./subjects')

class IncrementCounter {
  constructor() {
    this._subject = Subjects.incrementCounter
    this._state = {counter: 0}
    this._subject.next(this._state)
  }
  
  _incrementCounter() {
    this._state = Update(this._state, {
      $merge: {
        counter: this._state.counter + 1
      }
    })
    return this._state
  }
  
  get subject() {
    return this._subject.map(this._incrementCounter)
  }
};

module.exports = IncrementCounter