import { useState } from "react";

const SplitComponent = () => {
  const [split, setSplit] = useState(false);

  return split ? (
    <div className="grid grid-rows-2 grid-cols-2 w-full h-full">
      <SplitComponent />
      <SplitComponent />
      <SplitComponent />
      <SplitComponent />
    </div>
  ) : (
    <div
      className="bg-[#f00] rounded-full aspect-square w-[40%] m-auto"
      onClick={() => setSplit(true)}
    ></div>
  );
};

export default SplitComponent;
