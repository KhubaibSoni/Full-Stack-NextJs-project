/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
      remotePatterns:[
{
    protocol:'https',
   hostname:"**",
}
        ]
    },
    experimental:{
        ppr:"incremental"
    },
    devIndicators:{
        appIsrStatus:true,
        buildActivity:true,
        buildActivity:"bottom-right"
    }
};

export default nextConfig;
