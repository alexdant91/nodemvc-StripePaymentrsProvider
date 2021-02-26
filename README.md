# Stripe payments provider

This is a plugin for NodeMVC to comunicate with stripe api.

## Get started

Import the provider from installed plugins:

```js
const Stripe = include("plugins.@nodemvc.stripe-payments-provider");

const stripe = Stripe.init('YOUR_STRIPE_SECRET_KEY');
```

Then you have access to the Stripe APIs SDK.

## Example

```js
const Stripe = include("plugins.@nodemvc.stripe-payments-provider");

const stripe = Stripe.init('YOUR_STRIPE_SECRET_KEY');

stripe.customers.create({
  email: 'customer@example.com',
}).then(customer => console.log(customer.id)).catch(error => console.error(error));
```

Check out more [here](https://github.com/stripe/stripe-node).
