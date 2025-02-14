import PropTypes from 'prop-types';
import Header from '~/components/Layout/component/Header/Header';
import Sidebar from '../component/Silebar/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cs = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cs('wrapper')}>
            <Header />
            <div className={cs('container')}>
                <Sidebar />
                <div className={cs('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
