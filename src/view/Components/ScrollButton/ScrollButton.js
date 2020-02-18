import React, {useRef, useEffect} from 'react';
import {Button} from 'semantic-ui-react';
import './style.scss';


const Header = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => scrollFunction(), true);
    });

    const scrollFunction = () => {
        if (scrollRef.current) {
            scrollRef.current.children[0].style.visibility =
                scrollRef.current.closest("body").scrollTop > (window.innerHeight / 2) ? "visible" : "hidden"
        }
    };

    const scrollToTop = () => scrollRef.current.closest("body").scrollTop = scrollRef.current && 0;
    return (
        <div
            id="scroll"
            ref={scrollRef}

        >
            <Button
                icon='arrow up'
                size={'medium'}
                onClick={() => scrollToTop()}
                className="scroll-button"
            />
        </div>
    )
};
export default Header;
