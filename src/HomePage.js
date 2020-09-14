import React from 'react';
import {Link} from 'react-router-dom';
// import backgroungImage from './img/bubbles-mobile.svg';
import mobile from './img/phone.png';
import playlist_svg from './img/playlist_svg.png';
import down_arrow from './img/down_arrow.png';
import up_arrow from './img/up_arrow.png';
import shuffle_icon from './img/shuffle_icon.png'; 
import search_icon from './img/search_icon.png';

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            down1 : true,
            down2 : true,
            down3 : true,
            down4 : true
        }
    }

    changeArrow = (QA) => {
        this.setState({
            [QA] : !this.state[QA]
        })
    }


    render(){
        return(
            <>
            <div className="topFlexBox">
                <div className="container">
                    <div className="mainOfTopFlex">                   
                        <div className="mobileImg">
                            <img src={mobile} style={{borderTopLeftRadius:35+"px",borderTopRightRadius:35+"px"}}></img>
                        </div>
                        <div className="content">
                            <div className="title">
                            Play millions of songs and podcasts, for free.
                            </div>
                            <Link to="/signup">
                                <a className="contentBtn">
                                    GET SPOTIFY FREE
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whats_new">
                <div className="title">Why Spotify?</div>
                <div className="container">
                    <div style={{display:"flex",alignItems:"center"}}>
                        {/* Play your Favourites Card */}
                            <div className="col-md-3 col-lg-3 card">
                            <div className="background_for_svg">
                                <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-hidden="true" focusable="false" style={{width:64+"px",height:64+"px",marginTop:30+"%"}}>
                                    <title>Play it your way.</title>
                                    <path d="M32 64C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32zm-6.5-20.866l17.785-10.268a1 1 0 0 0 0-1.732L25.5 20.866a1 1 0 0 0-1.5.866v20.536a1 1 0 0 0 1.5.866z" fill="#FFF" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <div className="contentTitle">
                                Play Your Favourites.
                            </div>
                            <div className="content">
                                Listen to the songs you love, and discover new music and podcasts.
                            </div>
                            </div>
                        {/* </section> */}
                        {/* Play List Made Easy Card */}
                            <div className="col-md-3 col-lg-3 card">
                            <div className="background_for_svg">
                                <img src={playlist_svg} style={{width:64+"px",height:64+"px",marginTop:30+"%"}}></img>
                            </div>
                            <div className="contentTitle">
                                Play Your Favourites.
                            </div>
                            <div className="content">
                                Listen to the songs you love, and discover new music and podcasts.
                            </div>
                            </div>
                        {/* End of Playlist Made Easy Card */}
                        {/* Make it Yours Card */}
                            <div className="col-md-3 col-lg-3 card">
                            <div className="background_for_svg">
                                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-hidden="true" focusable="false" style={{width:64+"px",height:64+"px",marginTop:30+"%"}}>
                                    <title>Make Spotify yours.</title>
                                    <path d="M32.17,0A32,32,0,1,0,64,32.17,32,32,0,0,0,32.17,0Zm8.33,32.88L34,40.46a2.63,2.63,0,0,1-4,0l-6.5-7.69A6,6,0,0,1,31.58,24a.78.78,0,0,0,.45.17.82.82,0,0,0,.46-.16,6,6,0,0,1,8,8.86Z" fill="#fff"></path>
                                </svg>
                            </div>
                            <div className="contentTitle">
                                Play Your Favourites.
                            </div>
                            <div className="content">
                                Listen to the songs you love, and discover new music and podcasts.
                            </div>
                            </div>
                        {/* End of Make It Yours Card */}
                        {/* Save Mobile Data Card  */}
                            <div className="col-md-3 col-lg-3 card">
                            <div className="background_for_svg">
                                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.56 64" role="img" aria-hidden="true" focusable="false" style={{width:64+"px",height:64+"px",marginTop:30+"%"}}>
                                    <title>Save mobile data.</title>
                                    <polygon points="25.52 24.03 48.56 24.03 17.68 64 22.41 39.84 0 39.84 30.01 0 25.52 24.03" fill="#fff"></polygon>
                                </svg>
                            </div>
                            <div className="contentTitle">
                                Play Your Favourites.
                            </div>
                            <div className="content">
                                Listen to the songs you love, and discover new music and podcasts.
                            </div>
                            </div>
                        {/* End of Save Mobile Data Card */}
                    </div>
                </div>
            </div>
            <div className="text-hero">
            <div className="container">
                <p>It's free.<br></br>No credit card required.</p>
            </div>
            </div>
            <div className="faq_module">
                <div className="container">
                <div className="title">Got Questions?</div>
                {/* Question 1 */}
                <div className="questionBoxTop" style={{backgroundColor: this.state.down1 ? "#F8F8F8" : "white"}} onClick = {() => this.changeArrow("down1")}>
                    <div className="question">
                    How do I create a playlist?
                    <a className="pull-right"><img src={this.state.down1 ? down_arrow : up_arrow} style={{marginRight:-75+"px",cursor:"pointer"}}></img></a>
                    </div>
                    <div className="answer1" style={{display: !this.state.down1 ? '' : "none"}}>
                    <span style={{marginBottom:16+"px",display:"inline-block"}}>Playlists are a great way to save collections of music, either for your own listening or to share.</span><br></br>
                    <span style={{marginBottom:16+"px",display:"inline-block"}}>To create one:</span>
                    <ol>
                        <li>Tap Your Library.</li>
                        <li>Tap <strong>CREATE.</strong></li>
                        <li>Give your playlist a name.</li>
                        <li>Start adding songs (and we’ll help you along).</li>
                    </ol>
                    </div>
                </div>
                {/* End of Question 1 */}
                {/* Question 2 */}
                <div className="questionBoxRest" style={{backgroundColor: this.state.down2 ? "#F8F8F8" : "white"}} onClick = {() => this.changeArrow("down2")}>
                    <div className="question">
                    How do I activate Data Saver mode?
                    <a className="pull-right"><img src={this.state.down2 ? down_arrow : up_arrow} style={{marginRight:-75+"px",cursor:"pointer"}}></img></a>
                    </div>
                    <div className="answer2" style={{display: !this.state.down2 ? '' : "none"}}>
                        <ol>
                            <li>Tap <strong>HOME</strong>.</li>
                            <li>Tap <strong>SETTINGS.</strong></li>
                            <li>Tap <strong>DATA SAVER.</strong></li>
                            <li>Switch on Data Saver</li>
                        </ol>
                    </div>
                </div>
                {/* End of Question 2 */}
                {/* Question 3 */}
                <div className="questionBoxRest" style={{backgroundColor: this.state.down3 ? "#F8F8F8" : "white"}} onClick = {() => this.changeArrow("down3")}>
                    <div className="question">
                    Is it only possible to shuffle Play music?
                    <a className="pull-right"><img src={this.state.down3 ? down_arrow : up_arrow} style={{marginRight:-75+"px",cursor:"pointer"}}></img></a>
                    </div>
                    <div className="answer3" style={{display: !this.state.down3 ? '' : "none"}}>
                        <span style={{marginBottom:15+"px",display:"block"}}>Any playlist with the shuffle icon 
                        <img src={shuffle_icon} style={{paddingLeft:5+"px",paddingRight:5+"px"}}></img>
                         will play on shuffle<br></br></span>
                         Some playlists won't have the shuffle icon, so you can tap any song to play it.
                    </div>
                </div>
                {/* End of Question 3 */}
                {/* Question 4 */}
                <div className="questionBoxRest" style={{backgroundColor: this.state.down4 ? "#F8F8F8" : "white"}} onClick = {() => this.changeArrow("down4")}>
                    <div className="question">
                    Where can I podcasts?
                    <a className="pull-right"><img src={this.state.down4 ? down_arrow : up_arrow} style={{marginRight:-75+"px",cursor:"pointer"}}></img></a>
                    </div>
                    <div className="answer4" style={{display: !this.state.down4 ? '' : "none"}}>
                    Tap <strong>Search</strong><img src={search_icon} style={{paddingLeft:2+"px",paddingRight:2+"px"}}></img>. Under <strong>Browse All</strong>, tap Podcasts.
                    </div>
                </div>
                {/* End of Question 4 */}
                </div>
            </div>
            <div className="bottomFlex">
                <div className="cover">
                    <div className="container" style={{paddingTop:60+"px",paddingBottom:60+"px",paddingLeft:15+"px",paddingRight:15+"px",marginTop:"auto",marginBottom:"auto",height:292+"px"}}>
                        <span className="title">Ready Let's play.</span>
                        <Link to="/signup">
                            <a className="contentBtn">
                                    GET SPOTIFY FREE
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default HomePage;