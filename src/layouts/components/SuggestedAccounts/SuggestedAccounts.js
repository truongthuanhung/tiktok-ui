import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
function SuggestedAccounts({ label }) {
    return (
        <div className="border-t border-solid border-[#e3e3e4]">
            <p className="text-[14px] p-[8px] font-semibold text-[#161823bf]">{label}</p>
            <AccountItem />
            <AccountItem />
            <p className="p-[8px] text-[14px] font-bold text-[#fe2c55] cursor-pointer">See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
