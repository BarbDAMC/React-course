export default {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current' }}],
    '@babel/preset-typescript',
    ['@babel/preset-react', {runtime: 'automatic'}],
    ['babel-preset-vite', {'env': true, 'glob': false}]
  ]
};