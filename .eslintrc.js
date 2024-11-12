module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms', 'next'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules:"off",
}
