import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Article() {
  //const params = useParams()
  //another way
  const { id } = useParams();
  const url = "http://localhost:8000/articles/" + id;
  const { data: article , isPending, error } = useFetch(url)

  //return <div>Article page - { params.id }</div>;
  //return <div>Article page - {id}</div>;
  return (
    <div>
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {article && (<div>
        <h2>{article.title}</h2>
        <p>By {article.author}</p>
        <p>{article.body}</p>
        </div>)}
    </div>
  )

}
