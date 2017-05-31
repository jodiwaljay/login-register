import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import renderField from './renderField';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import vFunc from './../utils/commonValidators';

function validate(values){
  var errors = {};
  var hasErrors = false;

  if(values.password !== values.confirmPassword){
    hasErrors = true;
    errors.password = 'Password And Confirm Password don\'t match';
    errors.confirmPassword = 'Password And Confirm Password don\'t match';
  }

  return hasErrors && errors;
}

class SignUpForm extends Component {
  /*static contextTypes = {
    router: PropTypes.object
  };*/

  componentWillMount() {

  }

  someRandomSubmitFunc(){
    console.log("Submitted");
  }
  render() {
    const { handleSubmit, pristine, reset, submitting, validate } = this.props
    return (
      <div className='container'>
        <form onSubmit = {handleSubmit(this.someRandomSubmitFunc)}>
          <Field
                 name="name"
                 type="text"
                 component={ renderField }
                 validate={[vFunc.required, vFunc.maxLength(25)]}
                 label="Full Name" />
          <Field
                 name="username"
                 type="text"
                 validate={[vFunc.required, vFunc.minLength(5), vFunc.maxLength(15)]}
                 component={ renderField }
                 label="Username" />
          <Field
                 name="email"
                 type="email"
                 validate={[vFunc.required, vFunc.email]}
                 component={ renderField }
                 label="Email" />
          <Field
                 name="password"
                 type="password"
                 validate={[vFunc.required, vFunc.minLength(6)]}
                 component={ renderField }
                 label="Password" />
          <Field
                 name="confirmPassword"
                 type="password"
                 validate={[vFunc.required]}
                 component={ renderField }
                 label="Retype Password" />
          <div>
            <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={submitting}>
              Submit
            </button>

            <button
                    type="button"
                    onClick={reset}
                    className="btn btn-primary"
                    disabled={submitting||pristine}>
              Clear Values
            </button>

            <Link to='/'>
              Cancel
            </Link>

          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'SignUpForm', // a unique identifier for this form
  validate
})(SignUpForm)
