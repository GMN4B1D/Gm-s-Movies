function openMovie(id) {
  const movie = movieById(id);

  if (!movie) {
    showToast("Movie পাওয়া যায়নি");
    return;
  }

  playMovie(movie);
}
