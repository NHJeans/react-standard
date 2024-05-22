import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  console.log("Detail Page : ", id);

  return <div>Detail</div>;
};

export default Detail;
