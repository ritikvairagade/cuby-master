import React from 'react'

import classnames from "classnames";

const InfoButtons = (props) => {
    return (
        <>
            <button className={classnames("flex items-center gap-3 border border-cuby-400 px-4 py-2 rounded-lg",{
                  "text-white bg-cuby-400": props.isActive,
            })}>{props.children}</button>
        </>
    )
}

export default InfoButtons
