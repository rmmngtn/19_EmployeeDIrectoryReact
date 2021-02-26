import React from "react";
// import Main from "./Main"; 
// import Header from "./Header"; 

import "../styles/Wrapper.css";

function Wrapper(props) {
return <main className="wrapper">{props.children}</main>;


}

export default Wrapper;



// function Wrapper (){
//   return (
//       <>
//       <Header /> 
//       <Main />
      
//       </>
//   );
// };


// export default Wrapper;