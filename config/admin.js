module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '394769a03f3451182824ced38adf7939'),
  },
});
