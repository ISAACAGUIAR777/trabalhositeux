/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/trabalhositeux', 
  images: {
    unoptimized: true, 
  },
  // Adicione estas duas configurações:
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;