/**
 * Render the Editor board: grid, canvas, tools panel
 */
function renderEditorBoard() {
  const editorBoard: HTMLElement = document.createElement('div');
  const editorBoardPanel: HTMLElement = document.createElement('div');

  this.appRoot.innerHTML = '';

  editorBoard.className = 'editorBoard';
  this.editorBoardGrid.className = '-grid';
  editorBoardPanel.className = '-panel';

  this.appRoot.appendChild(editorBoard);
  editorBoard.appendChild(this.editorBoardGrid);
  editorBoard.appendChild(editorBoardPanel);

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

export { renderEditorBoard };
