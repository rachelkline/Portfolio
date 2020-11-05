import React, { Component } from 'react';
// import react-router from 'react-router';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <Router>
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects!</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                      <img src={item.imgurl} alt="portfolio" className="item-img"/>
                      <div className="overlay">
 
                    <button type="button" class="depBtn"><a className="aBtn" href={item.imglink}>DEPLOYED SITE</a></button>
                    <button type="button" class="depBtn" ><a className="aBtn" href={item.replink}>REPOSITORY</a></button> 
                        <div className="portfolio-item-meta">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        </div>
             
                      </div>
                  </div>

                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
  </Router>
        );
  }
}