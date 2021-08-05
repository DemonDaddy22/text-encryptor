const CloseIcon = (props) => {
  const { height, width, fillColor, strokeColor, strokeWidth } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 24 24"
    >
      <path
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default CloseIcon;

CloseIcon.defaultProps = {
  height: "1.5rem",
  width: "1.5rem",
  fillColor: "none",
  strokeColor: "#fff",
  strokeWidth: 1.5,
};
