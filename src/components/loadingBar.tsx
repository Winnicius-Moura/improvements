import { LinearProgress } from '@mui/material';
import Fade from '@mui/material/Fade';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const LoadingBarLinearComponent = () => {
  const loadingBarState = useSelector((state: RootState) => state.loadingBarState)
  return (
    <Fade
      in={loadingBarState}
      style={{
        transitionDelay: loadingBarState ? '800ms' : '0ms',
      }}
      unmountOnExit
    >
      <LinearProgress style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000000000
      }} color='warning' />
    </Fade>
  )
}
