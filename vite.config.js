import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./@"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@layout": path.resolve(__dirname, "./src/layout"),
			"@utils": path.resolve(__dirname, "./src/utils"),
		},
	},
})
