import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Vince'
    };
    this.sayName = this.sayName.bind(this)
  }
  sayName(){
    console.log(this.state.name)
  }
  render() {
    return (
      <div>
        <button onClick={this.sayName} >sayName</button>
      </div>
    );
  }
}
export default App;
