# My Blog

This blog was created using a Next.js template and deployed to GitHub Pages using GitHub Actions.

## Why Did I Make This?

As I continue to learn more, I find it necessary to organize my knowledge. I've been using Obsidian to keep records, which is based on Markdown. However, Obsidian I'm using is currently a offline version and doesn't allow cross-platform viewing easily. So, I decided to put my notes online. This project also gave me an opportunity to use my newly acquired Next.js knowledge, which also uses Markdown. That's how I began creating this blog.

## How Did I Start?

My initial requirements were:
1. The ability to read .md files.
2. The chance to use my newly acquired React knowledge.
3. Although a dynamic server would be more convenient, I wanted to try deploying a static website. I decided to use GitHub Pages for my static site to become more familiar with GitHub.

I began researching and found that Next.js, a framework based on React.js, offers a more systematic way to build websites. When learning React, I felt that developing large websites could become increasingly difficult to manage. Next.js addresses this with its more structured approach, so I chose it for developing my blog.

## How Did I Build It?

- Since I was new to Next.js projects, I started with the official template and modified it to learn the proper way to write Next.js code.
- Next, I understood the purpose of each component, removed unnecessary elements, and added new ones like `navbar`.
- The original template included a component for converting Markdown to HTML, but the parsed tags were basic HTML tags. I wanted a better visual experience, so I used `Rehype Prism` to add specific syntax tokens to the output tags. Combined with `prism.css`, this made the code look nicer and easier to read.
- To output a static site, I avoided using client-side features and modified `next.config.js` to output in the desired mode.
- For deploying my blog on GitHub Pages, I wrote a CI/CD process using GitHub Actions. GitHub Actions supports Next.js and offers basic templates that require minimal changes. Now, my deployment process is simple—just git push after making changes and additions. I also check for errors during deployment.
- Using [Shadcn](https://ui.shadcn.com/), I created dropdown menus and buttons, which greatly improved development efficiency.
- On the gallery page, due to the static server's inability to render the `placeholder="blur"` feature of the Image tag, I employed [plaiceholder](https://plaiceholder.co/docs/usage) to write a function that pre-generates blurred images as a replacement. This tool is stored in the lib directory under the name getBase64.


## Future Improvements

- Explore MDX, which looks interesting. Although I don't need it now, I might switch to using MDX in the future.
- As the number of blog posts increases, add a search feature.

## Summary

- Gained knowledge and experience with **Next.js**, **TypeScript**, and **Tailwind.**
- Used **Git branch** for developing the syntax highlight feature and then merged it back into the main branch, which was particularly convenient.
- Hosting on a static server imposes some constraints, but it also provides an opportunity to gain a better understanding of how Next.js operates.


## Q&A
Q: Shadcn Dropdown menu doesn't close after click ?

A: Add `asChild` in `item` and `trigger`
```tsx
<DropdownMenuTrigger asChild>
          <HamburgerMenuIcon className="h-7 w-7" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/" id="test" className="text-xl hover:text-pink-600">
                Blog
              </Link>
            </DropdownMenuItem>
```
Q: How to generate viewport in Next.js :

A: In `layout.tsx`, add
```tsx
import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};
```