import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cs = classNames.bind(styles);
function SuggestedAccount({ label }) {
    return (
        <div className={cs('wrapper')}>
            <p className={cs('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cs('see-more')}>See all</p>
        </div>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string,
};

export default SuggestedAccount;
