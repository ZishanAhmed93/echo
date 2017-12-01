import React, { Components } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

import "./LogInForm.css";

import validator from 'validator';

const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};
 
const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};

const logInForm = ({
  handleSubmit,
  handleChange,
  errors,
  user,
}) => (
//  <div className="jumbotron jumboForm mb-0">
    <Form className="form-inline" id="needs-validation"  action="/" onSubmit={handleSubmit}  >
      <span className="row">
        
          <Input type="text" className="form-control" id="validationCustom01" name="email" placeholder = "Email Address" onChange={handleChange} value={user.email} validations={[required,email]}/>
        
      </span>
      <span className="row">
        
          <Input type="text" className="form-control" id="validationCustom04" name="password" placeholder = "Password" onChange={handleChange} value={user.password} validations={[required]} />
        
      </span>
      <span className="row">
        <button className="btn btn-primary" type="submit">Submit</button>
      </span>
    </Form>
  //</div>
);

export default logInForm;