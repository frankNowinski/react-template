import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends Component {
  render() {
    const { userSignupRequest, addFlashMessage } = this.props;

    return (
      <div className="row col-md-4 col-md-offset-4">
        <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage);
