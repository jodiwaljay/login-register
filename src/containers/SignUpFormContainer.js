import SignUpForm from '../components/SignUpForm.js';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';


const mapDispatchToProps = (dispatch) => {
  return {
    register: registerUser
  };
}


function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
  };
}

export default connect(mapStateToProps, {registerUser})(SignUpForm);
