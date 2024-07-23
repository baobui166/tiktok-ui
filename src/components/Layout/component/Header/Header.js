import className from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cs = className.bind(styles);
function Header() {
    return (
        <header className={cs('wrapper')}>
            <div className={cs('inner')}>
                <div className={cs('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <div className={cs('search')}>
                    <input placeholder="Searchs account and videos" />
                    <button className={cs('clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                    {/* <FontAwesomeIcon className={cs('loading')} icon={faSpinner}></FontAwesomeIcon> */}

                    <button className={cs('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
                <div className={cs('action')}></div>
            </div>
        </header>
    );
}

export default Header;
