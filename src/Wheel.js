import { useState, useEffect } from 'react';
import side1 from './assets/images/wheel/side-1.png';
import side2 from './assets/images/wheel/side-2.png';
import side3 from './assets/images/wheel/side-3.png';
import side4 from './assets/images/wheel/side-4.png';
import marker from './assets/images/wheel/marker.png';
const Wheel = ({ spin, position }) => {
    const [isSpinning, setIsSpinning] = useState(false);
    useEffect(() => {
        if (spin) {
            setIsSpinning(true);
            setTimeout(() => {
                setIsSpinning(false);
            }, 3000); // Simulate spinning duration for 1 second
        }
    }, [spin, position]);
    return (
        <div className={`wheel ${isSpinning ? 'spinning' : ''}`}>
            <div className={`segment-${position === 1 ? '1 active' : '1'}`}>
                <img src={side1} alt='wheel-side1' />
            </div>
            <div className={`segment-${position === 2 ? '2 active' : '2'}`}>
                <img src={side2} alt='wheel-side2' />
            </div>
            <div className={`segment-${position === 3 ? '3 active' : '3'}`}>
                <img src={side3} alt='wheel-side3' />
            </div>
            <div className={`segment-${position === 4 ? '4 active' : '4'}`}>
                <img src={side4} alt='wheel-side4' />
            </div>
        </div>
    )
}

export default Wheel