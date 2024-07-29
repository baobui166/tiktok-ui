import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import PropTypes from 'prop-types';

import MenuItem from './MenuItem';
import Header from './Header';
import className from 'classnames/bind';
import styles from './Menu.module.scss';
import { useState } from 'react';

const cs = className.bind(styles);
const defaultFN = () => {};

function Menu({ children, items = [], onChange = defaultFN, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) setHistory((pre) => [...pre, item.children]);
                        else onChange(item);
                    }}
                />
            );
        });
    };

    function handleResteToFirstPage() {
        setHistory((pre) => pre.slice(0, 1));
    }

    function handleBack() {
        setHistory((pre) => pre.slice(0, pre.length - 1));
    }
    return (
        // using div or span for remove warming in console
        <div>
            <Tippy
                hideOnClick={hideOnClick}
                interactive
                delay={[0, 500]}
                offset={[16, 8]}
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cs('menu-list')} tabIndex={-1} {...attrs}>
                        <PopperWrapper className={cs('menu-popper')}>
                            {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                            <div className={cs('menu-body')}>{renderItem()}</div>
                        </PopperWrapper>
                    </div>
                )}
                onHidden={() => {
                    return setHistory(handleResteToFirstPage);
                }}
            >
                {children}
            </Tippy>
        </div>
    );
}

Menu.protoTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};

export default Menu;
