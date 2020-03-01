// tslint:disable:max-file-line-count
import { GameColors, StoneLabels, STONE_LABEL_FONT } from '../../constants/app';

/**
 * Render the Editor board: grid, canvas, tools panel
 */
function renderEditorBoard() {
  const appRoot: HTMLElement = document.getElementById('root');
  const editorBoard: HTMLElement = document.createElement('div');

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
    eraser: document.createElement('div'),
  };

  this.panelActions = {
    reset: document.createElement('div'),
    generate: document.createElement('div'),
  };

  appRoot.innerHTML = '';

  editorBoard.className = 'editorBoard';
  this.editorBoardGrid.className = '-grid';
  this.editorPanel.className = '-panel';

  appRoot.appendChild(editorBoard);
  editorBoard.appendChild(this.editorBoardGrid);
  editorBoard.appendChild(this.editorPanel);

  for (let y = 0; y < 20; y += 1) {
    for (let x = 0; x < 32; x += 1) {
      const cell: HTMLElement = document.createElement('div');
      const cellCanvas: HTMLCanvasElement = document.createElement('canvas');

      cell.className = '-cell';
      cellCanvas.id = `canvas-${y}-${x}`;
      cellCanvas.className = '-canvas';
      cellCanvas.width = this.cellSize;
      cellCanvas.height = this.cellSize;
      cellCanvas.setAttribute('x', x.toString());
      cellCanvas.setAttribute('y', y.toString());

      this.editorBoardGrid.appendChild(cell);
      cell.appendChild(cellCanvas);
    }
  }
}

/**
 * Render tools panel
 */
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
  const panelObjectEraserCanvas: HTMLCanvasElement = document.createElement('canvas');
  const panelActions: HTMLElement = document.createElement('div');

  panelObjectBallCanvas.width = this.cellSize;
  panelObjectBallCanvas.height = this.cellSize;
  panelObjectExitCanvas.width = this.cellSize;
  panelObjectExitCanvas.height = this.cellSize;
  panelObjectWallCanvas.width = this.cellSize;
  panelObjectWallCanvas.height = this.cellSize;
  panelObjectStoneCanvas.width = this.cellSize;
  panelObjectStoneCanvas.height = this.cellSize;
  panelObjectStoneUpCanvas.width = this.cellSize;
  panelObjectStoneUpCanvas.height = this.cellSize;
  panelObjectStoneRightCanvas.width = this.cellSize;
  panelObjectStoneRightCanvas.height = this.cellSize;
  panelObjectStoneDownCanvas.width = this.cellSize;
  panelObjectStoneDownCanvas.height = this.cellSize;
  panelObjectStoneLeftCanvas.width = this.cellSize;
  panelObjectStoneLeftCanvas.height = this.cellSize;
  panelObjectEraserCanvas.width = this.cellSize;
  panelObjectEraserCanvas.height = this.cellSize;

  panelObjects.className = '-objects';
  panelActions.className = '-actions';
  this.panelObjects.ball.className = '-object';
  this.panelObjects.ball.setAttribute('key', '1');
  this.panelObjects.ball.title = 'Ball';
  this.panelObjects.exit.className = '-object';
  this.panelObjects.exit.setAttribute('key', '2');
  this.panelObjects.exit.title = 'Exit';
  this.panelObjects.wall.className = '-object';
  this.panelObjects.wall.setAttribute('key', '3');
  this.panelObjects.wall.title = 'Wall';
  this.panelObjects.stone.className = '-object';
  this.panelObjects.stone.setAttribute('key', '4');
  this.panelObjects.stone.title = 'Stone (regular)';
  this.panelObjects.stoneUp.className = '-object';
  this.panelObjects.stoneUp.setAttribute('key', '5');
  this.panelObjects.stoneUp.title = 'Up arrow stone';
  this.panelObjects.stoneRight.className = '-object';
  this.panelObjects.stoneRight.setAttribute('key', '6');
  this.panelObjects.stoneRight.title = 'Right arrow stone';
  this.panelObjects.stoneDown.className = '-object';
  this.panelObjects.stoneDown.setAttribute('key', '7');
  this.panelObjects.stoneDown.title = 'Down arrow stone';
  this.panelObjects.stoneLeft.className = '-object';
  this.panelObjects.stoneLeft.setAttribute('key', '8');
  this.panelObjects.stoneLeft.title = 'Left arrow stone';
  this.panelObjects.eraser.classList.add('-object');
  this.panelObjects.eraser.classList.add('eraser');
  this.panelObjects.eraser.title = 'Eraser';
  this.panelObjects.eraser.setAttribute('key', '0');
  this.panelActions.reset.className = '-reset';
  this.panelActions.generate.className = '-generate';

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
  this.panelObjects.eraser.appendChild(panelObjectEraserCanvas);
  panelObjects.appendChild(this.panelObjects.exit);
  panelObjects.appendChild(this.panelObjects.wall);
  panelObjects.appendChild(this.panelObjects.stone);
  panelObjects.appendChild(this.panelObjects.stoneUp);
  panelObjects.appendChild(this.panelObjects.stoneRight);
  panelObjects.appendChild(this.panelObjects.stoneDown);
  panelObjects.appendChild(this.panelObjects.stoneLeft);
  panelObjects.appendChild(this.panelObjects.eraser);
  this.editorPanel.appendChild(panelActions);
  panelActions.appendChild(this.panelActions.reset);
  panelActions.appendChild(this.panelActions.generate);
  this.panelActions.reset.innerText = 'Reset';
  this.panelActions.reset.setAttribute('action', 'reset');
  this.panelActions.generate.innerText = 'Generate';
  this.panelActions.generate.setAttribute('action', 'generate');

  renderBall.call(this, panelObjectBallCanvas.getContext('2d'));
  renderExit.call(this, panelObjectExitCanvas.getContext('2d'));
  renderWall.call(this, panelObjectWallCanvas.getContext('2d'));
  renderStone.call(this, panelObjectStoneCanvas.getContext('2d'));
  renderStone.call(this, panelObjectStoneUpCanvas.getContext('2d'), 'up');
  renderStone.call(this, panelObjectStoneRightCanvas.getContext('2d'), 'right');
  renderStone.call(this, panelObjectStoneDownCanvas.getContext('2d'), 'down');
  renderStone.call(this, panelObjectStoneLeftCanvas.getContext('2d'), 'left');
  renderEraser.call(this, panelObjectEraserCanvas.getContext('2d'));
}

