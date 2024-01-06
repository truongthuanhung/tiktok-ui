import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function AccountItem() {
    return (
        <div className="flex items-center px-[16px] py-[6px] cursor-pointer hover:bg-[#16182308]">
            <img
                className="block w-[40px] h-[40px] rounded-[50%] object-cover"
                src="https://i.pinimg.com/736x/59/46/ae/5946ae711b61a1937c65a892dccfc6f5.jpg"
                alt=""
            />
            <div className="flex-1 ml-[12px]">
                <p className="text-[16px] font-semibold">
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCircleCheck} className="ml-[6px] text-[12px] text-[#20D5EC]" />
                </p>
                <span className='text-[14px] text-[#16182380]'>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
