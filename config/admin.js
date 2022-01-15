module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '26d2ed7631fbac8f50f58277bdcdb4a5'),
  },
});
