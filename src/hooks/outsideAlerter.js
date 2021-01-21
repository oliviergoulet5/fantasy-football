import { useRef, useState, useEffect } from 'react';

export const useOutsideAlerter = (initialValue) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(initialValue);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisible(false);
        }
    }

    // componentDidMount and Unmount = useEffect
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {

        };
    }, [ref]); // effect runs everytime our ref changes


    return { visible, setVisible, ref };
}