import { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useHistory,Link } from 'react-router-dom';
import cogoToast from 'cogo-toast';
import './Rating.scss';
const possibleRates = [1, 2, 3, 4, 5];

function App() {
  const history = useHistory();
  const [selectedRate, setSelectedRate] = useState(null);
  const [hoveredRate, setHoveredRate] = useState(null);
  const data=localStorage.getItem('react-use-cart');
  const product = JSON.parse(data);
  const businessId=product.items[0].business_id._id;
  const tokens = localStorage.getItem('userToken')
      const decoded = jwt_decode(tokens);
      const userId = decoded._id;
  const handleRateClick = rate => {
    setSelectedRate(rate);
  };
  const handleSubmit = () => {
    axios.post(`http://localhost:4500/api/rating/create?userId=${userId}&businessId=${businessId}`, {
     
      rate: selectedRate,
    }).then(res => {
      cogoToast.success('Thank for rating on our business',{position:'top-center'});
      history.push('/order-dashboard');
    }
    ).catch(err => {
      cogoToast.error('Rating failed, try again',{position:'top-center'});
        history.push('/rating');
      console.log(err.message);
    }
    );

  }

  return (
    <>
      <div class="card-rating">
        <div class="card-header">
          <p class="title">How was our services ?</p>
        </div>

        <div class="card-body">
          <div class="stars">
            {possibleRates.map(rate => <i
              key={rate}
              class={"fas fa-star star "  
              + ((rate <= selectedRate) ? 'in-rate ' : '')
              + ((rate <= hoveredRate) ? 'in-hover' : '')}
              onClick={() => setSelectedRate(rate)}
              onMouseEnter={() => {setHoveredRate(rate); setSelectedRate(null);}}
              onMouseLeave={() => setHoveredRate(null)}></i>)}
          </div>
          <button className='btn-rate' onClick={handleSubmit}>Submit</button><br/>
           <Link to={'/order-dashboard'}><button className='btn-rate'>Cancel</button></Link>

        </div>
        

      </div>
    </>
  );
}

export default App;
