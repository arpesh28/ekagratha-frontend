import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
interface ImageModalProps {
    key: number;
    image: string;
}
const ImageModal = ({ key, image }: ImageModalProps) => {
    const [showFullScreen, setShowFullScreen] = useState(false);
    return (<React.Fragment key={key}>
        {!showFullScreen ? (
            <div className="cursor-pointer" onClick={() => setShowFullScreen(true)}>
                <img src={image} className='w-[100px] h-[100px]' alt="task1" />
            </div>
        ) : (
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%_-_50px)] h-[calc(100vh_-_50px)]  '>
                <Button className=" absolute top-2 right-2 p-3" onClick={() => setShowFullScreen(false)}>X</Button>
                <img src={image} className=' w-full h-full' alt="task1" />
            </div>
        )}
    </React.Fragment>
    )
}

export default ImageModal