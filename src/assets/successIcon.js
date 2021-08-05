const SuccessIcon = (props) => {
  const { height, width, fillColor, strokeColor, strokeWidth } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    >
      <polyline points="9 11 12 14 20 6" />
      <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
    </svg>
  );
};

export default SuccessIcon;

SuccessIcon.defaultProps = {
  height: "1.5rem",
  width: "1.5rem",
  fillColor: "none",
  strokeColor: "#fff",
  strokeWidth: 1.5,
};
