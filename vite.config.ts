import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: ["./src/setupTests.ts"],
	},
	ssr: {
		noExternal: ["@csstools/css-calc", "@asamuzakjp/css-color"],
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					"react-vendor": ["react", "react-dom", "react-router-dom"],
					"mui-vendor": [
						"@mui/material",
						"@mui/icons-material",
						"@emotion/react",
						"@emotion/styled",
					],
				},
			},
		},
	},
});
