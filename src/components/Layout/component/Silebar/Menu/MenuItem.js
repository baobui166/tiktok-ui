import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cs = classNames.bind(styles);

function MenuItem({ title, icon, to, activeIcon }) {
    return (
        <NavLink className={(nav) => cs('menu-item', { active: nav.isActive })} to={to}>
            <span className={cs('icon')}>{icon}</span>
            <span className={cs('active-icon')}>{activeIcon}</span>
            <span className={cs('menu-title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node,
    to: PropTypes.string,
};

export default MenuItem;
