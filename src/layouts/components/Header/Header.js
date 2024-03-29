import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import Search from '../Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import config from '~/config';
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
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    const currentUser = false;
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
        <header
            className={cx(
                'wrapper',
                'h-[60px]',
                'flex',
                'justify-center',
                'w-full',
                'fixed',
                'top-0',
                'left-0',
                'bg-white z-10',
            )}
        >
            <div className="w-[1150px] h-full flex items-center justify-between px-[24px]">
                <Link to={config.routes.home} className="flex items-center justify-center">
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className="actions flex items-center">
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className="relative flex text-[22px] text-[#161823] bg-transparent px-[10px] py-[4px]">
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className="relative flex text-[22px] text-[#161823] bg-transparent px-[10px] py-[4px]">
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className="relative flex text-[22px] text-[#161823] bg-transparent px-[10px] py-[4px]">
                                    <InboxIcon />
                                    <span className="text-white absolute top-[-3px] right-0 px-[6px] h-[2rem] leading-[2rem] text-[14px] font-semibold rounded-[10px] bg-[#fe2c55]">
                                        12
                                    </span>
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
