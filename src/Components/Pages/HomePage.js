import anime from 'animejs/lib/anime.es';
import film1 from '../../img/js1.jpg';
import film2 from '../../img/js2.jpg';


const main = document.querySelector('main');

const HomePage = () => {
  renderHomePage();
};

function renderHomePage() {
    const homePage = `
    <div class="container-fluid">
        <header>
            <h1 class="text-center" >myMoovies</h1>
        </header>
        <main class="flex-grow-1 text-center">
        <div class="row">
            <div class="col-12 col-lg-6 ">
                <a href="https://www.imdb.com/title/tt15398776/"> <img src=${film1} width="50%" alt="openheimer affiche" class="anime-target"/></a>
                <p>
                Oppenheimer
                </p>
            </div>
            <div class="col">
                <a href="https://www.imdb.com/title/tt5537002/"> <img src=${film2} width="50%" alt="the killers of the flower moon affiche" class="anime-target"/></a>
                <p>
                Killers of the flower moon
                </p>
            </div> 
        </div>   
        </main>
        <footer class="text-center py-4 text-white" style="background: black;">
            <h3 class="text-center">Alexis Cattaruzza</h3>
        </footer> 
        </div>`;
        
    main.innerHTML = homePage;
    anime({
        targets: '.anime-target',
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: anime.stagger(200),
      });
};

export default HomePage;
