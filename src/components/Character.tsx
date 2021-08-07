import { classnames } from "../helpers/utils";
import styles from '../styles/components/Character.module.css';
import Button from "./common/Button";
import Location from "./Location";

const Character = ({ character }: { character: CharacterResponse }) => {

    const { name, image, species, status, location, origin } = character;
    const characterOrigin = origin.url ? <Location name={origin.name} url={origin.url} /> : <small>unknown</small>;
    const characterLocation = location.url ? <Location name={location.name} url={location.url} /> : <small>unknown</small>;

    const openModal = () => { }

    return (
        <article className={styles.card}>
            <section className={classnames(styles[status], styles.imageBg)}>
                <img src={image} alt={name} className={styles.image} />
            </section>
            <section className={styles.cardBody}>
                <h3>{name}</h3>
                <small>{species} - {status}</small>
                <p>Origin</p>
                {characterOrigin}
                <p>Last seen at</p>
                {characterLocation}
            </section>
            <section className={styles.fullProfile}>
                <Button label="Full Profile" clickCb={openModal} className={styles[status]} />
            </section>
        </article>
    )
}

export default Character;
