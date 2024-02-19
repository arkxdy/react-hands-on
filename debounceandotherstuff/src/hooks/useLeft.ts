import { useState } from "react";

const useLeft = (left:string [], right:string[], selected:string[], moveLeft:boolean) => {
    const [res, setRes] = useState({})
    if(moveLeft){
        right={...right, ...selected}
        //left = left.filter((item) => selected.indexOf(item) === -1)
        setRes({left,right})
    }else{
        left = {...left,...selected}
        //right = right.filter((item) => selected.indexOf(item) === -1)
        setRes({left,right})
    }
    return res;
}
export default useLeft;