import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default ({ description }) => {
  const typedEl = useRef(null)

  useEffect(() => {
    if (typedEl.current) {
      const typedOptions = {
        strings: description,
        typeSpeed: 40,
        backSpeed: 70,
        showCursor: false,
        backDelay: 0
      }

      const typed = new Typed(typedEl.current, typedOptions);

      return () => typed.destroy();
    }
  }, [description, typedEl])

  return <p ref={typedEl}></p>

}