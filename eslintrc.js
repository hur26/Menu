module.exports = {
  root: true,
  env: { node: true },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser', // 解析 Vue 模板
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解析 TypeScript 脚本
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'never'], // 强制禁止尾部逗号
    'space-infix-ops': 'error' // 强制操作符前后加空格（解决参数格式问题）
  }
}