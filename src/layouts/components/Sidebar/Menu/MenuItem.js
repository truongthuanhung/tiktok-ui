import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => {
                return isActive
                    ? cx(
                          'menu-item',
                          'text-[#fe2c55] flex items-center text-[18px] font-bold hover:bg-[#16182308] rounded-[4px] p-[8px]',
                      )
                    : cx(
                          'menu-item',
                          'flex items-center text-[18px] font-bold hover:bg-[#16182308] rounded-[4px] p-[8px]',
                      );
            }}
            end={to === '/'}
        >
            {({ isActive }) => {
                return isActive ? (
                    <>
                        <span className="flex">{activeIcon}</span>
                        <span className="ml-[10px]">{title}</span>
                    </>
                ) : (
                    <>
                        <span className="flex">{icon}</span>
                        <span className="ml-[10px]">{title}</span>
                    </>
                );
            }}
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
export default MenuItem;
