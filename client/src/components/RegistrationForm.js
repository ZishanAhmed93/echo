import React, { Components } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
//import { Card, CardText } from 'material-ui/Card';
//import RaisedButton from 'material-ui/RaisedButton';
//import TextField from 'material-ui/TextField';

// import {required, email } from '../HelperFunctions/FormValidation'; 


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



const SignUpForm = ({
  handleSubmit,
  handleChange,
  errors,
  user,
}) => (
  /*<div className="container">
    <form action="/" onSubmit={handleSubmit}>
      <h2 className="card-heading">Sign Up</h2>

    {errors.summary && <p className="error-message">{errors.summary}</p>}

        
        
        

        <div> {errors.username}</div>
      <div className="field-line">
        UserName
        <input type = "text"
          floatingLabelText="UserName"
          name="username"
          errorText={errors.name}
          onChange={handleChange}
          value={user.username}
        />
      </div>

      <div> {errors.email}</div>
      <div className="field-line">
        Email
        <input type ="Text"
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={handleChange}
          value={user.email}
        />
      </div>


      <div> {errors.password}</div>
      <div className="field-line">
      Password
        <input type = "Text"
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={handleChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <input type="submit" label="Create New Account" primary />
      </div>

      <div>Already have an account? <Link to={'/login'}>Log in</Link></div>
    </form>
  </div>
  */

  <Form className="container" id="needs-validation"  action="/" onSubmit={handleSubmit}  >
  <div className="row">
    <div className="col-md-12 mb-3">
      <label htmlFor="validationCustom01">UserName</label>
      <Input type="text" className="form-control" id="validationCustom01" name="username" placeholder="UserName" onChange={handleChange} value={user.username} validations={[required]} />
    </div>
    </div>
    <div className="col-md-12 mb-3">
      <label htmlFor="validationCustom02">Email</label>
      <Input type="text" className="form-control" id="validationCustom02" name="email" placeholder="Email" onChange={handleChange} value={user.email} validations={[required,email]}/>
    </div>
  <div className="row">
    <div className="col-md-12 mb-3">
      <label htmlFor="validationCustom03">Password</label>
      <Input type="text" className="form-control" id="validationCustom03" name="password" placeholder="Password" onChange={handleChange} value={user.password} validations={[required]} />
    </div>
  </div>
  <button className="btn btn-primary" type="submit">Submit form</button>
</Form>
);

//SignUpForm.propTypes = {
  //handleSubmit: PropTypes.func.isRequired,
  //handleChange: PropTypes.func.isRequired,
  //errors: PropTypes.object.isRequired,
  //user: PropTypes.object.isRequired
//};

export default SignUpForm;