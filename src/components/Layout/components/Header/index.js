import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper', 'h-[60px]', 'flex', 'justify-center')}>
            <div className="w-[1150px] h-full flex items-center justify-between">
                <div>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <div className={cx('search', 'relative w-[361px] h-[46px] bg-[#1618230f] rounded-[92px] pl-[16px] flex items-center')}>
                    <input type="text" placeholder="Search accounts and videos" spellCheck={false} 
                        className='h-full text-[#000] text-[1.6rem] border-none bg-transparent outline-0 flex-1 caret-[#fe2c55]'/>
                    <button className={cx('clear', 'absolute right-[68px] bottom-1/2 translate-y-1/2')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button className={cx('loading', 'absolute right-[68px] bottom-1/2 translate-y-1/2')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <button className={cx('search-btn', 'h-full relative w-[52px] hover:bg-[#16182308] rounded-tr-[92px] rounded-br-[92px] cursor-pointer text-[1.8rem]')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className="actions">

                </div>
            </div>
        </header>
    );
}

export default Header;
