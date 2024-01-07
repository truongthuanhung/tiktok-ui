import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../AccountItem';
import Button from '../Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon } from '~/components/Icons';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    const currentUser = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separated: true,
        },
    ];
    return (
        <header className={cx('wrapper', 'h-[60px]', 'flex', 'justify-center', 'w-full')}>
            <div className="w-[1150px] h-full flex items-center justify-between px-[24px]">
                <div>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <HeadlessTippy
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
                </HeadlessTippy>
                <div className="actions flex items-center">
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom" delay={[0, 200]}>
                                <button className="bg-transparent text-[22px] text-[#161823] px-[12px] py-[4px] cursor-pointer">
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text medium>
                                Upload
                            </Button>
                            <Button className={`ml-[8px]`} medium primary>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://vcdn1-giaitri.vnecdn.net/2016/03/09/top-1457498542.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=2i9KQ-qrQQyV0tigRQ9-Rg"
                                alt="Nguyen Van A"
                                className="w-[32px] h-[32px] object-cover rounded-[50%] ml-[12px] block cursor-pointer"
                            />
                        ) : (
                            <button className="text-[2rem] ml-[28px] bg-transparent p-[8px] cursor-pointer">
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
