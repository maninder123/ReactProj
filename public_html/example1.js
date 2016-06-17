// first example with createClass
var CommentBox1 = React.createClass({
  
  getData:function(){
      return 'this is the simple data'
  },
  
  render: function() {
    return (
      <div>{this.getData()}</div>
    );
  }
});
ReactDOM.render(<CommentBox1 />,document.getElementById('example1'));