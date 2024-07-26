import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cs = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={cs('wrapper', className)}>{children}</div>;
}

Wrapper.protoTypes = {
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string,
};

export default Wrapper;
