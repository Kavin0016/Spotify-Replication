import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route, useRouteMatch} from 'react-router-dom';
import Header from './nestedComponent/Header';
import MuscLists from './nestedComponent/MusicLists';
import TOP_HITS_TAMIL from './img/TOP_HITS_TAMIL.jpeg';
import temp_img from "./img/PURIJAGAANDHA.jpeg";
import Collections from './musicCollectionDetails.json';

class MusicCollection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            playBtn: false,
            playBtn_Scale: "",
            playClass: "glyphicon glyphicon-triangle-right",
            pauseClass: "glyphicon glyphicon-pause",
            playAndPause_Class: false,
            cardImg: "",
            img_path: "",
            playState: [],
            images: require.context('./img',true)
        };
    }

    card_hover(){
        this.setState({
            playBtn: true
        })
    }

    card_leave(){
        this.setState({
            playBtn: false
        })
    }

    playBtn_hover(){
        this.setState({
            playBtn_Scale: "scale("+.04+")"
        })
    }

    playBtn_leave(){
        this.setState({
            playBtn_Scale: ""
        })
    }

    changePlayState(img,specficBtn,description){
        let dummy_State = this.state.playState;
        let activeKey = "";
        dummy_State.map((obj) => {
            if(Object.keys(obj)[0]){
                activeKey = Object.keys(obj)[0];
            }
        })
        this.setState({
            // playAndPause_Class: !this.state.playAndPause_Class
            [specficBtn]: !this.state[specficBtn]
        });
        this.props.parent.setMusicInPlayer(img,specficBtn,description);
    }

    componentDidMount(){
        Collections.map((collection) => {
            console.log("INside Collection : "+[collection]);
            collection.cards.map((card) => {
                console.log("INside Cards: "+card.title);
                let title = card.title;
                let img = card.img;
                let PlayState = this.state.playState;
                let dummy_obj = {
                    [title]: false,
                    [title+"_img"]: "./img/"+[img]
                };
                PlayState.push({
                    [title]: false,
                    [title+"_img"]: "./img/"+[img]
                })
                this.setState({
                    [title]: false,
                    [title+"_img"] : "./img/"+[img]
                });
                // import [title+"_img"] from "./img/"+[img];
                console.log("Img => "+[title]+"_img : ./img/"+[img]);
            })
        });
        console.log("After MOunting => "+Object.entries(this.state.playState));
    }

    render(){
        return(
            <>
            <div className="MusicCollection">
                <Header user={this.props.user} updateUser={this.props.updateUser}/>
                <div className="MusicLists_Container">
                    <div className="MusicLists_Container_Wrapper">
                        {Collections.map((collection) => 
                        <>
                        <h2 className="MusicCollection_label">{collection.topLabel}</h2>
                        <a className="MusicCollection_seeAll_link">SEE ALL</a>
                        <div className="MusicCollection_Wrapper">
                            {collection.cards.map((card) =>
                            <>
                            <div className="MusicCollection_Wrapper_Card" onMouseOver={() => this.card_hover()} onMouseLeave={() => this.card_leave()}>
                                <img src={require(`./img/${card.img}`)} className="MusicCollection_Wrapper_Card_Img" alt="img"></img>
                                <div className="MusicCollection_Wrapper_Card_Topic">{card.title}</div>
                                <div className="MusicCollection_Wrapper_Card_Description"><span>{card.description}</span></div>
                                <div className="MusicCollection_Wrapper_Card_playButton" onMouseOver={() => this.playBtn_hover()} onMouseLeave={() => this.playBtn_leave()} onClick={() => this.changePlayState(`${card.img}`,`${card.title}`,`${card.description}`)} title={`${card.title}`} style={{visibility: this.state[card.title] ? "visible" : ""}}>
                                    <span className={this.state[`${card.title}`] ? this.state.pauseClass : this.state.playClass} style={{marginTop:"auto",marginBottom:"auto",display:"inline-block"}}></span>
                                </div>
                            </div>
                            </>
                            )}
                        </div>
                        </>
                        )}
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default MusicCollection;