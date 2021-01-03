import { APP } from '../../constants/globals';

import { Actions, MapObjects } from '../../constants/app';
import { GeneratedMap } from '../GeneratedMap';

import { renderBall, renderExit, renderStone, renderWall, clearCell } from './render';

function setUpEventHandlers(): void {
  APP.eventListeners = {
    onGridCellClick: gridCellClickHandler.bind(this),
    onPanelObjectClick: panelObjectClickHandler.bind(this),
    onPanelActionClick: panelActionClickHandler.bind(this),
  };

  for (const key in this.panelObjects) {
    if (Object.prototype.hasOwnProperty.call(this.panelObjects, key)) {
      this.panelObjects[key].addEventListener('click', APP.eventListeners.onPanelObjectClick);
    }
  }

  for (const key in this.panelActions) {
    if (Object.prototype.hasOwnProperty.call(this.panelActions, key)) {
      this.panelActions[key].addEventListener('click', APP.eventListeners.onPanelActionClick);
    }
  }

  const cells: NodeListOf<HTMLCanvasElement> = document.querySelectorAll(
    '.editorBoard .-grid .-cell .-canvas'
  ) as NodeListOf<HTMLCanvasElement>;

  for (const key in cells) {
    if (Object.prototype.hasOwnProperty.call(cells, key)) {
      cells[key].addEventListener('click', APP.eventListeners.onGridCellClick);
    }
  }
}

function removeEventHandlers(): void {
  for (const key in this.panelObjects) {
    if (Object.prototype.hasOwnProperty.call(this.panelObjects, key)) {
      this.panelObjects[key].removeEventListener('click', APP.eventListeners.onPanelObjectClick);
    }
  }

  for (const key in this.panelActions) {
    if (Object.prototype.hasOwnProperty.call(this.panelActions, key)) {
      this.panelActions[key].removeEventListener('click', APP.eventListeners.onPanelActionClick);
    }
  }

  const cells: NodeListOf<HTMLCanvasElement> = document.querySelectorAll(
    '.editorBoard .-grid .-cell .-canvas'
  ) as NodeListOf<HTMLCanvasElement>;

  for (const key in cells) {
    if (Object.prototype.hasOwnProperty.call(cells, key)) {
      cells[key].removeEventListener('click', APP.eventListeners.onGridCellClick);
    }
  }
}

function panelObjectClickHandler(event: MouseEvent): void {
  const currentObject: HTMLElement = event.currentTarget as HTMLElement;

  for (const key in this.panelObjects) {
    if (Object.prototype.hasOwnProperty.call(this.panelObjects, key)) {
      this.panelObjects[key].classList.remove('active');
    }
  }

  currentObject.classList.add('active');

  this.selectedObject = parseInt(currentObject.getAttribute('key'), 10);
}

function panelActionClickHandler(event: MouseEvent): void {
  event.stopPropagation();

  const action: HTMLElement = event.target as HTMLElement;
  const actionType: string = action.getAttribute('action');

  switch (actionType) {
    case Actions.Reset: {
      if (confirm('Are you sure you want to reset current map?')) {
        const cells: NodeListOf<HTMLCanvasElement> = document.querySelectorAll(
          '.editorBoard .-grid .-cell .-canvas'
        ) as NodeListOf<HTMLCanvasElement>;

        for (const key in cells) {
          if (Object.prototype.hasOwnProperty.call(cells, key)) {
            clearCell.call(this, cells[key].getContext('2d'));
          }
        }

        this.resetMap();
      }

      break;
    }
    case Actions.Generate: {
      if (this.currentBallPosition.length === 0 || this.currentExitPosition.length === 0) {
        alert('There should be Ball and Exit objects on the map');

        return;
      }

      new GeneratedMap(this);

      break;
    }
    default: break;
  }
}

function gridCellClickHandler(event: MouseEvent): void {
  event.stopPropagation();

  const currentCanvas: HTMLCanvasElement = event.target as HTMLCanvasElement;
  const ctx: CanvasRenderingContext2D = currentCanvas.getContext('2d');
  const cellX: number = parseInt(currentCanvas.getAttribute('x'), 10);
  const cellY: number = parseInt(currentCanvas.getAttribute('y'), 10);

  if (this.currentMap[cellY][cellX] === 1) {
    this.currentBallPosition = [];
  }

  if (this.currentMap[cellY][cellX] === 2) {
    this.currentExitPosition = [];
  }

  this.currentMap[cellY][cellX] = this.selectedObject;

  switch (this.selectedObject) {
    case MapObjects.Eraser: return clearCell.call(this, ctx);
    case MapObjects.Ball: {
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
    case MapObjects.Exit: {
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
    case MapObjects.Wall: return renderWall.call(this, ctx);
    case MapObjects.StoneRegular: return renderStone.call(this, ctx);
    case MapObjects.StoneUp: return renderStone.call(this, ctx, 'up');
    case MapObjects.StoneRight: return renderStone.call(this, ctx, 'right');
    case MapObjects.StoneDown: return renderStone.call(this, ctx, 'down');
    case MapObjects.StoneLeft: return renderStone.call(this, ctx, 'left');
    default: alert('Choose the object to insert');
  }
}

export {
  setUpEventHandlers,
  removeEventHandlers,
  panelObjectClickHandler,
  panelActionClickHandler,
  gridCellClickHandler,
};
