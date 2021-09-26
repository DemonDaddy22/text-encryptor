import { useState } from 'react';
import { useMemo, useEffect } from 'react';
import classes from './styles.module.css';
import IconButton from '../iconButton';
import CloseIcon from '../../assets/icons/closeIcon';
import ErrorIcon from '../../assets/icons/errorIcon';
import InfoIcon from '../../assets/icons/infoIcon';
import SuccessIcon from '../../assets/icons/successIcon';
import WarningIcon from '../../assets/icons/warningIcon';
import { SEVERITY } from '../constants';
import useAsyncExec from '../../hooks/useAsyncExec';

const SnackBar = props => {
    const { message, severity, handleClose } = props;
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
    }, [severity]);

    return <div className={classes.snackbarContainer}>
        {selectSeverityIcon}
        <div className={classes.message}>{message}</div>
        <IconButton onClick={snackbarClose}>
            <CloseIcon />
        </IconButton>
    </div>;
};

export default SnackBar;