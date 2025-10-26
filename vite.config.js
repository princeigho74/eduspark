import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
```

### **Step 2: Make sure `.gitignore` is separate**
Create/update `.gitignore` file:
```
node_modules/
.pnp
.pnp.js
coverage/
build/
dist/
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.vscode/
.idea/
