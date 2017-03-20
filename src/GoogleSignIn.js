import React, { Component } from 'react'

export default class GoogleSignIn extends Component {

  componentDidMount() {
    // this.signIn()
  }

  signIn() {
    const auth2 = window.gapi.auth2.getAuthInstance();
    // const options = {
      // redirect_uri: redirectUri,
      // fetch_basic_profile: fetchBasicProfile,
    // };
    // console.log(options)

    auth2.signIn()
    /*
      .then((res) => {
          // offer renamed response keys to names that match use
          const basicProfile = res.getBasicProfile();
          const authResponse = res.getAuthResponse();
          res.googleId = basicProfile.getId();
          res.tokenObj = authResponse;
          res.tokenId = authResponse.id_token;
          res.accessToken = authResponse.access_token;
          res.profileObj = {
            googleId: basicProfile.getId(),
            imageUrl: basicProfile.getImageUrl(),
            email: basicProfile.getEmail(),
            name: basicProfile.getName(),
            givenName: basicProfile.getGivenName(),
            familyName: basicProfile.getFamilyName(),
          };
          onSuccess(res);
        }, err =>
          onFailure(err)
        );
    }
    */
  }

  onSignIn(googleUser) {
    console.log(arguments)
    var profile = googleUser.getBasicProfile(); console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName()); console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  }

  render() {
    return (
      <div
        className='g-signin2'
        onClick={this.signIn}>
      </div>
    )
  }
}

/*



render() {
  const { tag, style, className, disabledStyle, buttonText, children } = this.props;
  const disabled = this.state.disabled || this.props.disabled;
  const initialStyle = {
    display: 'inline-block',
    background: '#d14836',
    color: '#fff',
    width: 190,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 2,
    border: '1px solid transparent',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  };
  const styleProp = (() => {
    if (style) {
      return style;
    } else if (className && !style) {
      return {};
    }
    return initialStyle;
  })();
  const defaultStyle = (() => {
    if (disabled) {
      return Object.assign({}, styleProp, disabledStyle);
    }
    return styleProp;
  })();
  const googleLoginButton = React.createElement(
    tag, {
      onClick: this.signIn,
      style: defaultStyle,
      disabled,
      className,
    }, children ? children : buttonText
  );
  return googleLoginButton;
}
}

GoogleLogin.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
  clientId: PropTypes.string.isRequired,
  onRequest: PropTypes.func,
  buttonText: PropTypes.string,
  offline: PropTypes.bool,
  scope: PropTypes.string,
  className: PropTypes.string,
  redirectUri: PropTypes.string,
  cookiePolicy: PropTypes.string,
  loginHint: PropTypes.string,
  hostedDomain: PropTypes.string,
  children: React.PropTypes.node,
  style: React.PropTypes.object,
  disabledStyle: React.PropTypes.object,
  fetchBasicProfile: PropTypes.bool,
  autoLoad: React.PropTypes.bool,
  discoveryDocs: React.PropTypes.array,
};

GoogleLogin.defaultProps = {
  scope: 'profile email',
  redirectUri: 'postmessage',
  cookiePolicy: 'single_host_origin',
  fetchBasicProfile: true,
};

*/
