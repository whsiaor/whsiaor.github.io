import { CMS_NAME } from "@/lib/constants";

export function Intro({title, subtitle}:{title:string, subtitle:string}) {
  return (
    <section className="flex-col md:flex-row flex items-baseline px-20 md:justify-between mt-10 mb-10">
      <h1 className="text-8xl font-bold tracking-tighter leading-tight md:pr-8 italic">
        {title}
      </h1>
      <h4 className=" text-lg mt-3 px-3 md:pl-8 ">
        {subtitle}
      </h4>
    </section>
  );
}
