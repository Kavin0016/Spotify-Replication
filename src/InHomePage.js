import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route, useRouteMatch} from 'react-router-dom';
import './styles.css';
import card_1 from './img/IHM_card_1.jpeg';
import card_2 from './img/IHM_card_2.jpeg';
import card_3 from './img/IHM_card_3.jpeg';
import card_4 from './img/IHM_card_4.jpeg';
import card_5 from './img/IHM_card_5.jpeg';
import card_6 from './img/IHM_card_6.jpeg';

class InHomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <div className="IHP_homeGradient">
                <div className="container">
                    <label className="IHP_homeGradient_Content">Go Premium. Be happy.</label>
                    <div className="LU_loginSection" style={{position:"relative"}}>
                        <div className="LU_loginBox" style={{float:"",position:"absolute",marginTop:2+"%",marginBottom:50+"px",display:"block",marginLeft:35+"%",marginRight:35+"%",padding:20+"px",paddingLeft:57+"px",paddingRight:56+"px",width:283+"px",height:58+"px",fontSize:16+"px"}}>
                            <span style={{color:"white",textDecoration:"none"}} className="Global_none">
                                START FREE TRAIL
                            </span>
                        </div>
                    </div>
                    <div className="IHP_privacyNote">
                        * <a style={{color:"white",cursor:"pointer"}}>Terms and conditions</a> apply. Open only to users who haven't already tried Premium.
                    </div>
                </div>
            </div>
            <div className="IHP_albumResult">
                <div className="container">
                    <div className="IHP_cardDescriber">
                        <h1 className="IHP_musicLabel">Looking for music?</h1>
                        <p style={{marginTop:10+"px",marginBottom:24+"px",fontSize:18+"px",fontWeight:550}}>Start listening to the best new releases.</p>
                        <Link to="/WebPlayer">
                            <div className="L_Body" style={{marginBottom:70+"px"}}>
                                <div className="L_phoneNumberBox">
                                    <span className="Global_none">LAUNCH WEB PLAYER</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="wrapper">
                        <div className="IHP_card">
                            <img src={card_1}></img>
                            <div className="card_info">
                                <p className="info_Topic">Over Now(with The Weekend)</p>
                                <p className="info_Singer">Calvin Harrish</p>
                                <p className="play_btn">PLAY NOW</p>
                            </div>
                        </div>
                        <div className="IHP_card">
                            <img src={card_2}></img>
                            <div className="card_info">
                                <p className="info_Topic">Ice Cream(With Selena Gomes)</p>
                                <p className="info_Singer">Black Pink</p>
                                <p className="play_btn">PLAY NOW</p>
                            </div>
                        </div>
                        <div className="IHP_card">
                            <img src={card_3}></img>
                            <div className="card_info">
                                <p className="info_Topic">Smile</p>
                                <p className="info_Singer">Katty Perry</p>
                                <p className="play_btn">PLAY NOW</p>
                            </div>
                        </div>
                        <div className="IHP_card">
                            <img src={card_4}></img>
                            <div className="card_info">
                                <p className="info_Topic">ENERGY(Delux)</p>
                                <p className="info_Singer">Disclosure</p>
                                <p className="play_btn">PLAY NOW</p>
                            </div>
                        </div>
                        <div className="IHP_card">
                            <img src={card_5}></img>
                            <div className="card_info">
                                <p className="info_Topic">Spotify Singles</p>
                                <p className="info_Singer">Giveon</p>
                                <p className="play_btn">PLAY NOW</p>
                            </div>
                        </div>
                        <div className="IHP_card">
                            <img src={card_6}></img>
                            <div className="card_info">
                                <p className="info_Topic">B4 The Strom</p>
                                <p className="info_Singer">Internet Money</p>
                                <p className="play_btn">PLAY NOW</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default InHomePage;