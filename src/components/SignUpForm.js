import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import renderField from './renderField';
import { reduxForm, Field, SubmissionError } from 'redux-form';

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

    return (
      <div className='container'>
        <form onSubmit = {this.props.handleSubmit(this.someRandomSubmitFunc)}>
          <Field
                 name="name"
                 type="text"
                 component={ renderField }
                 label="Full Name" />
          <Field
                 name="username"
                 type="text"
                 component={ renderField }
                 label="@username" />
          <Field
                 name="email"
                 type="email"
                 component={ renderField }
                 label="Email*" />
          <Field
                 name="password"
                 type="password"
                 component={ renderField }
                 label="Password*" />
          <Field
                 name="confirmPassword"
                 type="password"
                 component={ renderField }
                 label="Confirm Password*" />
          <div>
            <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={false}>
              Submit
            </button>
            <Link
                  to="/"
                  className="btn btn-error"> Cancel
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'SignUpForm', // a unique identifier for this form
})(SignUpForm)
