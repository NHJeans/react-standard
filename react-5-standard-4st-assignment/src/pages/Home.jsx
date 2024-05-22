import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/detail/1">Detail</Link>
      <br />
      <Link to="/detail/2">Detail 2</Link>
    </div>
  );
};

export default Home;
