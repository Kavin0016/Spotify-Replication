import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route, useRouteMatch} from 'react-router-dom';
import Left_Arrow from '../img/Left_Arrow.png';
import Right_Arrow from '../img/Right_Arrow.png';
import User_Svg from '../img/WebPlayer_User_2.png';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            down: true,
            downClass : "glyphicon glyphicon-triangle-bottom",
            topClass: "glyphicon glyphicon-triangle-top",
            hoverColor_Account: "rgb("+179+","+"179"+","+179+")",
            hoverColor_Profile: "rgb("+179+","+"179"+","+179+")",
            hoverColor_Logout: "rgb("+179+","+"179"+","+179+")"
        }
    }

    togglePopup(){
        this.setState({
            down: !this.state.down
        })
    }

    hover(element){
        this.setState({
            [element]: "white"
        });
    }

    leave(element){
        let color = "rgb("+179+","+"179"+","+179+")";
        this.setState({
            [element]: color
        })
    }

    render(){
        return(
            <div className="Player_Header">
                <div className="Player_Header_Navigate pull-left">
                    <img src={Left_Arrow}></img>
                    <img src={Right_Arrow}></img>
                </div>
                <div className="Player_Header_UserandOption pull-right">
                    <div className="Player_Header_UserandOption_upgradeBtn">
                        UPGRADE
                    </div>
                    <div className="Player_Header_UserandOption_Profile" onClick={() => this.togglePopup()}>
                        <div className="Player_Header_UserandOption_Profile_img">
                            <img src={User_Svg} style={{width:18+"px",height:15+"px"}}></img>
                        </div>
                        <span style={{display:"inline-block",marginTop:3+"px",fontWeight:900}}>
                            {this.props.user.profileName}
                        </span>
                        <span style={{marginLeft:10+"px",marginTop:5+"px",marginRight:5+"px",display:"inline-block"}} className={this.state.down ? this.state.downClass : this.state.topClass} aria-hidden={true}></span>
                    </div>
                    <div className="Player_Header_popupMenu" style={{display:this.state.down ? "none" : ""}}>
                        <li className="Player_Header_popupMenu_Link" onMouseOver={(e) => this.hover("hoverColor_Account")} onMouseLeave={(e) => this.leave("hoverColor_Account")}>
                        <Link to="/account"><span style={{textDecoration:"none",textTransform:"none",cursor:"default",color:`${this.state.hoverColor_Account}`}}>Account</span></Link>
                        </li>
                        <li className="Player_Header_popupMenu_Link" onMouseOver={(e) => this.hover(e)} onMouseLeave={(e) => this.leave(e)}>
                            Profile
                        </li>
                        <hr className="hr_divider"></hr>
                        <li className="Player_Header_popupMenu_Link" onClick={() => this.props.updateUser.logoutUser()} onMouseOver={(e) => this.hover("hoverColor_Logout")} onMouseLeave={(e)=> this.leave("hoverColor_Logout")}>
                            <Link to="/"><span style={{textDecoration:"none",textTransform:"none",cursor:"default",color:`${this.state.hoverColor_Logout}`}}>Logout</span></Link>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;