import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { Button } from '../../components/UI/Button';
import { ButtonType } from '../../components/UI/Button/ButtonType.ts';
import { Logo } from '../../../assets/icons/Logo';
import { MascotLaugh } from '../../../assets/icons/MascotLaugh';

const cx = classNames.bind(styles);

export const Landing: React.FC = () => {
    return (
        <div className={cx(styles.landing)}>
            <div className={cx('flex', 'flex-col', 'items-center', 'gap-y-24')}>
                <Logo />
                <MascotLaugh />
                <div className={cx('flex', 'flex-col', 'gap-y-2.5', 'w-full')}>
                    <Button name={'Зарегистрироваться'} type={ButtonType.LIGHT_PURPLE} />
                    <Button name={'Войти'} type={ButtonType.LIGHT_PURPLE} />
                </div>
            </div>
        </div>
    );
};
