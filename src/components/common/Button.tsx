import { classnames } from '../../helpers/utils';
import styles from '../../styles/components/common/Button.module.css';

type Props = {
    label: string;
    clickCb: () => void;
    className?: string;
}

const Button = ({ label, clickCb, className, ...rest }: Props) => {
    return (
        <button
            className={classnames(styles.button, className)}
            onClick={clickCb}
            {...rest}
        >
            {label}
        </button>
    )
}

export default Button;
