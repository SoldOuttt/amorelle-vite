import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { ButtonType } from './ButtonType.ts';

const cx = classNames.bind(styles);

interface IButtonProps {
    name: string;
    type: ButtonType;
}

export const Button: React.FC<IButtonProps> = (props) => {
    return <button className={cx(styles.buttonLightPurple, styles[props.type])}>{props.name}</button>;
};
