import { classnames } from "../helpers/utils";
import styles from '../styles/components/Character.module.css';

const Character = ({ character }: { character: CharacterResponse }) => {

    const { name, image, species, status } = character;

    return (
        <article className={styles.card}>
            <section className={classnames(styles[status], styles.imageBg)}>
                <img src={image} alt={name} className={styles.image} />
            </section>
            <section className={styles.cardBody}>
                <h3>{name}</h3>
                <small>{species} - {status}</small>
            </section>
        </article>
    )
}

export default Character;
