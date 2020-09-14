import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from 'react-router-dom';
import {Redirect} from 'react-router';
import Signup from './Singup';
import AccountOverview from './accountUrl/AccountOverview';
import OtherHeader from './OtherHeader';
import ValidateUser from './ValidateUser';
import './App.css';
import './styles.css';
import './bootstrap-3.3.7-dist/css/bootstrap.min.css'
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import Login from './Login';
import InHomePage from './InHomePage';
import WebPlayer from './webPlayer/WebPlayer';
import Overview from './accountUrl/nestedComponent/Overview';
import { render } from '@testing-library/react';



class App extends React.Component {
  constructor(props){
    super(props);
    this.updateUser.bind(this);
    this.userCredientials = [];
    this.loggedInCredientials = {};
    this.state = {
      userCredientials: [],
      loggedInCredientials: {}
    }
    localStorage.setItem('userCredientials', JSON.stringify(this.userCredientials));
    localStorage.setItem('loggedInCredientials', JSON.stringify(this.loggedInCredientials));
    alert(this.props.history);// throws the same error;
  }

  logoutUser(){
    let emptyUser = this.state.loggedInCredientials;
    console.log("Empty User obj =>");
    for(let key in emptyUser){
      emptyUser[key] = "";
      console.log(key+":"+emptyUser[key]);
    }
    Object.entries(emptyUser);
    this.setState({
      loggedInCredientials: emptyUser     
    })
    // delete this.state.loggedInCredientials;
    console.log("Logged out status: => "+Object.entries(this.state.loggedInCredientials))
  }

  updateUser(email,password){
    let userCredientials = JSON.parse(localStorage.getItem('userCredientials'));
    let component = "";
    let Router = require('react-router');
    if(this.state.loggedInCredientials){    
      userCredientials.map((user) =>{
          if(user.email == email){
              if(user.password == password){
                let loggedInCredientials_dummy = {...this.state.loggedInCredientials};
                let key ='';
                for(key in user){
                  this.loggedInCredientials[key] = user[key];
                  loggedInCredientials_dummy[key] = user[key];
                  console.log("Copy => "+key+":"+loggedInCredientials_dummy[key]);
                }
                this.setState({
                  loggedInCredientials: loggedInCredientials_dummy
                })
                component = "/account";
                console.log("component => "+component);
                // Router.browserHistory.push("/account");
              }
              else{
                alert("password incoorect");
                component = "/login";
                console.log("component => "+component);
                return;              
              }
          }
          else{
            alert("Email incoorect");
            component = "/login";
            console.log("component => "+component);
            return;
          }
      })
      return(<Router><Redirect to={component}/></Router>)
    }
  }

  changeUserPassword(newPassword,email){
    let UserCredientials = JSON.parse(localStorage.getItem('userCredientials'));
    let userIndex = -1;
    UserCredientials.map((user) => {
      if(user.email == email){
        user.password = newPassword;
        console.log("password changed ["+newPassword+"]");
        this.loggedInCredientials = user;
        userIndex = this.userCredientials.indexOf(user);
        return(<Redirect to="/account" />)
      }
    })
    UserCredientials[userIndex] = this.loggedInCredientials;
    this.setState({
      loggedInCredientials: this.loggedInCredientials
    })
    localStorage.removeItem('userCredientials');
    localStorage.setItem('userCredientials', JSON.stringify(UserCredientials));
    console.log(JSON.parse(localStorage.getItem('userCredientials')));
  }

  editUserInfo(Obj){
    console.log(Obj);
    let UserCredientials = JSON.parse(localStorage.getItem('userCredientials'));
    let userIndex = -1;
    UserCredientials.map((user) => {
      if(user.mail == Obj.mail){
        userIndex = UserCredientials.indexOf(user);
        for(let key in user){
          user[key] = Obj[key];
          console.log("Key = "+key+" value = "+Obj[key]);
        }
        this.loggedInCredientials = user;
      }
    })
    UserCredientials[userIndex] = this.loggedInCredientials;
    this.setState({
      loggedInCredientials: this.loggedInCredientials
    })
    localStorage.removeItem('userCredientials');
    localStorage.setItem('userCredientials', JSON.stringify(UserCredientials));
    console.log(JSON.parse(localStorage.getItem('userCredientials')));
  }


  render()
  {
    return (
      <>
      <Router>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" render = {() => <Login updateUser={{update : this.updateUser.bind(this)}}/>}/>
          <Route exact path="/" exact>
            <Header></Header>
            <HomePage></HomePage>
            <Footer></Footer>
          </Route>
          <Route exact path="/account">
            <OtherHeader Url={{url:"acc"}} updateUser={{logoutUser: this.logoutUser.bind(this)}}/>
            <Route render={(routerProps) => <AccountOverview {...routerProps} user={this.state.loggedInCredientials} updateUser={{changeUserPassword: this.changeUserPassword.bind(this),editUserInfo: this.editUserInfo.bind(this),logoutUser: this.logoutUser.bind(this)}}/>} />
            <Footer />
          </Route>
          <Route exact path="/in">
          <OtherHeader Url={{url:"in"}} updateUser={{logoutUser: this.logoutUser.bind(this)}}/>
          <InHomePage />
          <Footer />
          </Route>
          <Route exact path="/webPlayer">
            <WebPlayer user={this.state.loggedInCredientials} updateUser={{logoutUser: this.logoutUser.bind(this)}}/>
          </Route>
        </Switch>
      </Router>
      </>
    );
  }
}

export default App;
