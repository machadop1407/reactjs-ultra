import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      Sorry, this page doesn't exist. Please go to the <Link to="/">home </Link>
      page.
    </div>
  );
}

export default PageNotFound;
