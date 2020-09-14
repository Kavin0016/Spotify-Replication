import React from 'react';
import profile_icon from './img/AO_profile_icon.png';
import a_icon from './img/AO_A_icon.png';
import ac_icon from './img/AO_AO_icon.png';
import ep_icon from './img/AO_EP_icon.png';
import cp_icon from './img/AO_CP_icon.png';
import ns_icon from './img/AO_NS_icon.png';
import rp_icon from './img/AO_RP_icon.png';
import r_icon from './img/AO_R_icon.png';
import re_icon from './img/AO_RE_icon.png';
import Overview from './nestedComponent/Overview';
import EditProfile from './nestedComponent/EditProfile';
import ChangePassword from './nestedComponent/ChangePassword';
import NotificationSetting from './nestedComponent/NotificationSettings';
import PrivacySettings from './nestedComponent/PrivacySettings';
import RecoverPlaylists from './nestedComponent/RecoverPlaylists';
import Receipts from './nestedComponent/Receipts';
import Apps from './nestedComponent/Apps';
import {BrowserRouter as Router, Link, Switch, Route, useRouteMatch} from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class AccountOverview extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            account_overview : true,
            edit_profile: false,
            change_password: false,
            notification_settings: false,
            privacy_settings: false,
            recovery_playlists: false,
            receipts: false,
            apps: false,
            redeems: false,
            user:this.props.user
        }
    }

    changeLeftPanelButtonState = (list) => {
        let status = this.state;
        let activeKey = '';
        let foundKey = '';
        for(let key in status){
            if(key == list){
                foundKey = list;
            }
        }
        for(let key in status){
            if(status[key]){
                activeKey = key;
                break;
            }
        }
        for(let key in status){
            if(activeKey == list)
            return;
        }

        this.setState({
            [foundKey]: !this.state[foundKey],
            [activeKey]: !this.state[activeKey]
        })    
    }

    changeState = (toActive) => {
        let availableTags = this.state;
        let activeKey = '';
        for(let key in availableTags){
            if(availableTags[key]){
                activeKey = key;
                break;
            }
        }
        this.setState({
            [toActive]: !this.state[toActive],
            [activeKey]: !this.state[activeKey]
        })
    }

    render(){
        return(
            <div className="AO_Body">
            <div className="container">
                <div className="AO_leftPanel">
                    <div className="AO_leftPanel_Container">
                        <img src={profile_icon} className="AO_profileIcon"></img>
                        <p className="AO_linkwithImg" style={{ borderLeft: this.state.account_overview ? "solid "+5+"px green" : ""}} onClick={() => this.changeLeftPanelButtonState("account_overview")}>
                            <img src={ac_icon} style={{display:"inline-block",marginLeft:-40+"px",marginRight:20+"px"}}></img>
                            <span>Account overview</span>
                        </p>
                        <p className="AO_linkwithImg" style={{ borderLeft: this.state.edit_profile ? "solid "+5+"px green" : ""}} onClick={() => this.changeLeftPanelButtonState("edit_profile")}>
                        <img src={ep_icon} style={{display:"inline-block",marginLeft:-40+"px",marginRight:20+"px"}}></img>
                            Edit profile
                        </p>
                        <p className="AO_linkwithImg" style={{ borderLeft: this.state.change_password ? "solid "+5+"px green" : ""}} onClick={() => this.changeLeftPanelButtonState("change_password")}>
                        <img src={cp_icon} style={{display:"inline-block",marginLeft:-40+"px",marginRight:20+"px"}}></img>
                            Change password
                        </p>
                        <p className="AO_linkwithImg" style={{ borderLeft: this.state.notification_settings ? "solid "+5+"px green" : ""}} onClick={() => this.changeLeftPanelButtonState("notification_settings")}>
                        <img src={ns_icon} style={{display:"inline-block",marginLeft:-40+"px",marginRight:15+"px"}}></img>
                            Notification settings
                        </p>
                        <p className="AO_linkwithImg" style={{ borderLeft: this.state.privacy_settings ? "solid "+5+"px green" : ""}} onClick={() => this.changeLeftPanelButtonState("privacy_settings")}>
                        <img src={cp_icon} style={{display:"inline-block",marginLeft:-40+"px",marginRight:20+"px"}}></img>
                            Privacy settings
                        </p>
                        <p className="AO_linkwithImg" style={{ borderLeft: this.state.recovery_playlists ? "solid "+5+"px green" : ""}} onClick={() => this.changeLeftPanelButtonState("recovery_playlists")}>
                        <img src={rp_icon} style={{display:"inline-block",marginLeft:-40+"px",marginRight:20+"px"}}></img>
                            Recover playlists
                        </p>
                        <p className="AO_linkwithImg" style={{ borderLeft: this.state.receipts ? "solid "+5+"px green" : ""}} onClick={() => this.changeLeftPanelButtonState("receipts")}>
                        <img src={r_icon} style={{display:"inline-block",marginLeft:-40+"px",marginRight:20+"px"}}></img>
                            Receipts
                        </p>
                        <p className="AO_linkwithImg" style={{ borderLeft: this.state.apps ? "solid "+5+"px green" : ""}} onClick={() => this.changeLeftPanelButtonState("apps")}>
                        <img src={a_icon} style={{display:"inline-block",marginLeft:-40+"px",marginRight:20+"px"}}></img>
                            Apps
                        </p>
                        <p className="AO_linkwithImg" style={{ borderLeft: this.state.redeems ? "solid "+5+"px green" : ""}} onClick={() => this.changeLeftPanelButtonState("redeems")}>
                        <img src={re_icon} style={{display:"inline-block",marginLeft:-40+"px",marginRight:20+"px"}}></img>
                            Reedems
                        </p>
                    </div>
                </div>
                <div className="AO_rightPanel">
                    {this.state.account_overview &&
                        // <Overview user={this.props}/>
                        // <Redirect to="overview" />
                        <Overview user={this.props.user} updateUser={this.props.updateUser} changeState={{changeState: this.changeLeftPanelButtonState}}/>
                    }
                    {this.state.edit_profile &&
                        <EditProfile user={this.props.user} changeState={{changeState: this.changeLeftPanelButtonState}} editUserInfo = {this.props.updateUser} />
                    }
                    {this.state.change_password &&
                        <ChangePassword user={this.props.user} updateUser={this.props.updateUser} changeState={{changeState: this.changeLeftPanelButtonState}}/>
                    }
                    {this.state.notification_settings &&
                        <NotificationSetting user={this.props.user} changeState={{changeState: this.changeLeftPanelButtonState}}/>
                    }
                    {this.state.privacy_settings &&
                        <PrivacySettings />
                    }
                    {this.state.recovery_playlists &&
                        <RecoverPlaylists />
                    }
                    {this.state.receipts &&
                        <Receipts />
                    }
                    {this.state.apps &&
                        <Apps />
                    }

                    <Switch>
                        <Route exact path="/account/overview" render = {() => <Overview />} />
                        <Route path="edit" render={() => <EditProfile user={this.props.user} changeState={{changeState: this.changeLeftPanelButtonState}}/>} />
                    </Switch>
                </div>
            </div>
            </div>
        )
    }
}

export default AccountOverview;