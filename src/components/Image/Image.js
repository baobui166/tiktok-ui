import { forwardRef, useState } from 'react';
import images from '~/assets/images';

import className from 'classnames/bind';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, classNames, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const cs = className.bind(styles);

    const handleError = () => {
        setFallback(images.noImage);
    };
    return (
        <img
            {...props}
            className={cs(styles.wrapper, classNames)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            onError={handleError}
        />
    );
});

export default Image;
