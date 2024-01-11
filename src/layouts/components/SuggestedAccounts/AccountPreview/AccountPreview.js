import Button from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
function AccountPreview() {
    return (
        <div className="p-[20px] w-[320px]">
            <header className="flex justify-between">
                <img
                    src="https://vcdn1-giaitri.vnecdn.net/2016/03/09/top-1457498542.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=2i9KQ-qrQQyV0tigRQ9-Rg"
                    alt=""
                    className="block w-[44px] h-[44px] object-cover rounded-[50%] "
                />
                <Button primary className="py-[6px] px-[16px]">
                    Follow
                </Button>
            </header>
            <div className="mt-[12px] text-[#161823]">
                <div className="text-[18px] leading-[1] mt-0">
                    <strong>truongthuanhung</strong>
                    <FontAwesomeIcon icon={faCircleCheck} className="text-[#20d5ec] ml-[4px]" />
                </div>
                <p className="text-[14px] text-[#161823bf]">Trương Thuận Hưng</p>
                <p className="text-[16px] mt-[10px]">
                    <strong>8.2M </strong>
                    <span className="text-[#161823bf]">Followers</span>
                    <strong className="ml-[20px]">8.2M </strong>
                    <span className="text-[#161823bf]">Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
