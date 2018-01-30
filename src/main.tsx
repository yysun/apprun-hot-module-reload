import app from 'apprun';

app.on('#', _ => app.run('#Home'))

app.on('//', route => {
  const menus = document.querySelectorAll('.navbar-nav li');
  for (let i = 0; i < menus.length; ++i) menus[i].classList.remove('active');
  const item = document.querySelector(`[href='${route}']`);
  item && item.parentElement.classList.add('active');
})

const view = state => <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">AppRun</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#Home">Home
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="container-fluid" id="my-app"></div>
</div>

app.start('main', {}, view, {})

import Home from './Home';
import About from './About';
import Contact from './Contact';

const element = 'my-app';
let home = new Home().mount(element);
let about = new About().mount(element);
let contact = new Contact().mount(element);

if (module['hot']) {
  module['hot'].accept('./Home', () => {
    const state = home.state;
    const newComponent = require('./Home').default;
    home = new newComponent().mount(element)
    home.setState(state, { render: true });
  });
  module['hot'].accept('./About', () => {
    const state = about.state;
    const newComponent = require('./About').default;
    about = new newComponent().mount(element)
    about.setState(state, { render: true });
  })
  module['hot'].accept('./Contact', () => {
    const state = contact.state;
    const newComponent = require('./Contact').default;
    contact = new newComponent().mount(element)
    contact.setState(state, { render: true });
  })
}
