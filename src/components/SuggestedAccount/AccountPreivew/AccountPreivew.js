import classNames from 'classnames/bind';
import styles from './AccountPreivew.module.scss';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cs = classNames.bind(styles);

function AccountPreivew() {
    return (
        <div className={cs('wrapper')}>
            <div className={cs('header')}>
                <img
                    src="https://yt3.ggpht.com/yti/ANjgQV8-HsH1ohxnW_t18CzJBxfBvjvgngdrTUyph1Mr8KMGIg=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                    className={cs('avatar')}
                />
                <div>
                    <Button primary>Follow</Button>
                </div>
            </div>

            <div className={cs('body')}>
                <span className={cs('nickname')}>
                    <strong>buichibao</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cs('check')} />
                </span>
                <span className={cs('name')}>Bùi Chí Bảo</span>
                <p className={cs('analytics')}>
                    <strong className={cs('value')}>9.3M </strong>
                    <span className={cs('label')}>Followers</span>
                    <strong className={cs('value')}>6M </strong>
                    <span className={cs('label')}>likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreivew;
