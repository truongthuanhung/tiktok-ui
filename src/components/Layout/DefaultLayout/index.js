import classNames from 'classnames/bind';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className='w-full flex items-center flex-col'>
            <Header />
            <div className="w-[1150px] flex">
                <Sidebar />
                <div className="flex-1">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
