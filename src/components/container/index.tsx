import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

export function Container({children}: Props){
    return(
        <div className="max-w-screen-xl mx-auto px-3">
            {children}
        </div>
    )
}