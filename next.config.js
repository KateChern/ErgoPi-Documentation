// module.exports = {
//   reactStrictMode: true,
//   // webpack(config) {
//   //   config.module.rules.push({
//   //     test: /\.svg$/,
//   //     use: ["@svgr/webpack"]
//   //   });

//   //   return config;
//   // }

   
  
// }


module.exports = {
  webpack(config) {
    reactStrictMode: true,
    
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};