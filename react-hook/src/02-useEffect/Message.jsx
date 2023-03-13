import { useState, useEffect } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMouseCont = ({ x, y }) => {
      const coords = { x, y };
      setCoords(coords);
    };
    window.addEventListener("mousemove", onMouseCont);
    return () => {
      window.removeEventListener("mousemove", onMouseCont);
    };
  }, []);

  return (<> 
  
        <div>Usuario ya existe</div>  
        {JSON.stringify(coords)}</>)

};
export default Message;
