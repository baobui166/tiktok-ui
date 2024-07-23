import className from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cs = className.bind(styles);

function Button({
    to,
    href,
    text = false,
    rounded = false,
    disable = false,
    onClick,
    leftIcon,
    rightIcon,
    children,
    primary = false,
    small = false,
    medium = false,
    large = false,
    outline = false,
    clasname,
    ...passProps
}) {
    let Comp = 'button';
    const props = { onClick, ...passProps };

    // xóa các function hoặc event khi có prop disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.onStarWith('on') && typeof props[key] === 'function') delete props[key];
        });
    }

    // gắn lại kiểu cho button
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // thêm các className vào 1 biến
    const classes = cs('wrapper', {
        primary,
        outline,
        small,
        medium,
        large,
        text,
        disable,
        rounded,
        [clasname]: clasname,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cs('icon')}>{leftIcon}</span>}
            <span className={cs('title')}>{children}</span>
            {rightIcon && <span className={cs('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
