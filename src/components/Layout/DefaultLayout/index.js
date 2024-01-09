import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
function DefaultLayout({ children }) {
    return (
        <div className='w-full flex items-center flex-col'>
            <Header />
            <div className="w-[1150px] flex px-[24px]">
                <Sidebar />
                <div className="flex-1">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
