// Wave 5: Stripe Logic & Key Hookup

// 1. Create a secure Stripe API handler
// File: api/checkout.js (Vercel serverless function)

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'OmniLearn Premium Access',
              },
              unit_amount: 2000, // $20.00
            },
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/payments?success=true`,
        cancel_url: `${req.headers.origin}/payments?canceled=true`,
      });

      res.status(200).json({ url: session.url });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

