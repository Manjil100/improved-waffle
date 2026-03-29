import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
   base: process.env.VERCEL ? '/' : '/improved-waffle/',
})

/* 

Github deploy:
export default defineConfig({
  plugins: [react()],
   base: '/improved-waffle/'
})

*/