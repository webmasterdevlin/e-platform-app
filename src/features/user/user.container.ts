import { connect } from 'react-redux';
import user from './user';
import { RootState } from '../../store';

const mapStateToProps = (state: RootState, props: any) => {
  const user = state.oidc.user;
  const isAuthenticated = user !== null && !user.expired;
  alert(JSON.stringify(user?.id_token, null, 2));
  return {
    isVisible: isAuthenticated,
    name: user && user.profile ? user.profile.name : '',
    profile: user && user.profile ? user.profile.username : '',
  };
};

const enhance = connect(mapStateToProps);

export default enhance(user);
