import React from 'react'

export default function ListOfElements(props) {
    
    return (
        <div className="added_elements">
                    <i onClick={()=>{
                        props.onSelect(props.id)
                    }} className="far fa-times-circle"></i>
                    <li >{props.val}</li>
       </div>
    )
}
