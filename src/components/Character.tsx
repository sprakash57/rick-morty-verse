import { useState } from "react";
import { useModalRef } from "../helpers/hooks";
import { classnames } from "../helpers/utils";
import styles from '../styles/components/Character.module.css';
import Button from "./common/Button";
import Modal from "./common/Modal";
import Location from "./Location";
import Profile from "./Profile";

const Character = ({ character }: { character: CharacterResponse }) => {
    const [isOpen, setIsOpen] = useState(false);
    const profileRef = useModalRef(() => setIsOpen(false));

    const { name, image, species, status, location, origin } = character;
    const characterOrigin = origin.url ? <Location name={origin.name} url={origin.url} /> : <small>unknown</small>;
    const characterLocation = location.url ? <Location name={location.name} url={location.url} /> : <small>unknown</small>;

    const toggleModal = () => {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <article className={styles.card}>
            <section className={classnames(status, styles.imageBg)}>
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
                <Button label="Full Profile" clickCb={toggleModal} className={status} />
            </section>
            <Modal isOpen={isOpen}>
                <Profile
                    profile={{ name, image, species, status, characterOrigin, characterLocation }}
                    ref={profileRef}
                    onClose={toggleModal}
                />
            </Modal>
        </article>
    )
}

export default Character;
