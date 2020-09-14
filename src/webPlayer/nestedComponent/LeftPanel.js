import React from 'react';
import black_logo from '../img/black_logo.png';
import Home_icon from '../img/Home_icon.png';
import Search_icon from '../img/Search_icon.png';
import YourLibrary_icon from '../img/YourLibrary_icon.png';
import CreatePlaylist_svg from '../img/CreatePlaylist_svg.png';
import LikedSongs_svg from '../img/LikesSongs_svg.png';
import Install_svg from '../img/Install_svg.png';
import '../WebPlayerStyles.css';
import {BrowserRouter as Router, Link, Switch, Route, useRouteMatch} from 'react-router-dom';

class LeftPanel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            home: true,
            search: false,
            yourLibrary: false
        }
    }

    selectOption = (selectedOption) => {
        let dummy_State = {...this.state};
        let activeKey = "";
        for(let key in dummy_State){
            if(dummy_State[key]){
                activeKey = key;
                break;
            }
        }
        for(let key in dummy_State){
            if(activeKey == selectedOption){
                return;
            }
        }
        this.setState({
            [activeKey]: !this.state[activeKey],
            [selectedOption]: !this.state[selectedOption]
        })
    }

    render(){
        return(
            <div className="WebPlayer_leftPanel">
            <div className="WebPlayer_leftPanel_brand">
                <img src={black_logo} style={{width:45+"px",height:50+"px"}}></img>
                <span className="brand_name">Spotify</span>
            </div>
            <li className="WebPlayer_leftPanel_List" style={{backgroundColor: this.state.home ? "#282828" :""}} onClick={() => this.selectOption("home")}>
                <a className="WebPlayer_leftPanel_List_Link">
                    <img src={Home_icon} className="WebPlayer_leftPanel_List_Icon" style={{marginTop:-5+"px"}}></img>
                    <span className="WebPlayer_leftPanel_List_Option" style={{color: this.state.home ? "white" :"#b3b3b3" }}>Home</span>
                </a>
            </li>
            <li className="WebPlayer_leftPanel_List" style={{backgroundColor: this.state.search ? "#282828" :""}} onClick={() => this.selectOption("search")}>
                <a className="WebPlayer_leftPanel_List_Link">
                    <img src={Search_icon} className="WebPlayer_leftPanel_List_Icon" style={{marginTop:0+"px",width:24+"px",height:27+"px"}}></img>
                    <span className="WebPlayer_leftPanel_List_Option" style={{color: this.state.search ? "white" :"#b3b3b3" }}>Search</span>
                </a>
            </li>
            <li className="WebPlayer_leftPanel_List" style={{backgroundColor: this.state.yourLibrary ? "#282828" :""}} onClick={() => this.selectOption("yourLibrary")}>
                <a className="WebPlayer_leftPanel_List_Link">
                    <img src={YourLibrary_icon} className="WebPlayer_leftPanel_List_Icon" style={{marginTop:-5+"px"}}></img>
                    <span className="WebPlayer_leftPanel_List_Option" style={{color: this.state.yourLibrary ? "white" :"#b3b3b3" }}>Your Library</span>
                </a>
            </li>
            <div className="WebPlayer_leftPanel_PlaylistSection">
                <label style={{display:"block"}}>Playlists</label>
                <li className="WebPlayer_leftPanel_PlaylistSection_List">
                    <img className="WebPlayer_leftPanel_PlaylistSection_List_svg" src={CreatePlaylist_svg}></img>
                    <span style={{padding:5+"px",fontWeight:700}}>Create Playlists</span>
                </li>
                <li className="WebPlayer_leftPanel_PlaylistSection_List">
                    <img className="WebPlayer_leftPanel_PlaylistSection_List_svg" src={LikedSongs_svg}></img>
                    <span style={{padding:5+"px",fontWeight:700}}>Liked Songs</span>
                </li>
                <hr className="SU_hrDivider" style={{marginTop:0+"px"}}></hr>
            </div>
            <div className="WebPlayer_leftPanel_Install_btn">
                <img src={Install_svg} style={{marginRight:16+"px"}}></img>
                <span>Install App</span>
            </div>
            </div>
        )
    }
}

export default LeftPanel;