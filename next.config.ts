import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 3600,
      static: 3600,
    },
  },
};

export default withNextIntl(nextConfig);
