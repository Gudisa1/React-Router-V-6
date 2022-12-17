import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="section">
      <h2>Error</h2>
      <h5>404 Page Does Not Exist</h5>
      <Link to="/" className="btn">
        Back to the Home Page
      </Link>
    </section>
  );
};
export default Error;
