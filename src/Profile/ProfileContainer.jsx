import React from 'react';
import Profile from './Profile';
import * as axios from "axios";
import {getUserProfile} from '../redux/profile-reducer'
import { connect } from 'react-redux';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import { usersAPI } from '../API/api';





class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId;
    // if (!userId){
    //   userId=2;
    // }
      this.props.getUserProfile(userId);
  };

  render() {
    return (
      <div>
        <Profile {... this.props} profile = {this.props.profile}/>
      </div>

    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
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

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));
