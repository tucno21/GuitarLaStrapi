module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf60g5ha6gdjkk3adqkg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_jbs1'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'hnklv2vpRBlabpeq9NBTfgklIwilk1JG'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
