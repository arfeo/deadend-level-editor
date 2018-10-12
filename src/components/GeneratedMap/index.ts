import { Modal } from '../common/Modal';
import { App } from '../App';

class GeneratedMap extends Modal {
  constructor(app: App) {
    super(app, 'large');
  }

  render() {
    const textContainer = document.createElement('div');

    textContainer.innerHTML = (`
      Hello world.
    `);

    this.modal.appendChild(textContainer);
  }
}

export { GeneratedMap };
