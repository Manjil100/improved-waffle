import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


console.log(process.env.NODE_ENV);
export default defineConfig({
  plugins: [react()], 
  // If we are deploying to GitHub Pages, use the repo name. 
  // Otherwise (like on Vercel), use the root.
  base: process.env.NODE_ENV === 'production' && !process.env.VERCEL 
    ? '/improved-waffle/' 
    : '/',
})