export const updateObject = (oldObject, updatedValues) => {
  return Object.assign({}, oldObject, updatedValues);
};

export const truncStr = (string, limit) => {
  return string.length > limit
    ? string
        .trim()
        .substring(0, limit - 3)
        .trim() + '...'
    : string;
};

export const addGenres = (list, genres) => {
  const movies = [...list];

  movies.map((m, i) => {
    const movie = { ...m };

    movie.genres = movie.genre_ids.map(id => genres.find(g => g.id === id));
    movies[i] = movie;
  });

  return movies;
};
