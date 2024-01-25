'use client';
import * as React from "react"


const FullPageContainer = ({children}) => {
 
    return ( // class name fullPageContainer only exists as animation reference identifer .. see section animation provider
        <div className="fullPageContainer absolute overflow-y-auto overscroll-y-contain snap-y snap-mandatory h-screen w-screen no-scrollbar">
            {children}
        </div>
    )
}


export default FullPageContainer