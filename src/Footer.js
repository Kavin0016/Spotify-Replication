import React from 'react';
import logo from './img/brand.png';
import insta_icon from './img/insta_icon.png';
import twitter_icon from './img/twitter_icon.png';
import fb_icon from './img/fb_icon.png';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            // <nav className="navbar navbar-inverse navbar-static-bottom">
            <nav className="navbar navbar-inverse navbar-fixed-bottom customFooter" style={{position:"absolute!important"}}>
                <div className="container">
                    <div className="footerFlex">
                        <div className="column">
                            <img className="navbar-left" src={logo} style={{height:45+"px",width:45+"px"}}></img>
                            <span className="brandName">Spotify</span>
                        </div>
                        <div className="column">
                            <p className="title">COMPANY</p>
                            <li>About</li>
                            <li>Jobs</li>
                            <li>for the Record</li>
                        </div>
                        <div className="column">
                            <p className="title">COMMUNITIES</p>
                            <li>For Artists</li>
                            <li>Developers</li>
                            <li>Brands</li>
                            <li>Investors</li>
                            <li>Vendors</li>
                        </div>
                        <div className="column">
                            <p className="title">USEFUL LINKS</p>
                            <li>Help</li>
                            <li>Web Player</li>
                            <li>Free Mobile App</li>
                        </div>
                        <div className="column social-icon">
                            <div className="icon">
                                <img src={insta_icon} style={{paddingLeft:2+"px"}}></img>
                            </div><span style={{marginRight:10+"px"}}></span>
                            <div className="icon">
                                <img src={twitter_icon}></img>
                            </div><span style={{marginRight:10+"px"}}></span>
                            <div className="icon">
                                <img src={fb_icon}></img>
                            </div>
                        </div>
                    </div>
                    <div className="country">
                        <span style={{marginLeft:95+"%"}}>
                            India
                        </span>
                        <img src="https://country-flags.scdn.co/flags/in.svg" alt="" style={{width:24+"px",height:18+"px",marginLeft:5+"px"}}></img>
                    </div>
                    <div className="bottomLink">
                        <div className="pull-left">
                            <ul style={{display:"flex",listStyle:"none"}}>
                                <li>Legal</li>
                                <li>Privacy Center</li>
                                <li>Privacy Policy</li>
                                <li>Cookies</li>
                                <li>About Ads</li>
                            </ul>
                        </div>
                        <div className="pull-right" style={{marginLeft:53+"%"}}>
                        © 2020 Spotify AB
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Footer;