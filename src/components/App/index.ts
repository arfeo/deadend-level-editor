import { setCellSize } from '../../utils/common';
import { renderEditorBoard } from './render';

class App {
  appRoot: HTMLElement;
  editorBoardGrid: HTMLElement;
  cellSize: number;

  constructor() {
    this.appRoot = document.getElementById('root');
    this.editorBoardGrid = document.createElement('div');

    this.cellSize = setCellSize();

    this.render();
  }

  render() {
    renderEditorBoard.call(this);
  }
}

export { App };
