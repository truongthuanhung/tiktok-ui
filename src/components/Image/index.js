import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.noImage);
    };
    return <img ref={ref} className={className} src={fallback || src} alt={alt} {...props} onError={handleError} />;
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};
export default Image;
