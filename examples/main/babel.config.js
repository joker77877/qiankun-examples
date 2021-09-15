/*
 * @Description:
 * @Author:
 * @Date: 2021-09-15 12:00:14
 * @LastEditors: 尹彬宇
 * @LastEditTime: 2021-09-15 12:00:14
 * @FilePath: /main/babel.config.js
 */
module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            chrome: '58',
            ie: '11',
          },
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
    ],
  };
};
