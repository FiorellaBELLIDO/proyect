import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    environment: {
      mode: process.env.NODE_ENV,
    },
  };
});
