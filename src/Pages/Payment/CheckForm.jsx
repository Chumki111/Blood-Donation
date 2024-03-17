import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useState } from 'react'
// import './CheckoutForm.css'

import { ImSpinner9 } from 'react-icons/im'
import useAuth from '../../Hooks/useAuth'

const CheckoutForm = ({ bookingInfo, closeModal }) => {
  const stripe = useStripe()
  const elements = useElements()
  const { user } = useAuth()
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)

  // Create Payment Intent

  const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      console.log('error', error)
      setCardError(error.message)
    } else {
      setCardError('')
      console.log('payment method', paymentMethod)
    }

    setProcessing(true)

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      })

    if (confirmError) {
      console.log(confirmError)
      setCardError(confirmError.message)
    }

    console.log('payment intent', paymentIntent)

    if (paymentIntent.status === 'succeeded') {
      // save payment information to the server
      // Update room status in db
      const paymentInfo = {
        ...bookingInfo,
        transactionId: paymentIntent.id,
        date: new Date(),
      }

      setProcessing(false)
    }
  }

  return (
    <>
       <div>
      <form
        className="w-[40%] mx-auto p-10 shadow-lg space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="border border-gray-500 p-4 rounded-lg">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
                border: "1px solid black",
              },
            }}
          ></CardElement>
        </div>
        <div>
          <input
            placeholder="Enter Your Donation Amount"
            className="border w-full  focus:outline focus:outline-gray-500 border-gray-400 p-3 rounded-lg placeholder:font-semibold placeholder:text-[#9CA3AF]/90"
            type="number"
            // onBlur={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-red-500 active:bg-red-700 px-8 py-2  rounded-lg text-white font-semibold my-6"
            disabled={!stripe || !clientSecret}
          >
            Donate
          </button>
        </div>
        
        {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
      </form>
    </div>
    </>
  )
}

export default CheckoutForm;