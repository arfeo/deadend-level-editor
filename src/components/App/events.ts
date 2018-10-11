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
      if (confirm('Are you sure you want to reset current map?')) {
        const cells: NodeListOf<HTMLCanvasElement> = document.querySelectorAll(
          '.editorBoard .-grid .-cell .-canvas'
        ) as NodeListOf<HTMLCanvasElement>;

        for (const key in cells) {
          if (cells.hasOwnProperty(key)) {
            clearCell.call(this, cells[key].getContext('2d'));
          }
        }

        this.resetMap();
      }

      break;
    }
    case 'generate': {
      console.log(this.currentMap);

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
  const cellX: number = parseInt(currentCanvas.getAttribute('x'));
  const cellY: number = parseInt(currentCanvas.getAttribute('y'));

  if (this.currentMap[cellY][cellX] === 1) {
    this.currentBallPosition = [];
  }

  if (this.currentMap[cellY][cellX] === 2) {
    this.currentExitPosition = [];
  }

  this.currentMap[cellY][cellX] = this.currentObject;

  switch (this.currentObject) {
    case 0: return clearCell.call(this, ctx);
    case 1: {
      if (this.currentBallPosition.length > 0) {
        const ballX: number = this.currentBallPosition[1];
        const ballY: number = this.currentBallPosition[0];
        const oldBallCanvas: HTMLCanvasElement = document.getElementById(
          `canvas-${ballY}-${ballX}`
        ) as HTMLCanvasElement;

        clearCell.call(this, oldBallCanvas.getContext('2d'));
      }

      this.currentBallPosition = [cellY, cellX];

      return renderBall.call(this, ctx);
    }
    case 2: {
      if (this.currentExitPosition.length > 0) {
        const exitX: number = this.currentExitPosition[1];
        const exitY: number = this.currentExitPosition[0];
        const oldExitCanvas: HTMLCanvasElement = document.getElementById(
          `canvas-${exitY}-${exitX}`
        ) as HTMLCanvasElement;

        clearCell.call(this, oldExitCanvas.getContext('2d'));
      }

      this.currentExitPosition = [cellY, cellX];

      return renderExit.call(this, ctx);
    }
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
