const path = require('path');

module.exports = {
  // 모드
  // mode: 'development',
  // 진입 파일 설정
  entry: './src/index.js',
  // 출력 파일 설정
  output: {
    // 출력 경로
    path: path.resolve(__dirname, 'public'),
    // 출력 파일 이름
    filename: 'bundle.js',
  },
  // 모듈 설정
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
    ],
  },
  // 소스맵 설정
  devtool: 'eval-cheap-module-source-map',
  // 개발 서버 설정
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
};
