import { useParams } from "react-router-dom";

function Diary() {
  const params = useParams();
  return <div>{params.id} Diary</div>;
}
export default Diary;
