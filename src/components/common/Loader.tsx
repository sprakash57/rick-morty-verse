import { classnames } from '../../helpers/utils';
import styles from '../../styles/components/common/Loader.module.css';

type Props = {
    size?: number;
    className?: string;
    label?: string;
    labelClassName?: string;
}

const Loader = ({ size = 40, className = "", label, labelClassName = "" }: Props) => {
    return (
        <section className={classnames(styles.loadContainer, className)}>
            <div
                className={styles.loader}
                style={{ width: `${size}px`, height: `${size}px` }}
            />
            <span className={labelClassName}>{label}</span>
        </section>
    )
}

export default Loader;
