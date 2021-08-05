import {useState} from 'react';
import {useEffect, useMemo} from 'react';

import CloseIcon from '../../assets/closeIcon';
import ErrorIcon from '../../assets/errorIcon';
import InfoIcon from '../../assets/infoIcon';
import SuccessIcon from '../../assets/successIcon';
import WarningIcon from '../../assets/warningIcon';
import useAsyncExec from '../../hooks/useAsyncExec';
import {SEVERITY} from '../constants';
import IconButton from '../iconButton';

import classes from './styles.module.css';

const SnackBar = props => {
  const {message, severity, handleClose} = props;
  const [timer, setTimer] = useState(0);

  useEffect(() => setTimer(useAsyncExec(handleClose, 3000)), []);

  const snackbarClose = () => {
    clearTimeout(timer);
    handleClose();
  };

  const selectSeverityIcon = useMemo(() => {
    switch (severity) {
    case SEVERITY.INFO:
      return <InfoIcon />;
    case SEVERITY.WARNING:
      return <WarningIcon />;
    case SEVERITY.ERROR:
      return <ErrorIcon />;
    default:
      return <SuccessIcon />;
    }
  }, [ severity ]);

  return <div className = {classes.snackbarContainer}>{
      selectSeverityIcon}<div className = {classes.message}>{message}<
      /div>
        <IconButton onClick={snackbarClose}>
            <CloseIcon />
      </IconButton>
    </div>;
};

export default SnackBar;