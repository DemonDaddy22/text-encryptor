import Button from '../button';

import classes from './styles.module.css';

const Error = props => {
    const { error: { message, status }, buttonLabel, onClick } = props;

    return <div className={classes.errorWrapper}>
        <div className={classes.errorContainer}>
            <div className={classes.errorStatus}>{status}</div>
            <div className={classes.errorContent}>
                {message}
                <br />
                Click on the button below to create a message.
            </div>
        </div>
        {typeof onClick === 'function' &&
            <Button onClick={onClick}>
                {buttonLabel}
            </Button>}
    </div>;
};

export default Error;
