
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import useAuth from "../../Hooks/useAuth"
import CheckoutForm from "./CheckForm";
import PrimaryHero from '../../Components/Hero/PrimaryHero';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK)
const Payment = () => {
  const { user } = useAuth();
  return (
    <div>
      <PrimaryHero text="Payment Donation" />
      <h2 className="text-center font-semibold text-4xl my-5">Welcome Back <span className="text-red-600">{user?.displayName}</span></h2>
      <h2 className="text-2xl font-medium text-center"><span className="text-red-500">Payment</span> Donation</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}

export default Payment;