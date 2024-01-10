import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
function AccountItem({ data }) {
    return (
        <Link
            to={`/@${data.nickname}`}
            className="flex items-center px-[16px] py-[6px] cursor-pointer hover:bg-[#16182308]"
        >
            <Image className="block w-[40px] h-[40px] rounded-[50%] object-cover" src={data.avatar} alt={data.avatar} />
            <div className="flex-1 ml-[12px]">
                <p className="text-[16px] font-semibold">
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon icon={faCircleCheck} className="ml-[6px] text-[12px] text-[#20D5EC]" />
                    )}
                </p>
                <span className="text-[14px] text-[#16182380]">{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
