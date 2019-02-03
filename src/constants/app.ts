export enum MapObjects {
  Eraser = 0,
  Ball = 1,
  Exit = 2,
  Wall = 3,
  StoneRegular = 4,
  StoneUp = 5,
  StoneRight = 6,
  StoneDown = 7,
  StoneLeft = 8,
}

export enum Actions {
  Reset = 'reset',
  Generate = 'generate',
}

export enum GameColors {
  BallGradientInner = 'deepskyblue',
  BallGradientOuter = 'royalblue',
  ExitGradientInner = 'red',
  ExitGradientOuter = 'gold',
  Wall = 'red',
  Stone = 'grey',
  StoneLabel = 'black',
  Eraser = 'red',
}

export enum StoneLabels {
  Up = '↑',
  Right = '→',
  Down = '↓',
  Left = '←',
  Eraser = '✕',
}

export const STONE_LABEL_FONT = '2vmin Helvetica, Arial';
