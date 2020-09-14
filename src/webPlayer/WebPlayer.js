import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route, useRouteMatch} from 'react-router-dom';
import LeftPanel from './nestedComponent/LeftPanel';
import Player from './nestedComponent/musicCollection/MusicCollection';
import temp_img from "./img/PURIJAGAANDHA.jpeg";
import speaker from "./img/speaker.png";
import device from "./img/device.png";
import './WebPlayerStyles.css';


class WebPlayer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            player_img: "PURIJAGAANDHA.jpeg",
            player_topic: "PURIJAGAANDHA",
            player_description: "Purijagaandha",
            sliderValue : 0,
            slider: 0
        }
    }

    setMusicInPlayer(img,title,description){
        console.log("Img = "+img+" title = "+title);
        this.setState({
            player_img: img,
            player_topic: title,
            player_description: description,
            slider: 0
        })
    }

    changeSlideValue(e){
        this.setState({[e.target.name]:e.target.value})
    }

    render(){
        return(
            <>
            <div style={{display:"flex"}}>
            <LeftPanel />
            <Player user={this.props.user} updateUser={this.props.updateUser} parent={{setMusicInPlayer: this.setMusicInPlayer.bind(this)}}/>
            </div>
            <div className="navbar navbar-inverse navbar-fixed-bottom WebPlayer_Footer" style={{backgroundColor:"#282828!important"}}>
                <div className="WebPlayer_Footer_musicDetails">
                    <div className="WebPlayer_Footer_musicDetails_img">
                        <img src={require(`./nestedComponent/musicCollection/img/${this.state.player_img}`)} className="WebPlayer_Footer_musicDetails_img_src"></img>
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                    <span className="WebPlayer_Footer_musicDetails_Topic">{this.state.player_topic}</span>
                    <span style={{display:"inline-block",fontSize:12+"px",color:"#b3b3b3",padding:5+"px",paddingLeft:15+"px"}}>{this.state.player_description}</span>
                    </div>
                    <span className="WebPlayer_Footer_musicDetails_Heart glyphicon glyphicon-heart-empty"></span>
                    <span className="WebPlayer_Footer_musicDetails_window glyphicon glyphicon-modal-window"></span>
                </div>
                <div className="WebPlayer_Footer_playerControl">
                    <div className="WebPlayer_Footer_playerControl_Controls">
                        <span style={{width:32+"px",height:32+"px",marin:10+"px",paddingTop:8+"px",textAlign:"center"}} className="glyphicon glyphicon-random"></span>
                        <span style={{width:32+"px",height:32+"px",marin:10+"px",paddingTop:8+"px",textAlign:"center"}} className="glyphicon glyphicon-step-backward"></span>
                        <span style={{width:42+"px",height:42+"px",marin:10+"px",fontSize:30+"px",fontWeight:"lighter",textAlign:"center"}} className="glyphicon glyphicon-play-circle"></span>
                        <span style={{width:32+"px",height:32+"px",marin:10+"px",paddingTop:8+"px",textAlign:"center"}} className="glyphicon glyphicon-step-forward"></span>
                        <span style={{width:32+"px",height:32+"px",marin:10+"px",paddingTop:8+"px",textAlign:"center"}} className="glyphicon glyphicon-refresh"></span>
                    </div>
                    <div className="WebPlayer_Footer_playerControl_slider">
                        <span>{this.state.slider}:00</span>
                        <input type="range" id="PLayer_Slider" min="0" max="100" name="slider" value={this.state.slider} onChange={(e) => this.changeSlideValue(e)}></input>
                        <span>100:00</span>
                    </div>
                </div>
                <div className="WebPlayer_Footer_barRight">
                    <span style={{float:"right",width:32+"px",height:32+"px",marin:10+"px",paddingTop:8+"px",textAlign:"center"}} className="glyphicon glyphicon-menu-hamburger"></span>
                    <img src={device} style={{width:22+"px",height:22+"px",margin:10+"px",marginTop:5+"px"}}></img>
                    <img src={speaker} style={{width:22+"px",height:22+"px",margin:10+"px",marginTop:5+"px"}}></img>
                    <input style={{width:84+"px",float:"right"}} type="range"></input>
                </div>
            </div>
            </>
        )
    }
}

export default WebPlayer;