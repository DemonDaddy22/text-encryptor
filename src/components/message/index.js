import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useAsyncExec from "../../hooks/useAsyncExec";
import { isEmptyString } from "../../utils";
import Button from "../button";
import { HOMEPAGE_PATH, SEVERITY } from "../constants";
import { MESSAGE_API_URL } from "../constants";
import Error from "../error";
import Input from "../input";
import Loader from "../loader";
import SnackBar from "../snackbar";

import classes from "./styles.module.css";

const Message = (props) => {
  const { id } = useParams();
  const [url, setUrl] = useState(MESSAGE_API_URL);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [decryptMessage, setDecryptMessage] = useState("");
  const [inputSecretKey, setInputSecretKey] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState(SEVERITY.INFO);
  const [fetchResult, setFetchResult] = useState(false);

  const handleErrorInResponse = useCallback((result) => {
    setError({ message: result.error.message, status: result.status });
  }, []);

  const handleInputSecretKeyChange = useCallback(
    (value) => setInputSecretKey(value),
    []
  );

  const handleSnackbarClose = useCallback(() => setOpenSnackbar(false), []);

  const handleRedirectToHome = useCallback(
    () => props.history.replace(HOMEPAGE_PATH),
    []
  );

  const handleDecryption = useCallback(() => {
    const message = isEmptyString(inputSecretKey) ? "Missing Secret Key!" : "";
    const severity = isEmptyString(inputSecretKey) && SEVERITY.INFO;
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(!isEmptyString(message));
    setFetchResult(isEmptyString(message) ? true : false);
    useAsyncExec(() => {
      setFetchResult(false);
      handleInputSecretKeyChange("");
    });
  }, [inputSecretKey]);

  const fetchMessage = useCallback(() => {
    setLoading(true);
    fetch(url + "?secretKey=" + inputSecretKey)
      .then((response) => response.json())
      .then((result) => {
        if (!isEmptyString(result.error)) handleErrorInResponse(result);
        setDecryptMessage(result.data?.message || "");
      })
      .catch((error) => {
        setError({ message: error.message, status: "500" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, inputSecretKey]);

  useEffect(() => {
    //Check if id exists or not
    setLoading(true);
    fetch(url + id)
      .then((response) => response.json())
      .then((result) => {
        if (!isEmptyString(result.error)) handleErrorInResponse(result);
        setUrl(result.data ? url + id + "/decrypt" : url);
      })
      .catch((error) => {
        setError({ message: error.message, status: "500" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => fetchResult && fetchMessage(), [fetchResult, fetchMessage]);

  return (
    <Fragment>
      {!isEmptyString(error) ? (
        <Error
          error={error}
          buttonLabel={`Create Message`}
          onClick={handleRedirectToHome}
        />
      ) : (
        <Fragment>
          {isEmptyString(decryptMessage) ? (
            <div className={classes.container}>
              <Input
                inputVal={inputSecretKey}
                placeholderValue="Enter Secret Key"
                rows={1}
                handleInputChange={handleInputSecretKeyChange}
              />
              <div>
                <Button onClick={handleDecryption}>Decrypt</Button>
              </div>
            </div>
          ) : (
            <div className={classes.container}>
              <div className={classes.messageContent}>{decryptMessage}</div>
              <div>
                <Button onClick={handleRedirectToHome}>Create Message</Button>
              </div>
            </div>
          )}
          <Loader loading={loading} />
          {openSnackbar && (
            <SnackBar
              message={snackbarMessage}
              severity={snackbarSeverity}
              handleClose={handleSnackbarClose}
            />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Message;
