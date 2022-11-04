import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './views/components/appbar';
import './views/components/footerbar';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.hamburger-link'),
  drawer: document.querySelector('.nav'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
