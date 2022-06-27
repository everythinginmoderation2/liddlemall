import React, {useState, useContext, useEffect} from "react";
import CheckoutSteps from "../Components/CheckoutSteps";
import {Helmet} from "react-helmet-async";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Store} from "../Store"
import { useNavigate } from "react-router-dom";

function PaymentMethodPage() {
    const {state, dispatch: ctxDispatch} = useContext(Store);
    const {cart: {shippingAddress, paymentMethod},} = state;
    const submitHandler = (e) => {
        e.preventDefault();
        ctxDispatch({type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName});
        localStorage.setItem('paymentMethod', paymentMethodName);
        navigate('/placeorder');
    }
    const [paymentMethodName, setPaymentMethodName] = useState(paymentMethod || 'PayPal');
    const navigate = useNavigate();

    useEffect(()=> {
        if (!shippingAddress.address) {
            navigate('/placeholder')
        }
    }, [shippingAddress, navigate])
  return (
    <div>
      <CheckoutSteps step1 step2 step3/>
        <div className="container small-container">
            <Helmet>
            <title>Payment Method</title>
            </Helmet>
            <h1 className="my-3">Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <div className="mb-3">
                    <Form.Check
                        type="radio"
                        id="PayPal"
                        label="PayPal"
                        value="PayPal"
                        checked={paymentMethodName === 'PayPal'}
                        onChange={(e) => setPaymentMethodName(e.target.value)}
                        />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="radio"
                        id="Stripe"
                        label="Stripe"
                        value="Stripe"
                        checked={paymentMethodName === 'Stripe'}
                        onChange={(e) => setPaymentMethodName(e.target.value)}
                        />
                </div>
                <div className="mb-3">
                    <Button type="submit">Continue</Button>
                </div>
            </Form>
        </div>
    </div>
  );
}

export default PaymentMethodPage;
