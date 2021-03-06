import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer id="connect">
        <div className="row">
          <h1 id="connectHead">CONNECT</h1>
        </div>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        <div class="twelve columns">
          <p className="contactInfo mailTo">
            <a href="mailto: rachel_kline@icloud.com">rachel_kline@icloud.com</a></p>
          <p className="contactInfo">(717) 228-7998</p>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="upBtn" />
            </a>
            </div>
      </div>
      <div className="row">
        <p className="copyright">copyright © rachel kline</p>
      </div>
    </footer>
    );
  }
}