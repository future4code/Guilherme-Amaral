import { useState, useEffect } from 'react';

export const useDate = () => {
    const locale = 'pt';
    const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update
  
    useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);
  
    const day = today.getDay() + 1
    // const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric' });
  
    return {
      day,
      time
    };
  };

  export default useDate