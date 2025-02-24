import React, { useEffect, useRef, useState } from 'react';
import HALO from 'vanta/dist/vanta.halo.min';
import useStyles from './hero-style';

function Animation() {
  const { classes } = useStyles();
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setTimeout(() => {
        setVantaEffect(HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 400.00,
          minWidth: 400.00,
          size: 3.00
        }));
      }, 2000);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className={classes.illustration} ref={myRef} />
  );
}

export default Animation;
