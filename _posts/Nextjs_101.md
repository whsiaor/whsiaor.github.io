---
title: "Next.js 101"
excerpt: "This is some note I made when I was starting to learn how to use Next.js, including how to set it up, basic usage, and how to build a website locally."
date: "2024-06-15"
---

Node.js installed required
## How to start

install next.js
```bash
npx create-next-app@latest
```

Run
```bash
npm run dev
```





### Font setting
For font selection in layout, it will automatically embed the font:
```jsx
//layout.jsx
import { Rubik } from "next/font/google";
```

### Folder Naming Convention: 
`_data`, `_post`, it is easy to find at top of folder?

### Sets the interval for fetching new data.
```jsx
const res = await fetch("http://localhost:4000/tickets", {
  next: {
    revalidate: 30
  }
});
```

### Dynamic Routing
To create a dynamic route, add a folder under the `app` directory named `[PARAM]` and create a `page` file within it for template.
![img](/posts/Nextjs_101/1.png)

### Static Parameters

- `generateStaticParams()` is an asynchronous function that is called by Next.js during the build process.

- This function fetches ticket data from `http://localhost:4000/tickets` and returns the `id` of each ticket as a routing parameter.
-  The returned array of objects is used by Next.js to generate static route pages. This means for each ticket `id`, Next.js generates a corresponding static page.

- The advantage of this is that these static pages can be generated at build time, improving the performance and scalability of the application. Users do not need to fetch the data from the server again when accessing these pages.

In summary, the `generateStaticParams()` function is a special function in Next.js used to generate static route parameters. It helps developers build high-performance Next.js applications by pre-generating pages during the production phase, eliminating the need to fetch data from the server again.

### Dynamic Parameters

```jsx
export const dynamicParams = true
```

Controls the behavior of dynamic route parameters.

**When `dynamicParams` is set to `true`:**
- If a user accesses a dynamic route parameter that was not generated in `generateStaticParams`, Next.js will attempt to generate that page dynamically.
- This means that even if some dynamic route parameters were not generated at build time, users can still access these pages, and Next.js will generate them dynamically at runtime.

**When `dynamicParams` is set to `false`:**
- If a user accesses a dynamic route parameter that was not generated in `generateStaticParams`, Next.js will return a 404 error page.
- This means that only the dynamic route parameters generated in `generateStaticParams` can be accessed, and other ungenerated parameters will return a 404 error.

Overall, `export const dynamicParams = true;` allows Next.js to dynamically generate ungenerated dynamic route pages at runtime, enhancing the application's flexibility and accessibility. However, over-reliance on dynamic generation may affect application performance, so a balance between performance and flexibility is necessary.

If set to `true`, you should also use the following:
```javascript
if(!res.ok){
  notFound();
}
```
The `notFound()` function needs `import { notFound } from "next/navigation";`.

### Custom 404 Page

Create a custom 404 page by creating a `not-found.jsx` file under the `app` directory and edit it. Use `notFound()` to call it. If not present, the built-in 404 page will be rendered. You can also create a custom 404 page under a specific route by placing it in the corresponding route folder.

### Loading

Create a `loading.jsx` page under the `app` directory. You can specifically designate a section to use by wrapping it with `Suspense`:
```javascript
<Suspense fallback={<Loading />}>
  <TicketList />
</Suspense>
```

### Build
edit setting in `next.config.js`
```jsx
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```
in terminal:
```bash
npm run build
```

After building, run the following:

```bash
npx serve ./dist # ./out if you choose default setting at beginning
```

## Q&A
### img doesn't need full path

- Wrong one: `public/posts/img.jpg`

- Correct: `posts/img.jpg`
