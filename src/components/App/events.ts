import { globals } from '../../constants/globals';

/**
 * Set up app event listeners
 */
function setUpEventHandlers() {
  for (const key in this.panelObjects) {
    if (this.panelObjects.hasOwnProperty(key)) {
      this.panelObjects[key].addEventListener('click', globals.eventListeners.onPanelObjectClick);
    }
  }

  for (const key in this.panelActions) {
    if (this.panelActions.hasOwnProperty(key)) {
      this.panelActions[key].addEventListener('click', globals.eventListeners.onPanelActionClick);
    }
  }
}

/**
 * Remove app event listeners
 */
function removeEventHandlers() {
  for (const key in this.panelObjects) {
    if (this.panelObjects.hasOwnProperty(key)) {
      this.panelObjects[key].removeEventListener('click', globals.eventListeners.onPanelObjectClick);
    }
  }

  for (const key in this.panelActions) {
    if (this.panelActions.hasOwnProperty(key)) {
      this.panelActions[key].removeEventListener('click', globals.eventListeners.onPanelActionClick);
    }
  }
}

/**
 * Panel objects click event handler
 *
 * @param event
 */
function panelObjectClickHandler(event: MouseEvent) {
  const currentObject: HTMLElement = event.currentTarget as HTMLElement;

  for (const key in this.panelObjects) {
    if (this.panelObjects.hasOwnProperty(key)) {
      this.panelObjects[key].classList.remove('active');
    }
  }

  currentObject.classList.add('active');

  this.currentObject = parseInt(currentObject.getAttribute('key'));
}

/**
 * Panel action buttons click handler
 *
 * @param event
 */
function panelActionClickHandler(event: MouseEvent) {
  // ..
}

export {
  setUpEventHandlers,
  removeEventHandlers,
  panelObjectClickHandler,
  panelActionClickHandler,
};
