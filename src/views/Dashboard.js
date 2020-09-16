import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Dashboard = () => {
  const [inProp, setInProp] = useState(false);

  return (
    <div>
      <CSSTransition
        in={inProp}
        timeout={0}
        classNames="my-fade"
      >
        <div style={{ display: "inline-block" }}>
          {"I'll receive my-node-* classes"}
        </div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(!inProp)}>
        Click to Enter
      </button>
    </div>
  );
};

export default Dashboard;
