import { App } from '../components/App';

export interface IGlobals {
  pageInstance: App;
  eventListeners: {
    onPanelObjectClick: EventListener;
    onPanelActionClick: EventListener;
  };
  cellSize: number;
}
