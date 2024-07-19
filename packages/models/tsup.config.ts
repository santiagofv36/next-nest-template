import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs'],
  platform: 'node',
  splitting: false,
  clean: true,
  sourcemap: true,
  target: 'node20',
  shims: true,
  bundle: true,
  skipNodeModulesBundle: true,
  dts: true,
});
