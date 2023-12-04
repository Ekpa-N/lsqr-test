import Image from 'next/image';

interface ImageHolderProps {
    src: string;
    alt?: string;
    sizing?: { width: number; height: number };
    filling?: boolean;
}

const ImageHolder: React.FC<ImageHolderProps> = ({
    src,
    alt = 'image',
    sizing = { width: 0, height: 0 },
    filling = false,
}: ImageHolderProps) => {
    return (
        <>
            <Image
                src={src}
                alt={alt}
                // layout="responsive" // or specify your layout strategy
                width={sizing.width}
                height={sizing.height}
                fill={filling}
                // objectFit={filling ? 'cover' : 'contain'} // Adjust based on your needs
                priority
            />
        </>
    );
};

export default ImageHolder;
