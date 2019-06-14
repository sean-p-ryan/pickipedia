const stripe = require('stripe')('sk_test_2G5XIkKpmH0NQfehzrHZfKdA00SXR7o9H9');quire("stripe")("sk_test_2G5XIkKpmH0NQfehzrHZfKdA00SXR7o9H9")

(async () => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      name: 'Premium Pickipedia Membership',
      description: 'Premium access to Pikipedia',
      amount: 15,
      currency: 'usd',
      quantity: 1,
    }],
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });
})();