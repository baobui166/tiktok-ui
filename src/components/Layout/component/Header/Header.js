import className from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import { useRef } from 'react';

import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image/Image';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

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
    const currentUser = true;
    const imageRef = useRef();

    // handle logic
    function handleMenu(menuItem) {
        console.log(menuItem);
    }

    return (
        <header className={cs('wrapper')}>
            <div className={cs('inner')}>
                <Link to={routesConfig.home}>
                    <div className={cs('logo')}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/640px-TikTok_logo.svg.png"
                            alt="tiktok"
                            style={{ width: '118px', height: '42px', objectFit: 'contain' }}
                        />
                    </div>
                </Link>

                <Search />

                <div className={cs('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content={'Upload'}>
                                <button className={cs('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content={'Message'}>
                                <button className={cs('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content={'Inbox'}>
                                <button className={cs('action-btn')}>
                                    <InboxIcon />
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
                            <Image
                                ref={imageRef}
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
