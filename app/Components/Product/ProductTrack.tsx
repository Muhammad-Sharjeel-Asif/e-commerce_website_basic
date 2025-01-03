import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

interface ProductImageProps {
    image: string;
    name: string;
    slug: string | { current: string }
}

const ProductTrack = ({ image, name, slug }: ProductImageProps) => {
    const slugString = typeof slug === 'string' ? slug : slug.current;
    return (
        <div className="relative w-full h-48">
            <Link href={`/product/${slugString}`}>
                <Image
                    src={urlFor(image).url()}
                    alt={name}
                    className="object-cover"
                    fill
                />
            </Link>
        </div>
    );
};

export default ProductTrack;
