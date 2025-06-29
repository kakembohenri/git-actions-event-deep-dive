import { useState } from "react";

import HelpArea from "./HelpArea";

function MainContent() {
  const [helpVisible, setHelpVisible] = useState(false);

  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible);
  }

  // Tests
  // - MainContent renders a button to toggle help visibility

  return (
    <main>
      <button onClick={toggleHelp}>{helpVisible ? "Hide" : "Show"} Help</button>
      {helpVisible && <HelpArea />}
    </main>
  );
}

export default MainContent;
