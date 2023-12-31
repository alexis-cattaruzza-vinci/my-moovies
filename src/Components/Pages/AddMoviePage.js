import { clearPage } from "../../utils/render";
import Navigate from '../Router/Navigate';

const main = document.querySelector('main');

const AddMoviePage = () => {
    clearPage();
    renderAddMoviePage();
}

function renderAddMoviePage () {
    const addMovie = `
    <div class="container">
        <h1 class="text-center mb-4">Movie Form</h1>
        <form id="addFilm">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" placeholder="Enter title" required>
        </div>
        <div class="form-group">
            <label for="duration">Duration (min)</label>
            <input type="number" class="form-control" id="duration" placeholder="Enter duration" required>
        </div>
        <div class="form-group">
            <label for="budget">Budget (millions)</label>
            <input type="number" class="form-control" id="budget" placeholder="Enter budget" required>
        </div>
        <div class="form-group">
            <label for="link">Link</label>
            <input type="text" class="form-control" id="link" placeholder="Enter link" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Submit</button>
        </form>
    </div>`

    main.innerHTML = addMovie;
    const addFilm = document.querySelector('#addFilm');
    addFilm.addEventListener('submit', onAddFilm);
};

async function onAddFilm(e) {

    e.preventDefault();
    const title = document.querySelector('#title').value;
  
    const duration = document.querySelector('#duration').value;

    const budget = document.querySelector('#budget').value;

    const link = document.querySelector('#link').value;

    const options = {
      method: 'POST',
  
      body: JSON.stringify({
        title,
        duration: Number(duration),
        budget: Number(budget),
        link,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const response = await fetch('/api/films', options); // fetch return a promise => we wait for the response
  
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const newFilm = await response.json(); // json() returns a promise => we wait for the data
  
    console.log('New pizza added : ', newFilm);
  
    Navigate('/viewMovie');
  
}

export default AddMoviePage;