import React from 'react';
import {Link} from 'react-router-dom';
import logo from './img/brand.png';
import profile_icon from './img/profile_icon.png';
import OH_down_icon from './img/OH_down_icon.png';
import OH_up_icon from './img/OH_up_icon.png';
import popup_style from './img/popup_style.png';

class OtherHeader extends React.Component{
    constructor(props){
        super(props);
        this.state={
            popupOption : false,
            static: "navbar-static-top",
            fixed:"navbar-fixed-top"
        }
        let classForHeader = ''; 
        console.log(this.props.Url);
        if(this.props.Url.url == "in"){
            this.setState({
                classForHeader: "navbar-static-top"
            })
        }
        else{
            this.setState({
                classForHeader: "navbar-fixed-top"
            })
        }

    }

    popupMenuToggle = () => {
        this.setState({
            popupOption : !this.state.popupOption
        })
    }

    render(){
        return(
            <div className={`navbar navbar-inverse ${this.props.Url.url == "in" ? this.state.fixed : this.state.static}`} style={{marginBottom:0+"px",width:100+"%"}}>
                <div className="container" style={{height:80+"px"}}>
                    <div className="navbar-header" style={{marginTop:15+"px",display:"flex"}}>
                        <img className="navbar-left" src={logo} style={{height:45+"px",width:45+"px"}}></img>
                        <Link to="/in"><span className="brandName">Spotify</span></Link>
                        <ul className="OH_navbarLinks" style={{marginLeft:1000+"px!important"}}>
                            <li className="navlinks">Premium</li>
                            <li className="navlinks">Help</li>
                            <li className="navlinks">Download</li>
                            <li style={{padding:10+"px",paddingTop:15+"px"}}>|</li>
                            <div className="OH_profileonHeader" onClick = {() => this.popupMenuToggle()} onBlur = {() => this.popupMenuToggle()}>
                                <img src={profile_icon}></img>                                
                                <span style={{marginTop:15+"px",fontSize:16+"px",fontWeight:600,marginLeft:10+"px"}}>Profile</span>
                                <img src={!this.state.popupOption ? OH_down_icon : OH_up_icon} style={{width:18+"px",height:12+"px",marginTop:15+"%",marginLeft:5+"%"}}></img>
                            </div>
                            <div className="OH_popupaccountAction" style={{display: this.state.popupOption ? '' : "none"}}>
                                <div style={{position:"relative",marginTop:-22+"%",display:"inline-block",float:"right"}}>
                                    <img src={popup_style}></img>
                                </div>
                                <Link to="/account"><li style={{color:"black"}}>Account</li></Link>
                                <Link to="/"><li onClick={() => this.props.updateUser.logoutUser()}>Log out</li></Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default OtherHeader;