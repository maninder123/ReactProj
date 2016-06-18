/*using multiple components and jsx*/
class MyLabel extends React.Component{
    render(){
       return React.createElement("label", {className: "label"},
      React.createElement("span", {className: "label"}, this.props.label),
      this.props.children
      
    ); 
    }
}
class App extends React.Component{
    render(){
        return React.createElement(MyLabel, {label: "Enter Your Name"},
        React.createElement("div", {},
        React.createElement("input", {type: "text", value: "And here is a child"})
       
      )
    );
    }
    }
    
 ReactDOM.render(<App />, document.getElementById('multiple'))