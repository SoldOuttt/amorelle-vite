import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { Image } from '../../components/UI/Image';
import { ImageWidthType } from '../../components/UI/Image/ImageWidthType.ts';
import { Button } from '../../components/UI/Button';
import { ButtonType } from '../../components/UI/Button/ButtonType.ts';

const cx = classNames.bind(styles);

export const Landing: React.FC = () => {
    return (
        <div className={cx(styles.landing)}>
            <div className={cx('flex', 'flex-col', 'items-center', 'h-full', 'justify-between')}>
                <Image alt={'logo'} src={'src/assets/logo.svg'} widthType={ImageWidthType.MAX} />
                <Image alt={'mascot-laugh'} src={'src/assets/mascot-laugh.svg'} widthType={ImageWidthType.MAX} />
                <div className={cx('flex', 'flex-col', 'gap-y-2.5', 'w-full')}>
                    <Button name={'Зарегистрироваться'} type={ButtonType.LIGHT_PURPLE} />
                    <Button name={'Войти'} type={ButtonType.LIGHT_PURPLE} />
                </div>
            </div>
        </div>
    );
};
