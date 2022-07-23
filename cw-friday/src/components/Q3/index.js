import React ,{useState,useCallback,useMemo, useEffect} from 'react'

function CalcRect () {
   
    const [width,setWidth]=useState(0)
    const [height,setHeight]=useState(0)
    useEffect(()=>{
        setWidth(2)
        setHeight(2)
    },[])
    const perimeter = useCallback(()=>2*(width+height),[width,height])
    const area=useMemo(()=>width*height,[width,height])
  return (
    <div>
      <p style={{fontSize:'2rem'}}>area: {area}</p>
      <p style={{fontSize:'2rem'}}>perimeter:{perimeter()}</p>
    </div>
  )
}


export default CalcRect
