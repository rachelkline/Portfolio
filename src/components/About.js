import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src={resumeData.image} alt="images/profilepic.JPG" />

            </div>

            <div className="eight columns main-col">

               <h2 class="abtMe">About Me</h2>
               <p class="abtMe">
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <a href={resumeData.website}> {resumeData.website}</a>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}