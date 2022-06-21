import React from 'react'
import classnames from "classnames";

const MenuCategory = (props) => {
    return (
        <>
          <div className={classnames({"text-cuby-400 py-2 px-1 bg-cuby-50 border-r-4 border-cuby-400 ": props.isActive})}
          
          
          >
            <h3 id={props.name} onClick={props.onClickHandler}>{props.name} ({props.items.length})</h3>  
          </div>  
        </>
    )
}

export default MenuCategory
