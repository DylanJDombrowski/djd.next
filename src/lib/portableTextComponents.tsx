// src/lib/portableTextComponents.tsx
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from './image'

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      
      return (
        <div className="my-8 rounded-lg overflow-hidden">
          <Image
            src={urlForImage(value).url()}
            alt={value.alt || ''}
            width={800}
            height={450}
            className="w-full h-auto"
          />
          {value.caption && (
            <div className="text-sm text-navy/70 mt-2">{value.caption}</div>
          )}
        </div>
      )
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <Link 
          href={value.href} 
          rel={rel}
          className="text-orange hover:underline"
        >
          {children}
        </Link>
      )
    },
  },
}