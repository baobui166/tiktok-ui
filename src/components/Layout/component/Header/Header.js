import className from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';

import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import AccountItem from '~/components/AccountItem';

import Button from '~/components/Button/Button';

const cs = className.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 1000);
    });
    return (
        <header className={cs('wrapper')}>
            <div className={cs('inner')}>
                <div className={cs('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cs('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cs('search-title')}>Account </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>
                <div className={cs('action')}>
                    <Button text>Upload</Button>
                    <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                        Login
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
