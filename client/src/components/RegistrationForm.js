import React, { Components } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

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
  <div className="jumbotron p-2 mb-0">
    <Form className="container" id="needs-validation"  action="/" onSubmit={handleSubmit} >
      <div className="row">
        <div className="col-6 mx-auto mt-5 mb-3">
          <label htmlFor="validationCustom01">Email</label>
          <Input type="text" className="form-control" id="validationCustom01" name="email" onChange={handleChange} value={user.email} validations={[required,email]}/>
        </div>
      </div>
      <div className="row">
        <div className="col-6 mx-auto mb-3">
          <label htmlFor="validationCustom02">Fullname</label>
          <Input type="text" className="form-control" id="validationCustom02" name="fullname" onChange={handleChange} value={user.fullname} />
        </div>
      </div>
      <div className="row">
        <div className="col-6 mx-auto mb-3">
          <label htmlFor="validationCustom03">Username</label>
          <Input type="text" className="form-control" id="validationCustom03" name="username" onChange={handleChange} value={user.username} validations={[required]} />
        </div>
      </div>
      <div className="row">
        <div className="col-6 mx-auto mb-3">
          <label htmlFor="validationCustom04">Password</label>
          <Input type="text" className="form-control" id="validationCustom04" name="password" onChange={handleChange} value={user.password} validations={[required]} />
        </div>
      </div>
      <div className="row">
        <button className="btn btn-primary mx-auto mb-5" type="submit">Submit</button>
      </div>
    </Form>
  </div>
);

//SignUpForm.propTypes = {
  //handleSubmit: PropTypes.func.isRequired,
  //handleChange: PropTypes.func.isRequired,
  //errors: PropTypes.object.isRequired,
  //user: PropTypes.object.isRequired
//};

export default SignUpForm;