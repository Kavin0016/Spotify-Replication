import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

class ChangePassword extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user: this.props.user
        }
    }

    checkAndUpdatePassword(newpassword1,newpassword2){
        if(newpassword1 == newpassword2){
            document.changePassword_From.new_pwd.value = "";
            document.changePassword_From.new_re_pwd.value = "";
            console.log("changepwd fn. called");
            console.log(this.props.updateUser.changeUserPassword);
            this.setState({
                user: null
            })
            this.props.updateUser.changeUserPassword(newpassword1,this.props.user.email);
        }
    }

    render(){
        return(
            <>
            <label className="CP_topLabel">Change your password</label>
            <form name="changePassword_From">
            <div className="CP_fieldGroup">
                <div className="CP_textboxLabel">
                    Current password
                </div>
                <div className="CP_textboxContainer">
                    <input className="CP_textBox" readOnly={true} placeholder="Enter your current password" name="curr_pwd" value={this.props.user.password}></input>
                </div>
            </div>
            <div className="CP_fieldGroup">
                <div className="CP_textboxLabel">
                    New password
                </div>
                <div className="CP_textboxContainer">
                    <input className="CP_textBox" placeholder="Enter your new password" name="new_pwd"></input>
                </div>
            </div>
            <div className="CP_fieldGroup">
                <div className="CP_textboxLabel">
                    Repeat new password
                </div>
                <div className="CP_textboxContainer">
                    <input className="CP_textBox" placeholder="Enter your new password again" name="new_re_pwd"></input>
                </div>
            </div>
            <div className="EP_saveprofileContainer">
                <div className="EP_cancelBtn" onClick={() => this.props.changeState.changeState("account_overview")}>
                    CANCEL
                </div>
                <div className="EP_saveprofileBtn" onClick={() => this.checkAndUpdatePassword(document.changePassword_From.new_pwd.value,document.changePassword_From.new_re_pwd.value)}>
                    SET NEW PASSWORD
                </div>
            </div>
            </form>
            </>
        )
    }
}

export default ChangePassword;