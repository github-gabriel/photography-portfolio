import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: './',
    publicDir: 'public',
    build: {
        emptyOutDir: true,
        outDir: 'dist',
        assetsDir: 'src/assets',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'src/about/about.html')
            }
        }
    }
})
