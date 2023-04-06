
import Image from "next/image"

type Props = {
    src: string, 
    alt?: string, 
    priority?: boolean //true, 
    uop?: boolean //false
}
export default function ImageHolder({src, alt="image", priority=true, uop=false}:Props) {
    if(uop) {
        return (
            <>
            <Image
            unoptimized
            src={`data:image/jpeg;base64,${src}`}
            alt={alt}
            // layout="fill"
            fill
            priority={priority}
            id="img"
            >            
            </Image>
            </>
        )
    } 
    
    return (
        <>
        <Image
        src={src}
        alt={alt}
        // layout="fill"
        fill
        priority={priority}
        id="img"
        >            
        </Image>
        </>
    )
}