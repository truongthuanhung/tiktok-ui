import { useState, forwardRef } from 'react';
import images from '~/assets/images';

function Image({ src, alt, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.noImage);
    };
    return <img ref={ref} className={className} src={fallback || src} alt={alt} {...props} onError={handleError} />;
}

export default forwardRef(Image);
