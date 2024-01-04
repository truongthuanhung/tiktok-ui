import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper', 'h-[60px]', 'flex', 'justify-center')}>
            <div className='w-[1150px] h-full bg-[#ccc]'></div>
        </header>
    );
}

export default Header;
