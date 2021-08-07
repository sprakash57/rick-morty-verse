import React from 'react';
import { classnames } from '../../helpers/utils';
import styles from '../../styles/components/common/Button.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    clickCb: () => void;
    className?: string;
}

const Button = ({ label, clickCb, className, ...rest }: Props) => {
    return (
        <button
            {...rest}
            className={classnames(styles.button, className)}
            onClick={clickCb}
        >
            {label}
        </button>
    )
}

export default Button;
