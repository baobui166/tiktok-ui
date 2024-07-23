import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cs = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cs('wrapper')}>
            <img
                src="https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg"
                alt="Hinh"
                className={cs('avatar')}
            />
            <div className={cs('info')}>
                <h4 className={cs('name')}>
                    <span>Nguyen van a</span>
                    <FontAwesomeIcon className={cs('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cs('username')}> buiii</span>
            </div>
        </div>
    );
}

export default AccountItem;
