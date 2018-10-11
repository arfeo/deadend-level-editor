import { IGlobals } from '../types/constants';

export const globals: IGlobals = {
  pageInstance: null,
  eventListeners: {
    onPanelObjectClick: null,
    onPanelActionClick: null,
  },
  cellSize: 0,
};
