/*example to change state value using setState function*/
class CommentBox extends React.Component {
        
        constructor(){
            super();
            this.state={
               txt:'This is the Default text'
            }
        }
               
        update(e){
            this.setState({txt :e.target.value})
        }
        
        render() {           
        return (
              <div>
              <input type='text' onChange={this.update.bind(this)} />
              <h1>{this.state.txt}
              </h1>
              </div>
               )
        }  
        }
        
ReactDOM.render(<CommentBox />,document.getElementById('example2'));