import React, {Component} from 'react';
import BannerButtons from './BannerButtons';
import '../Banner.css';
import '../About.css';
import { Container, Row, Col, Card, CardImg, 
CardText, CardTitle,CardSubtitle,CardBody,Button, CardGroup } from 'reactstrap';
import 'bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import bannerjpg from '../img/banner.jpg';
import aboutus from '../img/aboutus.jpg';



const AboutBanner = (props) => {
    
    return (
      <div>
<h1 style={{textAlign:"center",margin:"10px"}}>About Us</h1>

<br/>
<Container className="themed-container" /* fluid={true} */>
<div class="row-container">
<Row >
<Col xs="12" sm="12" md={{ size: 5 }}  style={{height:"500px", width:'100%'}} > <img src={aboutus} style={{height:"100%", width:"100%"}} /></Col>
<Col xs="12" sm="12" md={{size:7}}  style={{width:'70%'}}><div class="">
<p>Welcome to Hive Center, your number one source for all things Venues. We're dedicated to providing you the very best Locations, with an emphasis on booking ease, beauty and efficiency.


<br/>
<br/>
Founded in 2021 by Lorem Ipsum, Hive Center has come a long way from its beginnings in Impendium. When Lorem first started out, his/her/their passion for affordable luxury venues drove them to start their own business.


<br/>
<br/>
We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.

<br/>
<br/>

Sincerely,
<br/>
<br/>
Lorem Ipsum</p>
</div>  </Col>
</Row>
</div>
</Container>
         
    </div>
    );
}




export default AboutBanner