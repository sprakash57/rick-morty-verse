import { Button } from './common';
import styles from '../styles/components/Navigation.module.css';

type Props = {
    page: number;
    info: Info;
    isPrevData: boolean;
    onNavigate: (page: number) => void;
}

const Navigation = ({ page, info, isPrevData, onNavigate }: Props) => {

    const handleClick = (type: string) => {
        if (type === "prev") onNavigate(Math.max(page - 1, 0));
        else if (type === "next" && !isPrevData && info.next) onNavigate(page + 1);
        else if (type === "first") onNavigate(1);
        else onNavigate(info.pages);
    }

    return (
        <nav className={styles.nav}>
            <header>
                <h1>RickMortyVerse</h1>
            </header>
            <section className={styles.btnContainer} aria-label="Page Navigation">
                <Button label="First" clickCb={() => handleClick("first")} disabled={!info.prev} tabIndex={0} />
                <div className={styles.prevNext}>
                    <Button
                        clickCb={() => handleClick("prev")}
                        label="<"
                        disabled={!info.prev}
                        tabIndex={0}
                        title="Previous Page"
                    />
                    <span>{page} / {info.pages}</span>
                    <Button
                        clickCb={() => handleClick("next")}
                        label=">"
                        disabled={!info.next}
                        tabIndex={0}
                        title="Next Page"
                    />
                </div>
                <Button label="Last" clickCb={() => handleClick("last")} disabled={!info.next} tabIndex={0} />
            </section>
        </nav>
    )
}

export default Navigation;
