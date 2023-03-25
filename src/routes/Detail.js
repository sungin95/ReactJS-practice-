import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailMovie from '../components/DetailMovie';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1>
            <DetailMovie
              coverImg={movie.medium_cover_image}
              title={movie.title}
              genres={movie.genres}
              rating={movie.rating}
              downloadCount={movie.download_count}
            />
          </h1>
        </div>
      )}
    </div>
  );
}
export default Detail;
// 로딩 구현, json을 State에 넘겨주자 그래서 상세 정보를 볼 수 있게 하자,
