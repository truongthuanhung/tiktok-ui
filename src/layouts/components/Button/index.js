import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    onClick,
    primary,
    children,
    className,
    outline,
    small,
    large,
    medium,
    text,
    disabled,
    rounded,
    leftIcon,
    rightIcon,
}) {
    let Comp = 'button';
    const props = {
        onClick,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('text-[16px] font-bold min-w-[100px] rounded-[4px] border border-solid', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        medium,
        text,
        disabled,
        rounded,
        leftIcon,
        rightIcon,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className="mr-[8px]">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="ml-[8px]">{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Button;
