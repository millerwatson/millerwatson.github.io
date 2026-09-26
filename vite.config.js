import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // millerwatson.github.io is a *user* site (repo named exactly
  // <username>.github.io), so it's served from the domain root — base
  // stays '/'. (Only project sites, served at /<repo-name>/, need this
  // changed.)
  base: '/',
})
