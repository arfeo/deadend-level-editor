import { App } from '../components/App';

export interface IGlobals {
  pageInstance: App;
  eventListeners: {
    onPanelObjectBallClick: EventListener;
    onPanelObjectExitClick: EventListener;
    onPanelObjectWallClick: EventListener;
    onPanelObjectStoneClick: EventListener;
    onPanelObjectStoneUpClick: EventListener;
    onPanelObjectStoneRightClick: EventListener;
    onPanelObjectStoneDownClick: EventListener;
    onPanelObjectStoneLeftClick: EventListener;
    onGenerateMapClick: EventListener;
  };
  cellSize: number;
}
