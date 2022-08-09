import React from "react";

const Hello  = () => {
    // return(
    //     <div>
    //         <h1>HEllo Niiki</h1>
    //     </div>
    // )
    return React.createElement('div',
     {id:'hello', className:'hello' },
      React.createElement('h1', null, 'hello react component'))
}

export default Hello