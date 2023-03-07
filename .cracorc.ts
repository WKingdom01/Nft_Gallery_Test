import { CracoConfig } from '@craco/types';
import { resolve } from 'node:path';

process.on('uncaughtException', function (err) {
  console.error(err);
});

const config: CracoConfig = {
  webpack: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
};

export default config;
