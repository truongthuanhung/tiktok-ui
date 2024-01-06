import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Wrapper({ children }) {
    return <div className={cx('wrapper', 'w-full bg-white rounded-[8px] min-h-[100px] pt-[8px]')}>{children}</div>;
}

export default Wrapper;
