import {Fragment, useCallback, useEffect, useState} from 'react';

import ClipBoard from '../../assets/clipboard';
import ClipBoardChecked from '../../assets/clipboardChecked';
import useAsyncExec from '../../hooks/useAsyncExec';
import {copyText, isEmptyString} from '../../utils';
import Button from '../button';
import {MESSAGE_API_URL, SEVERITY, VALID_FOR_OPTIONS} from '../constants';
import Description from '../description';
import Error from '../error';
import IconButton from '../iconButton';
import Input from '../input';
import Loader from '../loader';
import Select from '../select';
import SnackBar from '../snackbar';

import classes from './styles.module.css';

const Generate = () => {
    const [inputTextVal, setInputTextVal] = useState('');
    const [inputSecretKey, setInputSecretKey] = useState('');
    const [validity, setValidity] = useState(VALID_FOR_OPTIONS.MIN_30);
    const [loading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [error, setError] = useState(null);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState(SEVERITY.INFO);
    const [fetchResult, setFetchResult] = useState(false);
    const [url, setUrl] = useState('');
    const [urlCopied, setUrlCopied] = useState(false);

    const handleInputTextChange = useCallback(value => setInputTextVal(value), []);

    const handleInputSecretKeyChange = useCallback(value => setInputSecretKey(value), []);

    const handleValidityChange = useCallback(value => setValidity(value), []);

    const handleSnackbarClose = useCallback(() => setOpenSnackbar(false), []);

    const handleReset = useCallback(() => {
        setError(null);
        setUrl('');
    }, []);

    const openInNewTab = useCallback(() => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }, [url]);

    const handleEncryption = useCallback(() => {
        const message = (isEmptyString(inputTextVal) || isEmptyString(inputSecretKey) || isEmptyString(validity)) ?
            'Missing either Text to Encrypt or Secret Key or Validity Duration!' : '';
        const severity = (isEmptyString(inputTextVal) || isEmptyString(inputSecretKey)) && SEVERITY.INFO;
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(!isEmptyString(message));
        setFetchResult(isEmptyString(message) ? true : false);
        useAsyncExec(() => {
            setFetchResult(false);
            handleInputTextChange('');
            handleInputSecretKeyChange('');
            handleValidityChange(VALID_FOR_OPTIONS.MIN_30);
        });
    }, [inputTextVal, inputSecretKey, validity]);

    const sendNewMessageRequest = useCallback(() => {
        setLoading(true);
        fetch(MESSAGE_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: inputTextVal,
                validFor: validity.value,
                secretKey: inputSecretKey
            })
        })
            .then(res => res.json())
            .then(result => {
                if (result.error) {
                    setError({ message: result.error.message, status: result.status });
                }
                setUrl(result.data?.url || '');
            })
            .catch(error => {
                setError({ message: error.message, status: '500' });
            })
            .finally(() => {
                setLoading(false);
            });
    }, [inputTextVal, inputSecretKey, validity]);

    useEffect(() => fetchResult && sendNewMessageRequest(), [fetchResult, sendNewMessageRequest]);

    const handleUrlCopy = useCallback(() => {
        if (isEmptyString(url)) return;
        if (!isEmptyString(copyText(url))) return;
        setUrlCopied(true);
        useAsyncExec(() => setUrlCopied(false), 2000);
    }, [url]);

    return <Fragment>
        {!isEmptyString(error) ?
            <Error error={error} buttonLabel='Create Message' onClick={handleReset} />
            : <>
                {(isEmptyString(url)
                    ? <div className={classes.generatorContainer}>
                        <Input inputVal={inputTextVal} handleInputChange={handleInputTextChange}
                            placeholderValue='Enter Text' rows={10} />
                        <div className={classes.container}>
                            <Input inputVal={inputSecretKey} handleInputChange={handleInputSecretKeyChange}
                                placeholderValue='Enter Secret Key' style={{ flex: 1 }} rows={1} />
                            <Select validity={validity} placeholder='Validity'
                                handleValidityChange={handleValidityChange} />
                        </div>
                        <div>
                            <Button onClick={handleEncryption}>Encrypt</Button>
                        </div>
                    </div>
                    : <div className={classes.generatorContainer}>
                        <div className={classes.urlContent}>
                            <div className={classes.urlText} onClick={openInNewTab}>{url}</div>
                            <IconButton onClick={handleUrlCopy}>
                                {urlCopied ? <ClipBoardChecked /> : <ClipBoard />}
                            </IconButton>
                        </div>
                        <div>
                            <Button onClick={handleReset}>Create Message</Button>
                        </div>
                    </div>
                )}
                <Description />
            </>
        }
        <Loader loading={loading} />
        {openSnackbar &&
            <SnackBar message={snackbarMessage} severity={snackbarSeverity} handleClose={handleSnackbarClose} />}
    </Fragment>;
};

export default Generate;