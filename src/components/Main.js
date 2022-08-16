import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component from saga", data);
  // const product = {
  //   name: 'i Phone',
  //   category: 'mobile',
  //   price: 10000,
  //   color: 'red'
  // }
  useEffect(()=>{
    dispatch(productList())
  },[])
  return (
    <div>
     
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
      <button onClick={() => dispatch(productList())}>Call Product List</button>
      </div>
      <div className='product-container'>
        {
          data.map((item)=><div key={item.id}className='product-item'>
            <img className='img' src={item.photo} alt=""/>
            <div>Name: {item.name}</div>
            <div>Price: {item.price}</div>
            <div>Brand: {item.brand}</div>
            <div>Color: {item.color}</div>
            <div>Category: {item.category}</div>
            <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
            <button onClick={() => dispatch(removeToCart(item.id))}>Remove from Cart</button>
            
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;
