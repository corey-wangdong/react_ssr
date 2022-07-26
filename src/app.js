import React from 'react';

class App extends React.PureComponent {
  handleClick = (e) => {
    alert(e.target.innerHTML);
  }

  render() {
    return <h1 onClick={this.handleClick}>hello world</h1>;
  }
}

export default App;
