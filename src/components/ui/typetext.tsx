import { useEffect } from 'react';
import Typed from 'typed.js';

export const TypedText = () => {
    useEffect(() => {
        const typed = new Typed('#typed-output', {
            strings: ["des Impôts 2024"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <span id="typed-output" className="text-white"></span>
    );
};

