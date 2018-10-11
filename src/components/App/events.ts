import { globals } from '../../constants/globals';

import { renderBall, renderExit, renderStone, renderWall, clearCell } from './render';

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

  const cells: NodeListOf<HTMLCanvasElement> = document.querySelectorAll(
    '.editorBoard .-grid .-cell .-canvas'
  ) as NodeListOf<HTMLCanvasElement>;

  for (const key in cells) {
    if (cells.hasOwnProperty(key)) {
      cells[key].removeEventListener('click', globals.eventListeners.onGridCellClick);
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
  event.stopPropagation();

  const action: HTMLElement = event.target as HTMLElement;
  const actionType: string = action.getAttribute('action');

  switch (actionType) {
    case 'reset': {
      const cells: NodeListOf<HTMLCanvasElement> = document.querySelectorAll(
        '.editorBoard .-grid .-cell .-canvas'
      ) as NodeListOf<HTMLCanvasElement>;

      for (const key in cells) {
        if (cells.hasOwnProperty(key)) {
          clearCell.call(this, cells[key].getContext('2d'));
        }
      }

      break;
    }
    case 'generate': {
      break;
    }
    default: break;
  }
}

/**
 * Grid cell click handler
 *
 * @param event
 */
function gridCellClickHandler(event: MouseEvent) {
  event.stopPropagation();

  const currentCanvas: HTMLCanvasElement = event.target as HTMLCanvasElement;
  const ctx: CanvasRenderingContext2D = currentCanvas.getContext('2d');

  switch (this.currentObject) {
    case 1: return renderBall.call(this, ctx);
    case 2: return renderExit.call(this, ctx);
    case 3: return renderWall.call(this, ctx);
    case 4: return renderStone.call(this, ctx);
    case 5: return renderStone.call(this, ctx, 'up');
    case 6: return renderStone.call(this, ctx, 'right');
    case 7: return renderStone.call(this, ctx, 'down');
    case 8: return renderStone.call(this, ctx, 'left');
    default: {
      alert('Choose the object');

      return;
    }
  }
}

export {
  setUpEventHandlers,
  removeEventHandlers,
  panelObjectClickHandler,
  panelActionClickHandler,
  gridCellClickHandler,
};
