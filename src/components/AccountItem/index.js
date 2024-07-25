import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image/Image';
import { Link } from 'react-router-dom';

const cs = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/${data.nickname}`} className={cs('wrapper')}>
            <Image src={data.avatar} alt="Hinh" classNames={cs('avatar')} />
            <div className={cs('info')}>
                <h4 className={cs('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cs('check')} icon={faCheckCircle}></FontAwesomeIcon>}
                </h4>
                <span className={cs('username')}> {data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
