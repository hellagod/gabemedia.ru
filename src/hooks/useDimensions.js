import {useEffect, useRef, useState} from "react";

function useDimensions() {
    const ref = useRef(null);
    const [dimensions, setDimensions] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const updateDimensions = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const parentRect = ref.current.parentElement.getBoundingClientRect();

                setDimensions({
                    x: rect.left - parentRect.left,
                    y: rect.top - parentRect.top,
                    width: rect.width,
                    height: rect.height,
                });
            }
        };
        const resizeObserver = new ResizeObserver(updateDimensions);
        if (ref.current) {
            resizeObserver.observe(ref.current);
        }

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return [ref, dimensions];
}

export default useDimensions;
