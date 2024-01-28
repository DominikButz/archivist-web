'use client';
import * as React from "react"

const FeatureItem = ({title, text, children})=> {


    return (
       <div className="flex items-start mx-1"> 
            <div className="image">
            {children}  
            </div>
            <div className="flex-col w-3/4 mobileLandscape:w-5/6 ml-2">
                <div className="font-semibold text-sm mobileLandscape:text-xs md:text-md lg:text-lg">{title}</div>
                <div className="text-sm mobileLandscape:text-xs md:text-md lg:text-lg">{text}</div>
            </div>
       </div>
    )
}



export default FeatureItem