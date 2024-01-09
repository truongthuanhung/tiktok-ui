import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../AccountItem';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data.data);
                setSearchResult(data.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.error('There was a problem with the fetch operation:', error);
            });
    }, [searchValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <Tippy
            visible={showResult && searchResult.length > 0}
            interactive
            render={(attrs) => (
                <div className="w-[361px]" tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <p className="text-[#16182380] text-[14px] font-semibold px-[12px] py-[5px]">Accounts</p>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div
                className={cx(
                    'search',
                    'relative w-[361px] h-[46px] bg-[#1618230f] rounded-[92px] pl-[16px] flex items-center',
                )}
            >
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    ref={inputRef}
                    onFocus={() => setShowResult(true)}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    className="h-full text-[#000] text-[1.6rem] border-none bg-transparent outline-0 flex-1 caret-[#fe2c55]"
                />
                {!!searchResult && !loading && (
                    <button
                        onClick={() => {
                            setSearchValue('');
                            setSearchResult([]);
                            inputRef.current.focus();
                        }}
                        className={cx('clear')}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && (
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}

                <button
                    className={cx(
                        'search-btn',
                        'flex items-center justify-center h-full relative w-[52px] hover:bg-[#16182308] active:bg-[#16182308]  rounded-tr-[92px] rounded-br-[92px] cursor-pointer text-[1.8rem]',
                    )}
                >
                    <SearchIcon />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
