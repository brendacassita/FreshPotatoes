import { Link } from "react-router-dom";

const NoMatch = () => (
  <div className="App1">
    <h3>
      Page not found - return to
      <Link to="/">
        <b style={{ color: "#EC4E20" }}> HOME</b>
      </Link>
    </h3>
  </div>
);

export default NoMatch;
