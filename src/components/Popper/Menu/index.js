import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/Layout/components/AccountItem';
import MenuItem from './MenuItem';
function Menu({ children, items }) {
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className="w-[224px]" tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {items.map((item,index) => (
                            <MenuItem key={index} data={item}/>
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
