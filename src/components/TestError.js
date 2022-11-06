import React, { useState } from "react";

export default function TestError() {
  const [errorText, setErrorText] = useState("");

  function handleError(e) {
    if (e.target.value.toUpperCase() == "BOMB") {
      setErrorText("BOMB");
    }
  }
  if (errorText == "BOMB") {
    throw new Error("CABOOM");
  }
  return (
    <div className="test-error">
      <label>Type Bomb to test Error boundary</label>
      <input
        onChange={handleError}
        type="text"
        placeholder="Type Bomb to check error boundary"
      />
    </div>
  );
}