/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0D47A1",
          darkBlue: "#003178",
          cyan: "#00BCD4",
          teal: "#006876",
          green: "#10B981",
          lightBg: "#F8FAFC",
          cardBg: "#FFFFFF",
          slate: "#475569"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace']
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(13, 71, 161, 0.08)',
        'glass-hover': '0 14px 40px 0 rgba(0, 188, 212, 0.18)',
        'glow-cyan': '0 0 25px rgba(0, 188, 212, 0.3)',
        'glow-blue': '0 0 25px rgba(13, 71, 161, 0.25)',
      },
      backdropBlur: {
        'xs': '4px',
        'glass': '16px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #F8FAFC 0%, #EBF4FF 50%, #F0FDFA 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(240,249,255,0.65) 100%)',
        'blue-green-gradient': 'linear-gradient(135deg, #0D47A1 0%, #00BCD4 50%, #10B981 100%)'
      }
    },
  },
  plugins: [],
}
