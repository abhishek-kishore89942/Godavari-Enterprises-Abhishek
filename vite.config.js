import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const isGitHubPages=process.env.GITHUB_PAGES==='true'
export default defineConfig({
  base:isGitHubPages?'/Godavari-Enterprises-Abhishek/':'/',
  plugins:[react()],
  server:{port:5173, proxy:{'/api':'http://localhost:5000'}},
  build:{sourcemap:false}
})
