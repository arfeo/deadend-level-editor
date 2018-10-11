import { globals } from '../../constants/globals';

import { setCellSize } from '../../utils/common';
import { renderEditorBoard, renderPanel } from './render';
import {
  setUpEventHandlers,
  removeEventHandlers,
  panelObjectClickHandler,
  panelActionClickHandler,
} from './events';

class App {
  appRoot: HTMLElement;
  editorBoardGrid: HTMLElement;
  editorPanel: HTMLElement;
  panelObjects: {
    ball: HTMLElement;
    exit: HTMLElement;
    wall: HTMLElement;
    stone: HTMLElement;
    stoneUp: HTMLElement;
    stoneRight: HTMLElement;
    stoneDown: HTMLElement;
    stoneLeft: HTMLElement;
  };
  panelActions: {
    generate: HTMLElement;
  };
  cellSize: number;
  currentObject: number;

  constructor() {
    this.appRoot = document.getElementById('root');
    this.editorBoardGrid = document.createElement('div');
    this.editorPanel = document.createElement('div');

    this.panelObjects = {
      ball: document.createElement('div'),
      exit: document.createElement('div'),
      wall: document.createElement('div'),
      stone: document.createElement('div'),
      stoneUp: document.createElement('div'),
      stoneRight: document.createElement('div'),
      stoneDown: document.createElement('div'),
      stoneLeft: document.createElement('div'),
    };

    this.panelActions = {
      generate: document.createElement('div'),
    };

    this.currentObject = 0;

    globals.eventListeners.onPanelObjectClick = panelObjectClickHandler.bind(this);
    globals.eventListeners.onPanelActionClick = panelActionClickHandler.bind(this);

    this.cellSize = setCellSize();

    this.render();
  }

  render() {
    renderEditorBoard.call(this);
    renderPanel.call(this);

    setUpEventHandlers.call(this);
  }

  destroy() {
    removeEventHandlers.call(this);

    globals.pageInstance = null;
  }
}

export { App };
