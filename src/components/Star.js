import { FaStar } from "react-icons/fa";

function Star(props){
    const click = () => {
        props.clickStar(props.num);
    }
    return(
        <FaStar color={props.color} onClick={click}/>
    );
}

export default Star;