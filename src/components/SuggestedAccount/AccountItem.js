import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreivew from './AccountPreivew/AccountPreivew';

const cs = classNames.bind(styles);

function AccountItem() {
    function renderPreview(props) {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreivew />
                </PopperWrapper>
            </div>
        );
    }
    return (
        <Tippy interactive delay={[1000, 0]} offset={[-15, 0]} render={renderPreview} placement="bottom">
            <div className={cs('account-item')}>
                <img
                    className={cs('avatar')}
                    src="https://yt3.ggpht.com/yti/ANjgQV8-HsH1ohxnW_t18CzJBxfBvjvgngdrTUyph1Mr8KMGIg=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                />
                <div className={cs('item-info')}>
                    <span className={cs('nickname')}>
                        <strong>buichibao</strong>
                        <FontAwesomeIcon icon={faCheckCircle} className={cs('check')} />
                    </span>
                    <span className={cs('name')}>Bùi Chí Bảo</span>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
