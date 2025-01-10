'use client'

export default function CartPage() {
    return (
      <div className="cart-container">
        <h1 className="font-bold text-2xl text-blue-900">Billing Information</h1>
        <form className="billing-form">
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Enter your address" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="Enter your city" />
          </div>
          <div className="form-group">
            <label htmlFor="postal-code">Postal Code</label>
            <input type="text" id="postal-code" placeholder="Enter your postal code" />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" placeholder="Enter your country" />
          </div>
          <div className="form-group">
            <label htmlFor="payment-method">Payment Method</label>
            <select id="payment-method">
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash-on-delivery">Cash on Delivery</option>
            </select>
          </div>
          <button type="submit" className="place-order-btn">Place Order</button>
        </form>
  
        <style jsx>{`
          .cart-container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
          }
  
          h1 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
          }
  
          .billing-form {
            display: flex;
            flex-direction: column;
          }
  
          .form-group {
            margin-bottom: 15px;
          }
  
          label {
            font-weight: bold;
            margin-bottom: 5px;
            display: block;
          }
  
          input,
          select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
          }
  
          .place-order-btn {
            background-color: #ff69b4; /* Pink color */
            color: white;
            padding: 12px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
          }
  
          .place-order-btn:hover {
            background-color: #e75480;
          }
  
          @media (max-width: 768px) {
            .cart-container {
              margin: 10px;
              padding: 15px;
            }
  
            input,
            select {
              font-size: 14px;
            }
  
            .place-order-btn {
              font-size: 14px;
            }
          }
        `}</style>
      </div>
    );
  }
  