/* eslint-disable no-unused-vars */
import { clearPage } from "../../utils/render";

const main = document.querySelector('main');

const ViewMoviePage = async () => {
  try{
    clearPage();
    
    const response = await fetch('/api/films');

    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const films = await response.json();

    renderViewMoviePage();
    renderMenuFromString(films);
    addDeleteButtonListeners(films);

  }catch(err) {
      console.error('ViewMoviePage::error: ', err);
    };
  
}


function renderViewMoviePage () {
    const viewMovie = `
    <div class="container text-center">
        <h1>View all moovie</h1>
        <div id="menuFilm"></div>
    </div`

    main.innerHTML = viewMovie;
}

function renderMenuFromString(menu) {
    const menuTableAsString = getMenuTableAsString(menu);
    const filmMenu = document.querySelector('#menuFilm')
  
    filmMenu.innerHTML = menuTableAsString; 
}
  
function getMenuTableAsString(menu) {
  
    const menuTableLines = getAllTableLinesAsString(menu);
  
    const menuTable = addLinesToTableHeadersAndGet(menuTableLines);
  
    return menuTable;
}
  
function addLinesToTableHeadersAndGet(tableLines) {
  
    const filmTable = `
  
    <div class="table-responsive pt-5">
      <table class="table table-dark table-striped">
        <tr>
          <th>Title</th>
          <th>Duration(min)</th>
          <th>Budget(millions)</th>
          <th>Delete film</th>
        </tr>
        ${tableLines}    
      </table>
    </div>`;
    return filmTable;
}
  
function getAllTableLinesAsString(menu) {
  
    let filmTableLines = '';
    menu?.forEach((film) => {
  
      filmTableLines += `<tr>
  
        <td>${film.title}</td>
        <td>${film.duration}</td>
        <td>${film.budget}</td>
        <td>
          <button class="btn btn-danger delete-film" data-film-id="${film.id}">Delete</button>
        </td>
  
      </tr>`;
  
    });
    return filmTableLines;
}

function addDeleteButtonListeners(films) {
  const deleteButtons = document.querySelectorAll('.delete-film');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filmId = button.getAttribute('data-film-id');
      deleteFilm(filmId);
    });
  });
}

async function deleteFilm(filmId) {
  try {
    const response = await fetch(`/api/films/${filmId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`fetch error: ${response.status} - ${response.statusText}`);
    }

    // Actualisez la page après la suppression
    ViewMoviePage();
  } catch (err) {
    console.error('Error deleting film:', err);
  }
}

export default ViewMoviePage;