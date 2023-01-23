import React, {useState} from 'react';
import '../styles/globals.css';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}
