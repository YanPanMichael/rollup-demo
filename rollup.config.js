import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'src/index.js',
  format: 'umd',
  plugins: [
    resolve(),
    babel({
      excludes: "node_modules/**"
    })
  ],
  dest: 'build/bundle.js'
}