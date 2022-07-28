module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fd073f535e72b419762eaa67cd0c0b1b'),
  },
});
