import { useState, useEffect } from "react";
import TypeDevice from "../type/TypeDevice";

export function TypeFontsDevice(): TypeDevice {
    const [device, setDevice] = useState<TypeDevice>('desktop');

    useEffect(() => 
    {
        // Define media queries for different device types
        const mobileQuery = window.matchMedia('(max-width: 767px)');
        const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
        const desktopQuery = window.matchMedia('(min-width: 1024px)');

        // Function to update the device type based on the current media query matches
        const updateDevice = () => 
        {
            if (mobileQuery.matches)
            {
               setDevice('mobile'); 
            }
            else if(tabletQuery.matches) 
            {
                setDevice('tablet');
            }
            else if(desktopQuery.matches)
            {
                setDevice('desktop');
            }
        };

        updateDevice();
        // Add event listeners to update the device type when the media query changes
        mobileQuery.addEventListener('change', updateDevice);
        tabletQuery.addEventListener('change', updateDevice);
        desktopQuery.addEventListener('change', updateDevice);

        // Cleanup event listeners on component unmount
        return () => 
        {
            mobileQuery.removeEventListener('change', updateDevice);
            tabletQuery.removeEventListener('change', updateDevice);
            desktopQuery.removeEventListener('change', updateDevice);
        };

    }, []);

    return device;
}

export default TypeFontsDevice;