import Button from '~/components/Layout/components/Button';
function MenuItem({ data }) {
    return (
        <button className="text-[16px] font-bold w-full border border-solid border-transparent text-left px-[16px] py-[11px] hover:bg-[#16182308]">
            <span className="mr-[8px] inline-block w-[24px] text-center">{data.icon}</span>
            {data.title}
        </button>
    );
}

export default MenuItem;
