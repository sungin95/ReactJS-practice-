import React from 'react';
import PropTypes from 'prop-types';

function DetailMovie({ coverImg, title, genres, rating, downloadCount }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={coverImg} alt={title} />
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{rating}</p>
      <p>{downloadCount}</p>
    </div>
  );
}

DetailMovie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number,
  downloadCount: PropTypes.number,
};
export default DetailMovie;
