import { CELL_SIZE_VMIN } from '../../constants/app';

import { setCellSize } from '../../utils/common';
import { renderEditorBoard, renderPanel } from './render';
import { setUpEventHandlers, removeEventHandlers } from './events';

class Editor {
  editorBoardGrid: HTMLElement;
  editorPanel: HTMLElement;
  panelObjects: { [key: string]: HTMLElement };
  panelActions: { [key: string]: HTMLElement };
  cellSize: number;
  selectedObject: number;
  currentMap: number[][];
  currentBallPosition: number[];
  currentExitPosition: number[];

  constructor() {
    this.selectedObject = -1;
    this.cellSize = setCellSize(CELL_SIZE_VMIN);
    this.currentMap = [];
    this.currentBallPosition = [];
    this.currentExitPosition = [];

    this.resetMap();
    this.render();
  }

  render() {
    renderEditorBoard.call(this);
    renderPanel.call(this);

    setUpEventHandlers.call(this);
  }

  destroy() {
    removeEventHandlers.call(this);
  }

  resetMap() {
    for (let y = 0; y < 20; y += 1) {
      this.currentMap[y] = Array(32).fill(0);
    }

    this.currentBallPosition = [];
    this.currentExitPosition = [];
  }
}

export { Editor };
