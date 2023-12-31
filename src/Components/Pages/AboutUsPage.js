import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

const main = document.querySelector('main');

const AboutUsPage = () => {
    clearPage();
    renderAboutUsPage();
}

function renderAboutUsPage() {
    const aboutUsPage = `
    <div class="container text-center">
        <div class="row">
        <div class="col">
            <h3>About Neuralbody ...</h3>

            <p>He is a beautiful boy with a really nice and kind girlfriend...</p>
        </div>
        </div>  
        <div class="row mb-3">
        <div class="col">
            <button type="button" class="btn btn-dark">Back</button>
        </div>
        </div>        
    </div>`;
    main.innerHTML = aboutUsPage;
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        Navigate('/');
    });
    main.appendChild(button);
}

export default AboutUsPage;