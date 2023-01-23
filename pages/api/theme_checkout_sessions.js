const stripe = require("stripe")(process.env.STRIPE_TEST_KEY); //change to live key later

export default async function handler(req, res) {
    if(req.method === "POST"){
        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
              line_items: [
                {
                  price: 'price_1MPHz0GLQKBxwgzeUNbLyC95', //change to actual product
                  quantity: 1,
                },
              ],
              mode: 'payment',
              success_url: `${req.headers.origin}/?success=true`,
              cancel_url: `${req.headers.origin}/?canceled=true`,
            });
            res.redirect(303, session.url);
          } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader("Allow", 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
  