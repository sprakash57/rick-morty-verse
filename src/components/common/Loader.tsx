import { classnames } from '../../helpers/utils';
import styles from '../../styles/components/common/Loader.module.css';

const Loader = ({ size = 60, className = "", label }: { size?: number, className?: string, label?: string }) => {
    return (
        <section className={classnames(styles.loadContainer, className)}>
            <div
                className={styles.loader}
                style={{ width: `${size}px`, height: `${size}px` }}
            />
            <span>{label}</span>
        </section>
    )
}

export default Loader;
