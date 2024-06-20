import path from "path";
import fs from "fs";
import Image from "next/image";
import { rgbDataURL } from '@/lib/tools'


export default function ImgCards() {
  const imgPath = path.join(process.cwd(), "public", "gallery");
  const filenames = fs.readdirSync(imgPath);
  const imgFiles = filenames.filter((file) => file.endsWith(".jpg"));

  return (
    <div className="columns-1 sm:columns-3 lg:columns-4 px-10 md:px-20 pt-5 ">
      {/* <div className="flex flex-wrap justify-center mt-10 gap-5 "> */}
      <h2 className="text-right border-b-2 w-100 mb-7 text-5xl md:text-5xl font-thin tracking-tight leading-tight">
        Showcasing
      </h2>
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
