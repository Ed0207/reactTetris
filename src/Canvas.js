import React, {useEffect, useRef} from 'react'

const Canvas = props =>{

    useEffect(() =>{
        console.log("use Effect")
    }, [])

    return <canvas></canvas>

}

export default Canvas