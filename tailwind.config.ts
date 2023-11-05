import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      "primary-background-color": "hsl(0, 0%, 98%)",
      "secondary-text-color": "hsl(233, 11%, 84%)",
      "secondary-disabled-text-color": "hsl(236, 33%, 92%)",
      
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      letterSpacing: {
        widest: ".5em"
      }
    },
  },
  plugins: [],
}
export default config
