import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <header>
          <h1>My Quizz</h1>
          Pour accéder a la page /about <a href="about/" style="text-decoration: none;">click ici</a>
        </header>

        <nav>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-google"></a>
          <a href="#" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-youtube"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-pinterest"></a>
          <a href="#" class="fa fa-snapchat-ghost"></a>
          <a href="#" class="fa fa-skype"></a>
          <a href="#" class="fa fa-android"></a>
          <a href="#" class="fa fa-dribbble"></a>
          <a href="#" class="fa fa-vimeo"></a>
          <a href="#" class="fa fa-tumblr"></a>
          <a href="#" class="fa fa-vine"></a>
          <a href="#" class="fa fa-foursquare"></a>
          <a href="#" class="fa fa-stumbleupon"></a>
          <a href="#" class="fa fa-flickr"></a>
          <a href="#" class="fa fa-yahoo"></a>
          <a href="#" class="fa fa-reddit"></a>
          <a href="#" class="fa fa-rss"></a>
        </nav>

        <main class="row">
          <section class="leftcolumn">
            <section class="card">
              <h1>Nom étudiant</h1>
              <h2>description</h2>
              <section id="quiz">
                <h2>A TOI DE JOUER</h2>
                <section id="question"></section>
                <section id="proposals"></section>
              </section>
            </section>
          </section>
          <section class="rightcolumn">
            <section class="card">
              <img alt="question" src="/question.png" width="500" height="600">
            </section>
        </main>

        <footer>
          <h2>@2024</h2>
        </footer>
`

initQuizz();