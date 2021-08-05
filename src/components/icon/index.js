const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    height="1.5rem"
    width="1.5rem"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {" "}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />{" "}
  </svg>
);

const ErrorIcon = () => (
  <svg
    xmlns="http:/ / www.w3.org / 2000 /
            svg "
    className="h -
        6 w - 6 "
    height="1.5rem"
    width="1.5rem"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    {" "}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />{" "}
  </svg>
);

const WarningIcon = () => (
  <svg
    xmlns="http:/ / www.w3.org /
            2000 / svg "
    className="h -
        6 w - 6 "
    height="1.5rem"
    width="1.5rem"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {" "}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d={`M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z`}
    />
  </svg>
);
const SuccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-checkbox"
    height="1.5rem"
    width="1.5rem"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#fff"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="9 11 12 14 20 6" />
    <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
  </svg>
);

const CloseIcon = (props) => (
  <svg
    xmlns="http:/ / www.w3.org /
            2000 / svg "
    className="h -
        6 w - 6 "
    height="1.5rem"
    width="1.5rem"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={props.handleClose}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export { InfoIcon, ErrorIcon, WarningIcon, SuccessIcon, CloseIcon };
