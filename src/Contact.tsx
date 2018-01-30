import app, { Component } from 'apprun';

export default class ContactComponent extends Component {
  state = 'Contact';

  view = state => <div>
    <h1>{state}</h1>
    <input oninput={e => this.run('input', e)} />
  </div>

  update = {
    '#Contact': state => state,
    input: (state, e) => e.target.value
  }
}
