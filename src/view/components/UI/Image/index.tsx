import React from 'react';
import classNames from 'classnames';
import { ImageWidthType } from './ImageWidthType.ts';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

interface IImageProps {
    src: string;
    alt: string;
    widthType: ImageWidthType;
}
export const Image: React.FC<IImageProps> = (props) => {
    return <img className={cx(styles.image, styles[props.widthType])} src={props.src} alt={props.alt} />;
};
