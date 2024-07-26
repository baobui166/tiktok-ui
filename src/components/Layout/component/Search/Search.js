import className from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';

import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useRef, useState } from 'react';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as searchServer from '~/apiServer/searchServer';

const cs = className.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debounced = useDebounce(searchValue, 500);

    function handleClear() {
        inputRef.current.focus();
        setSearchValue('');
        setSearchResult([]);
    }

    function handleHideResult() {
        setShowResult(false);
    }

    function handleChange(e) {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    }

    useEffect(() => {
        if (debounced === undefined || debounced === null || !debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetch = async () => {
            setLoading(true);
            const result = await searchServer.search(debounced);
            setSearchResult(result);
            setLoading(false);
        };

        fetch();
    }, [debounced]);

    return (
        <HeadLessTippy
            visible={showResult && searchResult.length > 0}
            interactive
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className={cs('search-result')} tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        <h4 className={cs('search-title')}>Account </h4>

                        {searchResult.map((item) => (
                            <AccountItem key={item.id} data={item} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cs('search')}>
                <input
                    placeholder="Searchs account and videos"
                    onChange={handleChange}
                    spellCheck={false}
                    value={searchValue}
                    ref={inputRef}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button className={cs('clear-btn')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cs('loading')} icon={faSpinner}></FontAwesomeIcon>}

                <button className={cs('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </HeadLessTippy>
    );
}

export default Search;
