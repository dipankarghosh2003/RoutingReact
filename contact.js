import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Link} from 'react-router-dom';
class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state={
      contactList:[]
    }
  }
  componentDidMount(){
    console.log("inside it");
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      const result=res.data;
      //console.log(result);
      this.setState({
        contactList:result
      });
      console.log(this.state.contactList);

    });
    console.log(this.state.contactList);
  }
  render(){
    return(
      <div>
      <Router>
      <ul>
      {this.state.contactList.map(contact=><li><Link to={`/contact/${contact.id}`}>{contact.name}</Link></li>)}
      </ul>
      </Router>
      </div>
    )
  }
}
export default Contact;