import className from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUpload,
    faMessage,
    faUser,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';

import Tippy from '@tippyjs/react';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';
import AccountItem from '~/components/AccountItem';

import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';

const cs = className.bind(styles);

const MENUS_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languege',
            data: [
                { code: 'en', title: 'English' },
                { code: 'vn', title: 'Tiếng Việt' },
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Fellback and help',
        to: '/feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    ...MENUS_ITEM,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 1000);
    });

    // handle logic
    function handleMenu(menuItem) {
        console.log(menuItem);
    }

    return (
        <header className={cs('wrapper')}>
            <div className={cs('inner')}>
                <div className={cs('logo')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/640px-TikTok_logo.svg.png"
                        alt="tiktok"
                        style={{ width: '118px', height: '42px', objectFit: 'contain    ' }}
                    />
                </div>
                <HeadLessTippy
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
                </HeadLessTippy>
                <div className={cs('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content={'Upload'}>
                                <button className={cs('action-btn')}>
                                    <FontAwesomeIcon icon={faUpload} />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content={'Message'}>
                                <button className={cs('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Login
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENUS_ITEM} onChange={handleMenu}>
                        {currentUser ? (
                            <img
                                src="https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/anh-dai-dien-tet-18.jpg"
                                className={cs('user-avatar')}
                                alt="hinh anh"
                            />
                        ) : (
                            <button className={cs('bnt-more')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
