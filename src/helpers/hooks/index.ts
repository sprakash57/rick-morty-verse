import React, { useEffect } from 'react';

export const useModalRef = (callback: () => void) => {
    const nodeRef = React.useRef<HTMLElement>();

    useEffect(() => {
        const handler = (e: Event) => {
            if (nodeRef?.current && !nodeRef.current.contains(e.target as HTMLElement)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    return nodeRef;
}