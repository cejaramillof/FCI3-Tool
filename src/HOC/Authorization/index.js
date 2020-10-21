import React from "react";
import { connect } from 'react-redux'

const emptyComponent = () => <span></span>;

const Authorization = (
  roles = [],
  GreenComponent = emptyComponent,
  RedComponent = emptyComponent
) => {

  const AuthWrapper = props => {
    const isAuthorized = roles.indexOf(props.user.role) >= 0;
    return (
      <>
        {isAuthorized
          ? <GreenComponent {...props} />
          : <RedComponent {...props} />
        }
      </>
    )
  }

  const mapStateToProps = state => ({ user: state.user });
  return connect(mapStateToProps)(AuthWrapper)
}

export default Authorization