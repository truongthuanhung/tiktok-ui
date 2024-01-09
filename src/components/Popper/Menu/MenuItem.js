import { Link } from 'react-router-dom';
function MenuItem({ data, onClick }) {
    let Comp = 'button';
    const props = {
        onClick,
    };
    if (data.to) {
        props.to = data.to;
        Comp = Link;
    } else if (data.href) {
        props.href = data.href;
        Comp = 'a';
    }
    return (
        <Comp className={data.separated ? "text-[16px] font-bold w-full block border border-solid border-transparent text-left px-[16px] py-[11px] hover:bg-[#16182308] border-t border-t-[#1618231f]" : "text-[16px] font-bold w-full block border border-solid border-transparent text-left px-[16px] py-[11px] hover:bg-[#16182308]"} {...props}>
            <span className="mr-[8px] inline-block w-[24px] text-center">{data.icon}</span>
            {data.title}
        </Comp>
    );
}

export default MenuItem;
