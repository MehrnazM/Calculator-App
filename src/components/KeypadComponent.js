import React from "react"
import ButtonComponent from "./ButtonComponent"
import buttonsData from "./buttonsData"

function KeypadComponent(props){
    const buttons = buttonsData.map(item => {
        return(
            <React.Fragment key={item.name}>
                <ButtonComponent  name={item.name} value={item.value} variant={item.variant} onClick={props.onClick}/>
                {item.break && <br/>}
            </React.Fragment>
        )
    })
    return(
        <div className="keypad">
            {buttons}
        </div>
    )
}

export default KeypadComponent