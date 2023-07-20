import { useState } from 'react';

import HelpArea from '../HelpArea/HelpArea.jsx';
import {HELP_ITEMS} from "../HelpArea/helpItems.js";

function MainContent() {
  const [isHelpButtonVisible, setIsHelpButtonVisible] = useState(false);

  function onClickToggleHelp() {
    setIsHelpButtonVisible((isVisiblePreviousState) => !isVisiblePreviousState);
  }

  return (
    <main>
      <button onClick={onClickToggleHelp}>{isHelpButtonVisible ? 'Hide' : 'Show'} Help</button>
      {isHelpButtonVisible && <HelpArea helpItems={HELP_ITEMS} />}
    </main>
  );
}

export default MainContent;
