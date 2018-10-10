/**
 * Render the Editor board: grid, canvas, tools panel
 */
function renderEditorBoard() {
  const editorBoard: HTMLElement = document.createElement('div');

  this.appRoot.innerHTML = '';

  editorBoard.className = 'editorBoard';
  this.editorBoardGrid.className = '-grid';
  this.editorPanel.className = '-panel';

  this.appRoot.appendChild(editorBoard);
  editorBoard.appendChild(this.editorBoardGrid);
  editorBoard.appendChild(this.editorPanel);

  for (let y = 0; y < 20; y += 1) {
    for (let x = 0; x < 32; x += 1) {
      const cell: HTMLElement = document.createElement('div');
      const cellCanvas: HTMLCanvasElement = document.createElement('canvas');

      cell.id = `cell-${y}-${x}`;
      cell.className = '-cell';
      cellCanvas.width = this.cellSize;
      cellCanvas.height = this.cellSize;

      this.editorBoardGrid.appendChild(cell);
      cell.appendChild(cellCanvas);
    }
  }
}

function renderPanel() {
  const panelObjects: HTMLElement = document.createElement('div');
  const panelObjectBallCanvas: HTMLCanvasElement = document.createElement('canvas');
  const panelObjectExitCanvas: HTMLCanvasElement = document.createElement('canvas');
  const panelObjectWallCanvas: HTMLCanvasElement = document.createElement('canvas');
  const panelObjectStoneCanvas: HTMLCanvasElement = document.createElement('canvas');
  const panelObjectStoneUpCanvas: HTMLCanvasElement = document.createElement('canvas');
  const panelObjectStoneRightCanvas: HTMLCanvasElement = document.createElement('canvas');
  const panelObjectStoneDownCanvas: HTMLCanvasElement = document.createElement('canvas');
  const panelObjectStoneLeftCanvas: HTMLCanvasElement = document.createElement('canvas');
  const panelActions: HTMLElement = document.createElement('div');
  const panelActionGenerate: HTMLElement = document.createElement('div');

  panelObjects.className = '-objects';
  panelActions.className = '-actions';
  this.panelObjects.ball.className = '-object';
  this.panelObjects.exit.className = '-object';
  this.panelObjects.wall.className = '-object';
  this.panelObjects.stone.className = '-object';
  this.panelObjects.stoneUp.className = '-object';
  this.panelObjects.stoneRight.className = '-object';
  this.panelObjects.stoneDown.className = '-object';
  this.panelObjects.stoneLeft.className = '-object';
  panelActionGenerate.className = '-generate';

  this.editorPanel.appendChild(panelObjects);
  panelObjects.appendChild(this.panelObjects.ball);
  this.panelObjects.ball.appendChild(panelObjectBallCanvas);
  this.panelObjects.exit.appendChild(panelObjectExitCanvas);
  this.panelObjects.wall.appendChild(panelObjectWallCanvas);
  this.panelObjects.stone.appendChild(panelObjectStoneCanvas);
  this.panelObjects.stoneUp.appendChild(panelObjectStoneUpCanvas);
  this.panelObjects.stoneRight.appendChild(panelObjectStoneRightCanvas);
  this.panelObjects.stoneDown.appendChild(panelObjectStoneDownCanvas);
  this.panelObjects.stoneLeft.appendChild(panelObjectStoneLeftCanvas);
  panelObjects.appendChild(this.panelObjects.exit);
  panelObjects.appendChild(this.panelObjects.wall);
  panelObjects.appendChild(this.panelObjects.stone);
  panelObjects.appendChild(this.panelObjects.stoneUp);
  panelObjects.appendChild(this.panelObjects.stoneRight);
  panelObjects.appendChild(this.panelObjects.stoneDown);
  panelObjects.appendChild(this.panelObjects.stoneLeft);
  this.editorPanel.appendChild(panelActions);
  panelActions.appendChild(panelActionGenerate);
}

export { renderEditorBoard, renderPanel };
