import Image from 'next/image'
import Link from 'next/link'

export interface ImageListProps {
  images: {
    alt: string
    imageUrl: string
  }[]
}

export default function ImageList({
  images
}: ImageListProps) {
  return (images && images.length > 0 && (
    <div className="mx-auto max-w-7xl">
      <div
        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        {images.map((image, idx) => (
          <div key={idx}>
            <Link href={image.imageUrl} className="block aspect-[3/2] w-full rounded-none">
              <Image
                src={image.imageUrl}
                width={500}
                height={500}
                alt={image.alt}
                className="h-full w-full rounded-none object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  ))
}
