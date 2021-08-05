const WarningIcon = props => {
  const {height, width, fillColor, strokeColor, strokeWidth} = props;

  return <svg xmlns = 'http://www.w3.org/2000/svg' height = {height} width =
              {width} viewBox = '0 0 24 24'><
             path fill = {fillColor} stroke = {strokeColor} strokeWidth = {
             strokeWidth} strokeLinecap = 'round' strokeLinejoin = 'round'
  d = {`M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z`} />
    </svg >
      ;
};

export default WarningIcon;

WarningIcon.defaultProps = {
  height : '1.5rem',
  width : '1.5rem',
  fillColor : 'none',
  strokeColor : '#fff',
  strokeWidth : 1.5,
};