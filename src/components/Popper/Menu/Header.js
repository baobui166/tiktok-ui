import className from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cs = className.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cs('header')}>
            <button className={cs('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <h4 className={cs('header-title')}>{title}</h4>
        </header>
    );
}

export default Header;
