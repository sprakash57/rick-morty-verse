import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "../../styles/components/common/Modal.module.css";

const Modal = ({ children, isOpen }: { children: React.ReactNode, isOpen: boolean }) => {
    const [attach, setAttach] = useState(false);

    useEffect(() => {
        setAttach(true);
        return () => setAttach(false);
    }, []);

    if (!isOpen || !attach) return null;

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <div>{children}</div>
            </div>
        </div>,
        document.querySelector("#modal-root")!
    );
};

export default Modal;
