import React from 'react';
import Profile from './Profile';
import {getUserProfile} from '../redux/profile-reducer'
import { connect } from 'react-redux';
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId;
    // if (!userId){
    //   userId=2;
    // }
      this.props.getUserProfile(userId);
   
  };

  render() {
    if (!this.props.isAuth) return <Navigate to={"/login"}/>
  
    return (
      <div>
        <Profile {... this.props} profile = {this.props.profile}/>
      </div>

    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }
  return ComponentWithRouterProp;
}

export default compose (
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  //withAuthRedirect
)(ProfileContainer)

// let authRedirectComponent = withAuthRedirect(ProfileContainer) ;
// export default connect(mapStateToProps, {getUserProfile})(withRouter(authRedirectComponent));
