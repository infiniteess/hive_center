import React, {Component} from 'react';
import BannerButtons from './BannerButtons';
import '../Banner.css';
import '../About.css';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import bannerjpg from '../img/banner.jpg';


const AboutBanner = (props) => {
    
    return (
       <body>
        <div style={{textAlign:'center'}} >
        <h1 >About Us</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Hive center brings events to life</p>
      </div>
      <br/>
      <h2 style={{textAlign:'center'}}>Our Team</h2>
      <div class="row">
<br/>
<br/>
<br/>
<br/>
        <div class="column">
          <div class="card">
          <p style={{textAlign:'center'}}>
            <img src={bannerjpg} alt="Jane"  style={{width:'50%', height:'80%'}}/*style="width:100%"*/ />
          </p>
            <div class="container">
              <h2>Jane Doe</h2>
              <p class="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <img src={bannerjpg} alt="Mike" /* style="width:100%" */ />
            <div class="container">
              <h2>Mike Ross</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <img src={bannerjpg} alt="John" /* style="width:100%" */ />
            <div class="container">
              <h2>John Doe</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
      </body>
    );
}

export default AboutBanner