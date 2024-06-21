import Image from "next/image";

interface ProjectCardProps {
  alt: string;
  src: string;
  title: string;
  desc: string;
}

export default function ProjectCard({
  alt,
  src,
  title,
  desc,
}: ProjectCardProps) {
  return (
    <div className="relative  rounded-md overflow-hidden shadow-md h-48">
      <div className="relative grid grid-cols-[2fr_3fr] h-full">
        <div className="relative w-full h-full">
          <Image
            //   height={200}
            //   width={0}
            layout="fill" //intrinsic
            objectFit="cover"
            alt={alt}
            src={src}
            objectPosition="left"
            // className="rounded-md"
            unoptimized
            // placeholder="blur"
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <div className=" px-3 py-1">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <p className="text-md line-clamp-5">{desc}</p>
        </div>
      </div>
    </div>
  );
}
