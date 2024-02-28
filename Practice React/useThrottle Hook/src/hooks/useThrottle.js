import { useRef } from "react";

const useThrottle = (value, delay) => {
    // Initial State --> Create a state to hold the throttled value using useState()
    const [throttledValue, setThrottledValue] = useState(value)

    // Track Last Execution Time --> useRef() to keep track of the last execution time the function was called.
    const lastExecutionTime = useRef(Date.now());

    // useEffect() for throttling
     useEffect(() => {
        // Set up Timer (using setTimeout) to handle the Logic
        const handler = setTimeout(() => {
            // Check the time elapsed since the last execution
            const now = Date.now();
            const timeElapsed = now - lastExecutionTime.current;
            // If the time elapsed is greater than the specified delay, update the Throttled Value and last execution time
            
            if (timeElapsed >= delay) {
                setThrottledValue(value)
                lastExecutionTime.current = now;
            }
               
        },delay - (Date.now() - lastExecutionTime.current));

        return () => {
            clearTimeout(handler);
        }
     },[delay, value])
     return throttledValue;
}

export default useThrottle;