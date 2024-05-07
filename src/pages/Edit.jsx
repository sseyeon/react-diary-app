import { useParams } from "react-router-dom";
function Edit() {
  const params = useParams();
  return <div>Edit {params.id}</div>;
}
export default Edit;
