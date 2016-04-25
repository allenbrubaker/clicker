var React = require('react')
var Subjects = require('../subjects')

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.counter = props.counter
  }
  increment() {
    Subjects.incrementCounter.next()
  }
  render() {
    return (
      <div onClick={this.increment}>
        Clicks: {this.counter}
      </div>
    );
  }
}

module.exports = Root;