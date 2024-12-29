/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
      },
      eslint: {
        ignoreDuringBuilds: true,
      },
    images:{
      remotePatterns:[
{
    protocol:'https',
   hostname:"*",
}
        ]
    },
    experimental:{
        ppr:"incremental"
    },
    devIndicators:{
        appIsrStatus:true,
        buildActivity: true,
        buildActivityPosition: "bottom-right",
    }
};

export default nextConfig;
