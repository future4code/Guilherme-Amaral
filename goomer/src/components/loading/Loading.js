import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { BoxEstilizado } from './styled';

export default function Loading() {
  
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (

    <BoxEstilizado sx={{ width: '20%', color: '#009CA3' }}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} color="inherit" />
    </BoxEstilizado>
  );
}