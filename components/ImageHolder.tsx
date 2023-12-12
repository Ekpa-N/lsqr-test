import Image from 'next/image';

interface ImageHolderProps {
    src: string;
    alt?: string;
    sizing?: { width: number; height: number };
    filling?: boolean;
    className?: string
}

const ImageHolder: React.FC<ImageHolderProps> = ({
    src,
    alt = 'image',
    sizing = { width: 0, height: 0 },
    filling = false,
    className=""
}: ImageHolderProps) => {
    return (
        <>
            <Image
                src={src}
                alt={alt}
                width={sizing.width}
                height={sizing.height}
                fill={filling}
                className={className}
            />
        </>
    );
};

export default ImageHolder;
