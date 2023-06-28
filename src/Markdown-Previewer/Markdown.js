import React, { useEffect } from "react"

function Markdown(){
    useEffect(() => {
        document.title = 'Markdown';
      }, []);
    return(
        <div>
            <h1>Markdon previewer</h1>
        </div>
    )
}

export default Markdown