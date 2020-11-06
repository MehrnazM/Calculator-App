import React from "react"
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css';

function ButtonComponent(props){
    
    
    return(
    <Button className="buttonComponent col-md-2" 
            variant={props.variant} 
            name={props.name} 
            value={props.value}
            onClick={(e) => props.onClick(e.target)}
             >{props.name}
    </Button>
    )
}

export default ButtonComponent