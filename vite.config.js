// Migration guide: Follow the guide below and remove homepage field in package.json
// https://vitejs.dev/config/shared-options.html#base
function basePlugin() {
    return {
        name: "base-plugin",
        config(_, { mode }) {
            const { PUBLIC_URL } = loadEnv(mode, ".", ["PUBLIC_URL"]);
            // For GitHub Pages deployment, use the homepage from package.json
            try {
                const { homepage } = JSON.parse(readFileSync("package.json", "utf-8"));
                // Extract the repository name from the homepage
                let base = '';
                if (homepage) {
                    try {
                        const url = new URL(homepage);
                        if (url.hostname.includes('github.io')) {
                            // Extract path from GitHub Pages URL
                            base = url.pathname;
                        } else {
                            base = homepage;
                        }
                    } catch (e) {
                        // If homepage is not a valid URL, use it directly
                        base = homepage.startsWith('/') ? homepage : `/${homepage}`;
                    }
                }
                return {
                    base: PUBLIC_URL || (mode === 'production' ? base : '/'),
                };
            } catch (error) {
                console.error("Failed to parse package.json:", error);
                return {
                    base: PUBLIC_URL || '/',
                };
            }
        },
    };
}