import React, { Component } from 'react';
import Footer from "./Footer";
import AboutBanner from "./AboutBanner";
import ContactForm from './Contact';

export default class Company extends Component {
    render() {
        return (
                <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <AboutBanner />
             
                <br />
                <br />
                <br />
                <br />
                <br />
<ContactForm name='Seun' email='rime2seun@gmail.com' body='Hello Hello' />
                <br />
                <br />
                <Footer />
            </div>
        )
    }
}