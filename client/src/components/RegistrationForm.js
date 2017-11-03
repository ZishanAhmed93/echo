import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
//import { Card, CardText } from 'material-ui/Card';
//import RaisedButton from 'material-ui/RaisedButton';
//import TextField from 'material-ui/TextField';


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

  <form class="container" id="needs-validation"  action="/" onSubmit={handleSubmit}  novalidate >
  <div class="row">
    <div class="col-md-12 mb-3">
      <label for="validationCustom01">UserName</label>
      <input type="text" class="form-control" id="validationCustom01" name="username" placeholder="UserName" onChange={handleChange} value={user.username} required  />
      <div class="invalid-feedback">
        UserName Error
      </div>
    </div>
    </div>
    <div class="col-md-12 mb-3">
      <label for="validationCustom02">Email</label>
      <input type="text" class="form-control" id="validationCustom02" name="email" placeholder="Email" y onChange={handleChange} value={user.email} required />
      <div class="invalid-feedback">
        Email Error
      </div>
    </div>
  <div class="row">
    <div class="col-md-12 mb-3">
      <label for="validationCustom03">Password</label>
      <input type="text" class="form-control" id="validationCustom03" name="password" placeholder="Password" onChange={handleChange} value={user.password} required />
      <div class="invalid-feedback">
        City Error
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
);

//SignUpForm.propTypes = {
  //handleSubmit: PropTypes.func.isRequired,
  //handleChange: PropTypes.func.isRequired,
  //errors: PropTypes.object.isRequired,
  //user: PropTypes.object.isRequired
//};

export default SignUpForm;