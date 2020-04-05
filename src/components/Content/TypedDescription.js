import React, { useEffect, useRef, useCallback, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Typed from 'typed.js';

import { setTyped } from '../../store/actions/steps';
import pathToSteptransposer from '../../classes/pathToStepTransposer';

export default ({ description }) => {
  let { pathname: path } = useLocation();
  const typedEl = useRef(null)
  const dispatch = useDispatch();
  const currentStep = pathToSteptransposer(path)
  const [staticDescription, setStaticDescription] = useState("");
  
  const alreadyTyped = useSelector(state => state.steps.typed);
  const alreadyTypedCurrentStep = alreadyTyped[currentStep];

  const dispatchAlreadyTypedCallback = useCallback(() => {
    dispatch(setTyped({ currentStep }));
  }, [dispatch, currentStep])


  useEffect(() => {

    if (!alreadyTypedCurrentStep) {
      const typedOptions = {
        strings: description,
        typeSpeed: 40,
        backSpeed: 70,
        showCursor: false,
        backDelay: 0,
        onComplete: () => dispatchAlreadyTypedCallback()
      }

      const typed = new Typed(typedEl.current, typedOptions);

      return () => typed.destroy();
    } else {
      setStaticDescription(description[description.length - 1])
    }
  }, [description, typedEl, dispatchAlreadyTypedCallback, alreadyTypedCurrentStep])

  return (<p ref={typedEl}>
    {staticDescription}
  </p>)

}