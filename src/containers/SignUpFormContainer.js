import SignUpForm from '../components/SignUpForm.js';
import { connect } from 'react-redux';



const mapDispatchToProps = (dispatch) => {
  return {

  }
}


function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    validateFields: state.validateFields,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
