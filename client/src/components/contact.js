import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "../contact.css";



let contactbody = {
    "name": this.state.contactname,
    "email": this.state.contactemail,
    "body": this.state.bodytxt
}

const ContactForm = (props) => {
  return (
      <div className="container">

    <Form className="contactform">
      <h1 className="header">Contact Us</h1>
      <br/>
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input type="email" name="email" value={this.contactemail} id="Email" placeholder="Email" />
      </FormGroup>
    
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="contactname" name="contactname" value={this.contactname } id="name" placeholder="Name" />
      </FormGroup>
    
     
  
      <FormGroup>
        <Label for="Textarea1">How can we help you?</Label>
        <Input type="textarea" name="text" value={this.bodytxt} id="Textarea1" />
      </FormGroup>
      
    
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          I would like to recieve updates and newsletters.
        </Label>
      </FormGroup>
      <br/>
      <Button>Submit</Button>
    </Form>
      </div>
  );
}

export default ContactForm;