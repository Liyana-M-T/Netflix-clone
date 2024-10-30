import React from "react";

const Player = () => {
 
  return (
    <div className="flex justify-center gap-10">
      {arr?.map((item) => {
        <React.Fragment>
          <div>{item}</div>
          <div>hi</div>
        </React.Fragment>
      })}
    </div>
  );
};

export default Player;
