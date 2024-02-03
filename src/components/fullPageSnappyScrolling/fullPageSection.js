'use client';

import * as React from "react";
import { useTheme } from "next-themes";
import { ArrowDownCircleFill } from "react-bootstrap-icons";
import PropTypes from "prop-types"



const FullPageSection = ({ children, reference, showArrow,  scrollTo, scrollToRef }) => {

    const {theme, setTheme} = useTheme();
    const arrowColor = theme === 'light' ? 'darkblue' : 'whitesmoke'
    return (
      
       
        <div  ref={reference} className="h-full w-full flex relative snap-center">
       
            <div className="z-0">
            {children}
            </div>

            { showArrow && 
                <div className='absolute z-10 w-5 h-5 mr-2 right-0 bottom-2'>
                <button className="animate-bounce" onClick={ () => scrollTo(scrollToRef)} ><ArrowDownCircleFill color={arrowColor} size={24}/></button>
            </div>
            
            }

        </div>
       
    )
}

//         position: absolute;
//         bottom: 10%;
//         left: 0;
//         right: 0;
//         margin: 0 auto;
//         background-image: url("../images/chevron-down.png");
//         background-repeat: no-repeat;
//         background-size: contain;
//         width: 40px;
//         height: 40px;
//         z-index: 4;

// height: 100vh;
// width: 100%;
// display: flex;
// justify-content: center;
// align-items: center;
// position: relative;
// scroll-snap-align: center;

FullPageSection.propTypes = {
    scrollTo: PropTypes.func,
    // scrollToRef: PropTypes.object,
    showArrow: PropTypes.bool
}

export default FullPageSection 

