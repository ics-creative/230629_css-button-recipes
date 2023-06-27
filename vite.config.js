import { splitVendorChunkPlugin, defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [splitVendorChunkPlugin()],
  build: {
    outDir: "docs",
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // JSの出力先
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        // CSSの出力先
        assetFileNames: `[name].[ext]`,
      }
    },
  },
});