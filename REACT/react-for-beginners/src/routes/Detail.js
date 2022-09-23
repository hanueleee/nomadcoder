import { useEffect } from "react";
import { useParams } from "react-router-dom";
// useParams: url에 있는 변수값을 반환해주는 함수 (React Router에서 제공)
// 내가 Route에 써둔 변수명 그대로 사용

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;
// router : URL을 보고있는 component
