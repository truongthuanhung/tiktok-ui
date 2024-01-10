import PropTypes from 'prop-types';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({ title, onBack }) {
    return (
        <header className="h-[50px] relative mt-[-8px] flex-shrink-0">
            <button className="w-[50px] h-full cursor-pointer" onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <p className="font-semibold absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">{title}</p>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};
export default Header;
