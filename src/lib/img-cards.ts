// import fs from "fs";
// import path from "path";

// export async function getStaticProps(){
//     const imgPath = path.join(process.cwd(), 'public','gallery')

//     const files = await fs.promises.readdir(imgPath)
//     const imgFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.png'))
    
//     return {
//         props: {
//             imgFiles
//         }
//     }
// }
