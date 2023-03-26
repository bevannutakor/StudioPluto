import React, {useState} from 'react';
import '../styles/globals.css';
import { loadStripe } from '@stripe/stripe-js';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function App({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  )
}
