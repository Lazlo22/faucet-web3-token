import {useEffect, useRef} from "react";

export default function useInterval(callback: VoidFunction, delay: number) {
    const intervalRef = useRef<number>(0);
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        intervalRef.current = setInterval(savedCallback.current, delay);

        return () => clearInterval(intervalRef.current);
    }, [delay]);

    return intervalRef;
}
