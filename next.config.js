/** @type {import('next').NextConfig} */
const nextConfig = {
     images:{
        remotePatterns: [{
             hostname:'image.tmdb.org'
        // protocol:'https',
        // port:'',
        // pathname:'https://image.tmdb.org/t/p/original'
        
        }]
     }
}

module.exports = nextConfig
