import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    base: process.env.BASE_URL || '/',
    server: {
        host: true,
        port: 5173,
    },
});
