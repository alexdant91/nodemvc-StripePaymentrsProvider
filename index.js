class StripePaymentsProvider {
  static init = (stripe_key = null) => {
    return require('stripe')(stripe_key);
  }
}

module.exports = StripePaymentsProvider;
