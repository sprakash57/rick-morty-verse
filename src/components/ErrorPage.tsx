import styles from '../styles/components/ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <main className={styles.errorPage}>
            <h1>Something is not right!!</h1>
            <h4>Here is what you can check</h4>
            <ul>
                <li>You Internet connection</li>
                <li>Rick Morty API server</li>
            </ul>
        </main>
    )
}

export default ErrorPage
