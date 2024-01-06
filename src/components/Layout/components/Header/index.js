import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../AccountItem';
import Button from '../Button';
const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    return (
        <header className={cx('wrapper', 'h-[60px]', 'flex', 'justify-center')}>
            <div className="w-[1150px] h-full flex items-center justify-between">
                <div>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div className="w-[361px]" tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <p className="text-[#16182380] text-[14px] font-semibold px-[12px] py-[5px]">
                                    Accounts
                                </p>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div
                        className={cx(
                            'search',
                            'relative w-[361px] h-[46px] bg-[#1618230f] rounded-[92px] pl-[16px] flex items-center',
                        )}
                    >
                        <input
                            type="text"
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                            className="h-full text-[#000] text-[1.6rem] border-none bg-transparent outline-0 flex-1 caret-[#fe2c55]"
                        />
                        <button className={cx('clear', 'absolute right-[68px] bottom-1/2 translate-y-1/2')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx('loading', 'absolute right-[68px] bottom-1/2 translate-y-1/2')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>

                        <button
                            className={cx(
                                'search-btn',
                                'h-full relative w-[52px] hover:bg-[#16182308] active:bg-[#16182308]  rounded-tr-[92px] rounded-br-[92px] cursor-pointer text-[1.8rem]',
                            )}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className="actions">
                    <Button text medium>
                        Upload
                    </Button>
                    <Button className={`ml-[8px]`} medium primary>
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
