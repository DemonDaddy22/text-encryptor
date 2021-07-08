import classes from './styles.module.css';

const DarkModeIcon = props => {
    const { height, width, fill, stroke, strokeWidth, onClick } = props;

    return <div className={classes.darkMode} onClick={onClick}>
        <svg xmlns='http://www.w3.org/2000/svg' height={height} width={width} viewBox='0 0 24 24'>
            <path fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'
                d={`M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z`} />
        </svg>
    </div>;
};

export default DarkModeIcon;

DarkModeIcon.defaultProps = {
    height: '1.5rem',
    width: '1.5rem',
    fill: 'none',
    stroke: '#f7f7f7',
    strokeWidth: 1.5,
};
