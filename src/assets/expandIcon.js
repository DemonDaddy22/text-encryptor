const ExpandIcon = (props) => {
  const { height, width, fill, strokeColor, strokeWidth, style } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      height={height}
      width={width}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};

export default ExpandIcon;

ExpandIcon.defaultProps = {
  height: "1rem",
  width: "1rem",
  fill: "none",
  strokeColor: "#666",
  strokeWidth: 1.5,
};
