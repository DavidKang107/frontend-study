import { useState } from "react";
import EffectSummary from "./EffectSummary";

function EffectContainer() {
  const [invisible, setInvisible] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setInvisible(false)}>사라져라</button>
      <button type="button" onClick={() => setInvisible(true)}>나타나라</button>
      {invisible && <EffectSummary />}
    </>
  );
};

export default EffectContainer;