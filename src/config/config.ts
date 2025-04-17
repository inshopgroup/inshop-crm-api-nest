export default () => ({
  port: parseInt(process.env.PORT as string, 10) || 3000,
  // database: {
  //   host: process.env.DATABASE_HOST,
  //   port: parseInt(process.env.DATABASE_PORT as string, 10) || 5432,
  // },
});
