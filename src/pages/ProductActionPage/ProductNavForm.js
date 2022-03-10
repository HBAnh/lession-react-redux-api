import ProductForm from "./ProductForm";
import {useNavigate, useParams} from 'react-router-dom';
export default function ProductNavForm(props) {
    const navigation = useNavigate();
    const {id} = useParams();

    return  <ProductForm {...props} navigation={navigation} productId={id}/>

   
  }
