'use client';
import * as React from "react"

const FeatureItem = ({title, text, children})=> {


    return (
       <div className="flex items-start"> 
            <div className="image">
            {children}  
            </div>
            <div className="flex-col w-3/4 ml-2">
                <div className="text-white font-semibold text-sm md:text-lg">{title}</div>
                <div className="text-white text-sm md:text-lg">{text}</div>
            </div>
       </div>
    )
}



export default FeatureItem