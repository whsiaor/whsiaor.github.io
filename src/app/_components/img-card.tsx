import path from "path";
import fs from "fs";
import Image from "next/image";
import { rgbDataURL } from '@/lib/tools'


export default function ImgCards() {
  const imgPath = path.join(process.cwd(), "public", "gallery");
  const filenames = fs.readdirSync(imgPath);
  const imgFiles = filenames.filter((file) => file.endsWith(".jpg"));

  return (
    <div className="columns-1 sm:columns-3 lg:columns-4 px-2 md:px-20 md:px-20 pt-5 ">
      {/* <div className="flex flex-wrap justify-center mt-10 gap-5 "> */}
      
      {imgFiles.map((img) => (
        <div key={img} className="relative mb-5 w-full group">
          <Image
            src={`/gallery/${img}`}
            key={img}
            alt={img}
            layout="responsive"
            width={0}
            height={0}
            placeholder="blur"
            blurDataURL={rgbDataURL(123, 123, 123)}
            className="rounded-xl border group-hover:opacity-75"
          />
        </div>
      ))}
    </div>
  );
}
