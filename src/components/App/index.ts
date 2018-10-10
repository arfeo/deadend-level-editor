import { setCellSize } from '../../utils/common';
import { renderEditorBoard, renderPanel } from './render';

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
  }
  cellSize: number;

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

    this.cellSize = setCellSize();

    this.render();
  }

  render() {
    renderEditorBoard.call(this);
    renderPanel.call(this);
  }
}

export { App };
