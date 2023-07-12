/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#3b82f6",          
          "secondary": "#701a75",         
          "accent": "#3b82f6",        
          "neutral": "#1f2937",         
          "base-100": "#f3f4f6",        
          "info": "#9DDAF0",          
          "success": "#64D8A0",         
          "warning": "#EFAE3E",         
          "error": "#F41F4A",
        }
      }
    ]
  }
}
