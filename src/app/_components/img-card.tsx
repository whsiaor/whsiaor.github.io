import addBlurredImgUrls from '@/lib/getBase64'

import Image from "next/image";
import { rgbDataURL } from '@/lib/tools'
import {getImgNames} from '@/lib/api'

export default async function ImgCards() {
const imgFiles = getImgNames()
const imagesWithBlur = await addBlurredImgUrls(imgFiles.map(img => ({ src: img })));

  return (
    <section className="columns-1 sm:columns-3 lg:columns-4 px-2 md:px-20 pt-5 ">
      
      {imagesWithBlur.map((img) => (
        <div key={img.src} className="relative mb-5 w-full group">
          <Image
            src={`/gallery/${img.src}`}
            alt={img.src}
            layout="responsive"
            width={0}
            height={0}
            placeholder="blur"
            blurDataURL={img.base64}
            className="rounded-xl  group-hover:opacity-75 shadow group-hover:shadow-lg"
            unoptimized
          />
        </div>
      ))}
    </section>
  );
}
