const init = () => {
  const inputForm = document.querySelector("form")
  inputForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const input = document.querySelector("input#searchByID");
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(resp => resp.json())
    .then(element => {postMovie(element)})
  })

  function postMovie(movie){
    const movieDetails = document.querySelector('section#movieDetails')
    const title = document.createElement('h5')
    title.innerText = movie.title
    movieDetails.querySelector('h4').appendChild(title)
    const summary = document.createElement('p')
    summary.innerText = movie.summary
    movieDetails.querySelector('p').appendChild(summary)
  }
}

document.addEventListener('DOMContentLoaded', init);