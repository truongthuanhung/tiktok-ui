import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
function AccountItem() {
    return (
        <div className="flex p-[8px] cursor-pointer">
            <img
                src="https://vcdn1-giaitri.vnecdn.net/2016/03/09/top-1457498542.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=2i9KQ-qrQQyV0tigRQ9-Rg"
                alt=""
                className="block w-[32px] h-[32px] object-cover rounded-[50%]"
            />
            <div className="flex-1 ml-[12px]">
                <div className="text-[16px] text-[#161823] leading-[1] mt-0">
                    <strong>truongthuanhung</strong>
                    <FontAwesomeIcon icon={faCircleCheck} className="text-[#20d5ec] ml-[4px]" />
                </div>
                <p className="text-[12px] text-[#161823bf]">Trương Thuận Hưng</p>
            </div>
        </div>
    );
}

export default AccountItem;
