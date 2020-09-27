import React, { useState, useRef, createRef, useEffect } from 'react';
const Test = () => {
  const [renderIndex, setRenderIndex] = useState(1);
  const refFromUseRef = useRef();
  const refFromCreateRef = createRef();

  useEffect(() => {
    console.log('RE-RENDER');
  }, [renderIndex]);

  if (!refFromUseRef.current) {
    refFromUseRef.current = renderIndex;
  }

  if (!refFromCreateRef.current) {
    refFromCreateRef.current = renderIndex;
  }

  return (
    <>
      <p>Current render index: {renderIndex}</p>
      <p>useRef value: {refFromUseRef.current}</p>
      <p>createRef value:{refFromCreateRef.current}</p>

      <button onClick={() => setRenderIndex(renderIndex + 1)}>
        Cause re-render
      </button>
    </>
  );
};

export default Test;
