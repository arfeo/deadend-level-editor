import { IGlobals } from '../types/constants';

export const globals: IGlobals = {
  pageInstance: null,
  eventListeners: {
    onPanelObjectBallClick: null,
    onPanelObjectExitClick: null,
    onPanelObjectWallClick: null,
    onPanelObjectStoneClick: null,
    onPanelObjectStoneUpClick: null,
    onPanelObjectStoneRightClick: null,
    onPanelObjectStoneDownClick: null,
    onPanelObjectStoneLeftClick: null,
    onGenerateMapClick: null,
  },
  cellSize: 0,
};
