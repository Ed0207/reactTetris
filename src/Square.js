function SquareSVG(props){
    let x = props.x, y = props.y, h = props.h, w = props.w;
        return(
        <div>
            <svg id="inputBox" width={w} height={h} xmlns="http://www.w3.org/2000/svg"><rect fill="gray" x={x} y={y} width="100" height="100" /></svg>
        </div>);
}

export default SquareSVG;