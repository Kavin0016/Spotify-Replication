import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import NS_M_icon from '../img/NS_M_icon.png';
import NS_C_icon from '../img/NS_C_icon.png';

class NotificationSettings extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <>
            <label className="NS_topLabel" style={{color:"green"}}>Notification settings</label>
            <div className="well" style={{backgroundColor:"white",border:"none"}}>
            <tabel className="NS_tabel">
                <tr>
                    <th className="NS_tabelHeadings NS_leftColumn">Spotify updates</th>
                    <th className="NS_tabelHeadings NS_restColumn">
                        <img className="NS_tabelIcon" src={NS_M_icon}></img>
                        EMAIL
                    </th>
                    <th className="NS_tabelHeadings NS_restColumn">
                        <img className="NS_tabelIcon" src={NS_C_icon}></img>
                        PUSH
                    </th>
                </tr>
                <tr>
                    <td className="NS_tabelCell">
                        Product News
                        <span className="NS_tabelCell_description">
                        Getting started, new features and the latest product updates on Spotify
                        </span>
                    </td>
                    <td className="NS_tabelCell NS_tabelCell_Checkbox">
                        <input type="checkbox" checked={true} name="productNews_Email"></input>
                    </td>
                    <td className="NS_tabelCell NS_tabelCell_Checkbox">
                        <input type="checkbox" checked={true} name="productNews_Push"></input>
                    </td>
                </tr>
                <tr>
                    <td className="NS_tabelCell">
                        Spotify News and Offers
                        <span className="NS_tabelCell_description">
                        News, promos and events for you
                        </span>
                    </td>
                    <td className="NS_tabelCell NS_tabelCell_Checkbox">
                        <input type="checkbox" checked={true} name="spotifyNews_Email"></input>
                    </td>
                    <td className="NS_tabelCell NS_tabelCell_Checkbox">
                        <input type="checkbox" checked={true} name="spotifyNews_Push"></input>
                    </td>
                </tr>
            </tabel>
            <tabel className="NS_tabel">
                <tr style={{marginTop:80+"px",display:"inline-block"}}>
                    <th className="NS_tabelHeadings NS_leftColumn">
                        Your Music
                    </th>
                    <th className="NS_tabelHeadings NS_restColumn">
                    </th>
                    <th className="NS_tabelHeadings NS_restColumn">
                    </th>
                </tr>
                <tr>
                    <td className="NS_tabelCell" style={{width:469+"px"}}>
                        Recommended Music
                        <span className="NS_tabelCell_description">
                        Music we find that we think you’ll like
                        </span>
                    </td>
                    <td className="NS_tabelCell NS_tabelCell_Checkbox" style={{width:116+"px"}}>
                        <input type="checkbox" checked={true} name="spotifyNews_Email"></input>
                    </td>
                    <td className="NS_tabelCell NS_tabelCell_Checkbox" style={{width:116+"px"}}>
                        <input type="checkbox" checked={true} name="spotifyNews_Push"></input>
                    </td>
                </tr>
                <tr>
                    <td className="NS_tabelCell">
                        New Music
                        <span className="NS_tabelCell_description">
                        Fresh tracks from artists you follow or might like
                        </span>
                    </td>
                    <td className="NS_tabelCell NS_tabelCell_Checkbox">
                        <input type="checkbox" checked={true} name="spotifyNews_Email"></input>
                    </td>
                    <td className="NS_tabelCell NS_tabelCell_Checkbox">
                        <input type="checkbox" checked={true} name="spotifyNews_Push"></input>
                    </td>
                </tr>
                <tr>
                    <td className="NS_tabelCell">
                        Playlist Updates
                        <span className="NS_tabelCell_description">
                        A playlist you follow is updated
                        </span>
                    </td>
                    <td className="NS_tabelCell NS_tabelCell_Checkbox">
                        <input type="checkbox" checked={true} name="spotifyNews_Email"></input>
                    </td>
                    <td className="NS_tabelCell NS_tabelCell_Checkbox">
                        <input type="checkbox" checked={true} name="spotifyNews_Push"></input>
                    </td>
                </tr>
                <tr>
                    <td className="NS_tabelCell">
                        Concert Notifications
                        <span className="NS_tabelCell_description">
                        Updates about live shows by artists you like, in places near you
                        </span>
                    </td>
                    <td className="NS_tabelCell NS_tabelCell_Checkbox">
                        <input type="checkbox" checked={true} name="spotifyNews_Email"></input>
                    </td>
                    <td className="NS_tabelCell NS_tabelCell_Checkbox">
                        <input type="checkbox" checked={true} name="spotifyNews_Push"></input>
                    </td>
                </tr>
                <tr>
                    <td className="NS_tabelCell">
                        Artist Updates
                        <span className="NS_tabelCell_description">
                        Hear about artists you listen to and artists we think you’ll like
                        </span>
                    </td>
                    <td className="NS_tabelCell NS_tabelCell_Checkbox">
                        <input type="checkbox" checked={true} name="spotifyNews_Email"></input>
                    </td>
                    <td className="NS_tabelCell NS_tabelCell_Checkbox">
                        <input type="checkbox" checked={true} name="spotifyNews_Push"></input>
                    </td>
                </tr>
            </tabel>
            <div className="EP_saveprofileContainer" style={{marginTop:20+"px",paddingTop:0+"px",paddingBottom:0+"px"}}>
                <div className="EP_cancelBtn" onClick={() => this.props.changeState.changeState("account_overview")} style={{fontSize:12+"px"}}>
                    CANCEL
                </div>
                <div className="EP_saveprofileBtn">
                    SAVE
                </div>
            </div>
            </div>
            </>
        )
    }
}

export default NotificationSettings;