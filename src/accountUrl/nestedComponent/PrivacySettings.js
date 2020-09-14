import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

class PrivacySettings extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <>
            <h1 className="NS_topLabel" style={{color:"#1DB954"}}>Privacy settings</h1>
            <p style={{color:"black",marginTop:8+"px",marginBottom:16+"px",fontSize:16+"px"}}>We want to make it easy for you to manage and understand your Privacy Settings, so you can use the Spotify service in the way you want.</p>
            <p style={{color:"black",marginTop:8+"px",marginBottom:16+"px",fontSize:16+"px"}}>The controls on this page enable you to:</p>
            <ul style={{fontSize:16+"px"}}>
                <li>Control the Facebook data Spotify processes about you.</li>
                <li>Control the tailored ads you see and hear on Spotify.</li>
                <li>Download a copy of your Spotify personal data.</li>
            </ul>
            <h1 className="NS_topLabel" style={{color:"#1DB954",marginTop:50+"px",marginBottom:13+"px"}}>Manage your data</h1>
            <p style={{marginTop:8+"px",marginBottom:16+"px",fontSize:16+"px"}}>
            Additional data controls can be accessed from your device or directly from the Spotify service. For more information about your data rights, including how and why Spotify collects personal data, and additional information on how you can manage this, please see our <span style={{color:"#1DB954"}}>Privacy Center</span> or learn more about your <span style={{color:"#1DB954"}}>data rights and privacy settings</span>.
            </p>
            <tabel className="NS_tabel" style={{display:"block",marginBottom:10+"px"}}>
                <tr>
                    <td className="NS_tabelCell" style={{backgroundColor:"#F5F5F5",padding:40+"px",paddingBottom:0+"px"}}>
                        <label className="CP_topLabel" style={{fontSize:24+"px",fontWeight:600,paddingBottom:0+"px"}}>Facebook data</label>
                        <p style={{marginTop:8+"px",marginBottom:16+"px",color:"#919496",fontSize:16+"px"}}>When you opt out of Spotify processing your Facebook data, we will stop processing any Facebook data shared with Spotify except the personal data that enables you to sign into Spotify using your Facebook account. For more information, please see your <span style={{color:"#1DB954"}}>data rights and privacy settings</span>.</p>
                    </td>
                </tr>
                <tr style={{display:"flex",padding:16+"px",padding:40+"px",paddingTop:0+"px"}}>
                    <span className="CP_topLabel" style={{fontSize:16+"px",fontWeight:600,paddingBottom:0+"px"}}>Process my Facebook data</span>
                    {/* <div class="privacy-checkbox">
                        <label class="privacy-toggle" id="category-toggle-label-facebook" for="category-toggle-input-facebook">
                            <input class="category-toggle" type="checkbox" name="FACEBOOK" value="true" checked="checked" id="category-toggle-input-facebook" />
                            <span class="slider"></span>
                        </label>
                    </div> */}
                </tr>
            </tabel>
            <tabel className="NS_tabel" style={{marginTop:10+"px",marginBottom:30+"px"}}>
                <tr>
                    <td className="NS_tabelCell" style={{backgroundColor:"#F5F5F5",padding:40+"px",paddingBottom:0+"px"}}>
                        <label className="CP_topLabel" style={{fontSize:24+"px",fontWeight:600,paddingBottom:0+"px"}}>Tailored ads</label>
                        <p style={{marginTop:8+"px",marginBottom:16+"px",color:"#919496",fontSize:16+"px"}}>If you use Spotify’s free ad-supported service and you opt out of receiving tailored ads, we will not match your account to the information shared with Spotify by third party advertising partners. This means you will still receive ads based on your basic Spotify account information but they may not be as tailored to you. For more information, please see your <span style={{color:"#1DB954"}}>data rights and privacy settings</span>.</p>
                    </td>
                </tr>
                <tr style={{display:"flex",padding:16+"px",padding:40+"px",paddingTop:0+"px"}}>
                    <span className="CP_topLabel" style={{fontSize:16+"px",fontWeight:600,paddingBottom:0+"px"}}>Process my personal data for tailored ads</span>
                </tr>
            </tabel>
            <h1 className="NS_topLabel" style={{color:"#1DB954"}}>Download your data</h1>
            <p style={{color:"black",marginTop:8+"px",marginBottom:16+"px",fontSize:16+"px"}}>Most of the personal data that Spotify has about you is accessible through the Spotify app (e.g. playlists, search queries, followers, and streaming history). If you would like to get a consolidated copy of this data, you can download it by following the steps below.</p>
            <p style={{color:"black",marginTop:8+"px",marginBottom:16+"px",fontSize:16+"px"}}>The download will include a copy of your playlists, searches, streaming history for the past year, a list of items saved in your library, the number of followers you have, the number and names of the other users and artists you follow, and your payment and subscription data. For more information, see your data rights and <span style={{color:"#1DB954"}}>privacy settings</span>.</p>
            <p style={{color:"black",marginTop:8+"px",marginBottom:16+"px",fontSize:16+"px"}}>As the downloadable file you will receive will contain your profile information, you should keep it secure and be careful when storing, sending, or uploading it to any other services.</p>
            <p style={{color:"black",marginTop:8+"px",marginBottom:16+"px",fontSize:16+"px"}}>If you have any questions or concerns about the personal data contained in your downloadable file, please <span style={{color:"#1DB954"}}>contact us</span>.</p>
            </>
        )
    }
}

export default PrivacySettings;