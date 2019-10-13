import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import ContactDetails from './ContactDetails';
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
      <Switch>
        <Route path="/contact/:id" Component={ContactDetails}></Route>
      </Switch>
      </Router>
      </div>
    )
  }
}
export default Contact;