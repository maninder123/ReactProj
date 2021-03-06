      /*example to get table with dynamic data*/
      class Basic extends React.Component {
        
        constructor(){
            super();
            this.state={
                data:[
                    {id:1,name:'Abc',email:'abc@gmail.com'},
                    {id:2,name:'Def',email:'def@gmail.com'},
                    {id:3,name:'xyz',email:'xyz@gmail.com'},
                    {id:4,name:'123',email:'123@gmail.com'},
                    {id:5,name:'456',email:'456@gmail.com'},
                    {id:6,name:'789',email:'789@gmail.com'},
                    {id:7,name:'aBC',email:'aBC@gmail.com'},
                    {id:8,name:'dEF',email:'dEF@gmail.com'},
                    {id:9,name:'eFG',email:'eFG@gmail.com'},
                    {id:10,name:'xYZ',email:'xYZ@gmail.com'},
                    {id:11,name:'111',email:'111@gmail.com'},
                    {id:12,name:'222',email:'222@gmail.com'},
                ]
            }
        }
        
        render() {
            let rows=this.state.data.map(person =>{
                return <PersonRow key={person.id} data={person} />
            }) 
    
        return (
               <table class='table table-border'>
               <tbody>{rows}</tbody>
               </table>
               )
        }  
        }
         const PersonRow = (props) => {
            return <tr>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.email}</td>
            </tr>
        }
        
        ReactDOM.render(<Basic />,document.getElementById('example3'));
      