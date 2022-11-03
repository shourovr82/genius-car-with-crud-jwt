import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = event => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`
    const email = user?.email || 'unregistered';
    const message = form.message.value;
    const phone = form.phone.value;

    const order = {
      service: _id,
      serviceName: title,
      price: price,
      customer: name,
      email, phone, message
    }

    // if (phone.length > 10) {
    //   alert('Phone Number should be 10 charecters or longer')
    // }

    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          alert('Order Placed successfully');
          form.reset();
        }
      })
      .catch(e => console.log(e))
  }

  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <h2 className='text-4xl'>You are about to Order : {title}</h2>
        <h4 className='text-4xl'>Price : {price}</h4>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-warning w-full" required />
          <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-warning w-full" required />
          <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-warning w-full" required />
          <input name='email' type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered input-warning w-full" readOnly />
        </div>
        <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Message"></textarea>
        <input className='btn btn-warning' type="submit" value="Place Your Order" />
      </form>

    </div>
  );
};

export default CheckOut;