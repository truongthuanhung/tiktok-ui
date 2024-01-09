import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../AccountItem';
import { useState, useRef, useEffect } from 'react';
import { useDebounce } from '~/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import * as searchServices from '~/apiServices/searchServices';
const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);

            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (searchValue.startsWith(' ')) {
            return;
        }
        setSearchValue(searchValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <Tippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className="w-[361px]" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <p className="text-[#16182380] text-[14px] font-semibold px-[12px] py-[5px]">Accounts</p>
                            {searchResult?.map((result) => (
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
                        onChange={handleChange}
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
                        onMouseDown={handleSubmit}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
