import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

class Overview extends React.Component{
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
            redeems: false
        }
    }

    render(){
        return(
            <>
            <label className="AO_topLabel"> Account Overview </label>
                    <label className="AO_profileLabel">Profile</label>
                    <tabel className="AO_Tabel">
                        <tr>
                            <td className="AO_tabelLeft">
                                Username
                            </td>
                            <td className="AO_tabelRight">
                            {this.props.user.profileName}
                            </td>
                        </tr>
                        <tr>
                            <td className="AO_tabelLeft">
                                Email
                            </td>
                            <td className="AO_tabelRight">
                            {this.props.user.email}                            
                            </td>
                        </tr>
                        <tr>
                            <td className="AO_tabelLeft">
                                Gender
                            </td>
                            <td className="AO_tabelRight">
                            {this.props.user.gender}                            
                            </td>
                        </tr>
                    </tabel>
                    <div className="AO_editprofileBtn" onClick={() => this.props.changeState.changeState("edit_profile")}>
                        EDIT PROFILE
                    </div>
                    <label className="AO_yourplanLabel">Your Plan</label>
                    <div className="AO_yourplanContainer">
                        <div className="AO_yourplanContainer_topSection">
                            <label className="AO_yourplanContainer_topSection_Label">Spotify Free</label>
                        </div>
                        <div className="AO_yourplanContainer_bottomSection">
                            <p className="AO_yourplanContainer_bottomSection_label1">
                                Play any song, any time, with ads.
                            </p>
                            <label className="AO_yourplanContainer_bottomSection_label2">
                                Free
                            </label>
                        </div>
                    </div>
                    <div className="AO_joinpremiumBtn">
                        JOIN PREMIUM
                    </div>
                    <label className="AO_signoutLabel">
                        Signout everywhere
                    </label>
                    <p style={{paddingBottom:16+"px",fontSize:16+"px",color:"black"}}>
                    Sign out wherever you have Spotify open, including the web, mobile, desktop or any other devices.
                    </p>
                    <div className="AO_signoutNote">
                    Note: This doesn’t include partner devices, such as Sonos and PlayStation. For more information about logging out (or unlinking) Spotify from a partner device, check the device’s manufacturer guide.
                    </div>
                    <Link to="/">
                        <div className="AO_signoutBtn" onClick={() => this.props.updateUser.logoutUser()}>
                            SIGN OUT EVERYWHERE 
                        </div>
                    </Link>
            </>
        )
    }
}

export default Overview;