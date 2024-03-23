import cn from 'classnames'
import Link from 'next/link'
import Image from "next/image"

export default function CoverImage({
  title,
  src,
  slug,
  height,
  width,
  coverImagePriority,
}) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200 rounded-xl': slug,
      })}
      width={width}
      height={height}
      priority={coverImagePriority ? coverImagePriority : false}
      blurDataURL={src}
      placeholder="blur"
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto"
      }} />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
