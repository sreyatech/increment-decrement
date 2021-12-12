import {useState} from "react";
import "./style.css";

const UseState = () => {
    const initialValue = 10
  const [myNum, setMyNum] = useState(initialValue);

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={()=>setMyNum(myNum+1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          incre
        </div>
        <div className="button2" onClick={()=> (myNum > 0 ? setMyNum(myNum-1) : setMyNum(0))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          decre
        </div>
      </div>
    </>
  );
};

export default UseState;

// 1:56:04