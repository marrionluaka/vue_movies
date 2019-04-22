<template>
  <li>
    <div class="movie-detail" data-movie-id="${movie.id}">
      <p><strong>${movie.original_title}</strong></p>
      <img src="https://image.tmdb.org/t/p/w185${movie.poster_path}" />
      <p>
          <em>Genres:</em>
          <ul>
          ${createGenresTemplate(movie.genres)}
          </ul>
      </p>
      <p>
          <em>Year</em>: ${movie.release_date.substring(0, 4)}
      </p>
      <p>
          <em>Rating:</em> ${movie.vote_average}
      </p>
      <p>
          <button class="btn-close">Close</button>
          <button class="btn-favorite"
          data-movie-title="${movie.title}" data-movie-id="${movie.id}">
              Add to favorites
          </button>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Slide',
};
</script>

<style>

</style>
