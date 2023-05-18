// import React from 'react'
// import Header from './Components/Header/Header'
// import Container1 from './Components/Container/Container1'
// import { image } from './Components/Container/image'
// import Container2 from './Components/Container/Container2'
// import "./App.css"

// const App = () => {
//   return (
//     <div>
//      <> <Header/> </>
//      < div className='body1'>
//      <div>
//       <Container1  data={image}/>
//      </div >
//      <div className='body2'>
//      <Container2 data={image}/>
//      </div>
//      </div>
//      </div>

    
    
//   )
// }

// // const App = () => {
// //   const Image = [
// //     " https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg",
// //    " https://www.shutterstock.com/image-photo/3d-wallpaper-design-waterfall-sea-260nw-1380925703.jpg",
// //    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCfg6xzk4-yjPGH9Ck_4_2IY16fn32GS5MevhTqY&s",
// //    "https://images.unsplash.com/photo-1583004231608-3ce0c58f5867?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVzdCUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80 "
// //     // Add more image URLs as needed
// //   ];

// //   return (
   

// //     <div className="body">
// //       <div> <Header/></div>
// //       <Container2 Image={Image} />
// //     </div>
// //   );
// // }; 



// export default App

import React from 'react';
import CatalogViewer from './CatalogViewer/CatalogViewer';
import "./App.css"
// import CatalogViewer from './CatalogViewer';


const App = () => {
  const images = [
    " https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg",
   " https://www.shutterstock.com/image-photo/3d-wallpaper-design-waterfall-sea-260nw-1380925703.jpg",
   " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCfg6xzk4-yjPGH9Ck_4_2IY16fn32GS5MevhTqY&s",
   "https://images.unsplash.com/photo-1583004231608-3ce0c58f5867?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVzdCUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80 "

    // Add more image URLs as needed
  ];

  return (
    <div className="app">
      <CatalogViewer images={images} />
    </div>
  );
};

export default App;

