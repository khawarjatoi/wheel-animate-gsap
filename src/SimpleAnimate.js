import React, { useEffect, useRef } from "react";
import { TimelineLite } from "gsap/all";

const SimpleAnimate = props => {
  const wheelContainerRef = useRef(null);
  const wheelTweenRef = useRef(null);

  useEffect(() => {
    // create logo tween
    const wheelContainer = wheelContainerRef.current;
    wheelTweenRef.current = new TimelineLite({ paused: true })
      .to(wheelContainer, 2, { x: 500, rotation: 240 })
      .to(wheelContainer, 1, { rotation: 360, transformOrigin: "center" });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center">Wheel Controller</h3>
          <p>Use the buttons to move the wheel</p>
          <div className="mb-2 btn-group">
            <button
              className="btn btn-controller"
              onClick={() => wheelTweenRef.current.play()}
            >
              Forward
            </button>
            <button
              className="btn btn-controller"
              onClick={() => wheelTweenRef.current.pause()}
            >
              Break
            </button>
            <button
              className="btn btn-controller"
              onClick={() => wheelTweenRef.current.reverse()}
            >
              Backward
            </button>
            <button
              className="btn btn-controller"
              onClick={() => wheelTweenRef.current.restart()}
            >
              Restart
            </button>
          </div>
          <hr />
        </div>

        <div className="col-12 mt-3">
          <img
            alt="wheel"
            className="wheel"
            ref={img => (wheelContainerRef.current = img)}
            src="https://openclipart.org/image/2400px/svg_to_png/262374/Wagonwheel.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleAnimate;
