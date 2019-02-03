import { Editor } from './components/Editor';

import { APP } from './constants/globals';

window.onload = () => {
  APP.pageInstance = new Editor();
};
