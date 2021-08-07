import { forwardRef } from "react";
import { classnames } from "../helpers/utils";
import styles from "../styles/components/Profile.module.css";
import Episode from "./Episode";

type Props = {
    profile: {
        name: string,
        image: string,
        characterLocation: React.ReactNode,
        characterOrigin: React.ReactNode,
        species: string;
        status: string;
        episodeParam: string;
    };
    onClose: () => void;
}

const Profile = forwardRef(({ onClose, profile }: Props, ref) => {
    const { name, image, characterLocation, characterOrigin, species, status, episodeParam } = profile;

    return (
        //@ts-ignore
        <div ref={ref} className={styles.profileContainer}>
            <button onClick={onClose} className={styles.closeBtn}>X</button>
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
                <Episode param={episodeParam} />
            </article>
        </div>
    )
});

export default Profile;
