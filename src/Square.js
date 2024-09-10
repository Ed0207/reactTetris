function SquareSVG(props){

    console.log(props)
    if(props.x != null && props.y != null)
        return(
        <div>
            <svg id="inputBox" width="120" height="120" xmlns="http://www.w3.org/2000/svg"><rect fill="gray" x={props.x} y={props.y} width="100" height="100" /></svg>
        </div>);
    else
        return(
        <div>
            <svg id="inputBox" width="120" height="120" xmlns="http://www.w3.org/2000/svg"><rect fill="gray" x="0" y="0" width="100" height="100" /></svg>
        </div>);
}

export default SquareSVG;