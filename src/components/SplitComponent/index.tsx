import { useState } from "react";

const SplitComponent = ({ className = "relative" }: { className?: string }) => {
  const [split, setSplit] = useState(false);

  // const containerStyle = 'w-[calc(50%-4px)] pt-[calc(50%-4px)]';
  const containerStyle = "w-[49%] pt-[49%]";

  return split ? (
    <div className={`${className} ${containerStyle}`}>
      <SplitComponent className={"absolute top-0 left-0"} />
      <SplitComponent className={"absolute top-0 right-0"} />
      <SplitComponent className={"absolute bottom-0 left-0"} />
      <SplitComponent className={"absolute bottom-0 right-0"} />
    </div>
  ) : (
    <div
      className={`bg-[#f00] rounded-full ${className} ${containerStyle}`}
      onClick={() => setSplit(true)}
    ></div>
  );
};

export default SplitComponent;
