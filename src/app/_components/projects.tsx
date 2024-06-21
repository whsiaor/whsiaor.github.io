import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section className="px-2 md:px-20 pt-5 mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
        <a href="https://github.com/whsiaor/SendMe">
          <ProjectCard
            alt="sendMe"
            src="/portfolio/sendMe.png"
            title="SendMe"
            desc="A web-based application designed for storing and sharing information files. Simply open the webpage and log in, and you'll have a space to store and access your information or file across different devices and operating systems."
          />
        </a>
        <a href="https://github.com/whsiaor/whsiaor.github.io">
          <ProjectCard
            alt="My Blog"
            src="/portfolio/blog.png"
            title="My Blog"
            desc="
This blog was created using a Next.js template and deployed to GitHub Pages using GitHub Actions."
          />
        </a>
        <a href="https://github.com/whsiaor/Seek_Spider">
          <ProjectCard
            alt="Seek_Spider"
            src="/portfolio/wordcloud.png"
            title="Seek_Spider"
            desc="
This program will gather data on Develop jobs associated with programming tools from Seek.com.au. Its purpose is to offer insights for individuals intrigued by programming, helping them discern the prevalent tools used by Australian companies.            "
          />
        </a>
        <a href="https://github.com/whsiaor/React_Blog">
          <ProjectCard
            alt="React Blog"
            src="/portfolio/reactBlog.png"
            title="React Blog"
            desc="
This is a blog created with React which allows you to add and delete posts, and fetch data from external sources.            "
          />
        </a>
      </div>
    </section>
  );
}
