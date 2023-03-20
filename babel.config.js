module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          img: './static/img',
          static: './static',
        },
      },
    ],
  ],
};
