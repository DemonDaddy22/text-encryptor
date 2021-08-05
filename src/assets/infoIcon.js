const InfoIcon = (props) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default InfoIcon;

InfoIcon.defaultProps = {
  height: "1.5rem",
  width: "1.5rem",
  fillColor: "none",
  strokeColor: "#fff",
  strokeWidth: 1.5,
};
