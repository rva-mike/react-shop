import {useState} from "react";

export default function Product(props) {
    const [count, setCount] = useState(0);
    const {details} = props;

    function handleIncrementClick(){
        setCount(count + 1);
    }
    function handledecrementClick(){
        if(count > 0){
            setCount(count - 1);
        }
    }

    return <div className="product">
        <img src={details.image} width="50" alt="" />
        <div className="product-info">
            <h2>{details.name}</h2>
            <p>{details.description}</p>
        </div>
        <div className="product-buttons">
            <button disabled={count === 0} onClick={handledecrementClick} className="product-sub">-</button>
            <h3 className="product-count">{count}</h3>
            <button className="product-add" onClick={handleIncrementClick}>+</button>
        </div>
    </div>
}