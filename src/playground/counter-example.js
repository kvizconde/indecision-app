/* eslint-disable */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  }
  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
    console.log(this.state);
  }
  handleMinusOne() {
    this.setState(prevState => {
      return {
        // no negative values
        count: prevState.count > 0 ? prevState.count - 1 : prevState.count,
      };
    });
  }
  handleReset() {
    this.setState(prevState => {
      return {
        count: (prevState.count = 0),
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
