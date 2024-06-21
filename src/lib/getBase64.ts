import { getPlaiceholder } from "plaiceholder";
import fs from "fs/promises";
import path from "path";

//images is in @/public/gallery/ 
type ImagesResults = { src: string }[];
type Photo = { src: string; base64: string };

async function getBase64(imgURL: string) {
  try {
    const file = await fs.readFile(imgURL);

    const { base64 } = await getPlaiceholder(file);

    return base64;
  } catch (err) {
    err;
  }
}

export default async function addBlurredImgUrls(
  images: ImagesResults
): Promise<Photo[]> {
  const base64Promises = images.map((img) => getBase64(path.join(process.cwd(), "public", "gallery", img.src)));
  const base64Results = await Promise.all(base64Promises);

  const photosWithBlur: Photo[] = images.map((img, index) => ({
    src: img.src,
    base64: base64Results[index] || "",
  }));

  return photosWithBlur;
}