/**
 * Render the Ball
 *
 * @param ctx
 */
function renderBall(ctx: CanvasRenderingContext2D) {
  const grdX: number = this.cellSize / 2;
  const grdY: number = this.cellSize / 2;
  const innerRadius: number = this.cellSize / 6;
  const outerRadius: number = this.cellSize / 3;

  clearCell.call(this, ctx);

  const gradient: CanvasGradient = ctx.createRadialGradient(
    grdX,
    grdY,
    innerRadius,
    grdX,
    grdY,
    outerRadius,
  );

  gradient.addColorStop(0, GameColors.BallGradientInner);
  gradient.addColorStop(1, GameColors.BallGradientOuter);

  ctx.fillStyle = gradient;

  ctx.beginPath();
  ctx.arc(
    this.cellSize / 2,
    this.cellSize / 2,
    this.cellSize / 2.5,
    0,
    Math.PI * 2,
    false,
  );
  ctx.fill();
}

/**
 * Render exit
 *
 * @param ctx
 */
function renderExit(ctx: CanvasRenderingContext2D) {
  const grdX: number = this.cellSize / 2;
  const grdY: number = this.cellSize / 2;
  const innerRadius: number = this.cellSize / 8;
  const outerRadius: number = this.cellSize / 3;

  clearCell.call(this, ctx);

  const gradient: CanvasGradient = ctx.createRadialGradient(
    grdX,
    grdY,
    innerRadius,
    grdX,
    grdY,
    outerRadius,
  );

  gradient.addColorStop(0, GameColors.ExitGradientInner);
  gradient.addColorStop(1, GameColors.ExitGradientOuter);

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(
    this.cellSize / 2,
    this.cellSize / 2,
    this.cellSize / 2.5,
    0,
    Math.PI * 2,
    false,
  );
  ctx.fill();
}

/**
 * Render wall
 *
 * @param ctx
 */
function renderWall(ctx: CanvasRenderingContext2D) {
  clearCell.call(this, ctx);

  ctx.fillStyle = GameColors.Wall;
  ctx.fillRect(
    0,
    0,
    this.cellSize,
    this.cellSize,
  );

  for (let i = 1; i <= 4; i += 1) {
    ctx.beginPath();
    ctx.moveTo(
      0,
      i * this.cellSize / 4,
    );
    ctx.lineTo(
      this.cellSize,
      i * this.cellSize / 4,
    );
    ctx.stroke();
  }

  for (let i = 1; i <= 4; i += 1) {
    ctx.beginPath();
    ctx.moveTo(
      (i % 2 === 0 ? 1 : 2) * this.cellSize / 2,
      (i - 1) * this.cellSize / 4,
    );
    ctx.lineTo(
      (i % 2 === 0 ? 1 : 2) * this.cellSize / 2,
      (i - 1) * this.cellSize / 4 + this.cellSize / 4,
    );
    ctx.stroke();
  }
}

/**
 * Render stone
 *
 * @param ctx
 * @param direction
 */
function renderStone(ctx: CanvasRenderingContext2D, direction?: string) {
  clearCell.call(this, ctx);

  ctx.fillStyle = GameColors.Stone;

  ctx.fillRect(
    1,
    1,
    this.cellSize - 2,
    this.cellSize - 2,
  );

  if (direction) {
    ctx.fillStyle = GameColors.StoneLabel;
    ctx.font = STONE_LABEL_FONT;

    ctx.fillText(
      StoneLabels[direction.replace(/^\w/, (item: string) => item.toUpperCase()) as keyof typeof StoneLabels],
      this.cellSize / (direction === 'up' || direction === 'down' ? 2.5 : 3.5),
      this.cellSize / 1.5,
    );
  }
}

/**
 * Render eraser tool icon
 *
 * @param ctx
 */
function renderEraser(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = GameColors.Eraser;
  ctx.font = STONE_LABEL_FONT;

  ctx.fillText(
    StoneLabels.Eraser,
    this.cellSize / 3,
    this.cellSize / 1.5,
  );
}

/**
 * Clear cell canvas completely
 *
 * @param ctx
 */
function clearCell(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(
    0,
    0,
    this.cellSize,
    this.cellSize,
  );
}

export {
  renderEditorBoard,
  renderPanel,
  renderBall,
  renderWall,
  renderExit,
  renderStone,
  clearCell,
};
