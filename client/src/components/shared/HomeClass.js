import React from "react";
import { AuthConsumer } from "../../providers/AuthProvider";

class HomeClass extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Class</h1>
        <p> hello {this.props.user.email}</p>
        <p>{JSON.stringify(this.props)}</p>
      </div>
    );
  }
}

// instead of using useContext(AuthContext)
// wrap my component in my AuthConsumer

const ConnectedHomeClass = (props) => {
  return (
    <AuthConsumer>
      {(value) => <HomeClass {...props} {...value} />}
    </AuthConsumer>
  );
};
export default ConnectedHomeClass;
