import Rx from 'rxjs'

module.exports = {
  incrementCounter: new Rx.ReplaySubject(1)
}