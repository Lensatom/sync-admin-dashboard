module.exports = {
    darkMode: ['class'],
    content: [
    './src/screens/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			'orange.1': '#FFFCFB',
  			'orange.2': '#FFF7F5',
  			'orange.3': '#FFEBE4',
  			'orange.4': '#FFDACB',
  			'orange.5': '#FFCBB8',
  			'orange.6': '#FFBBA6',
  			'orange.7': '#F8A88F',
  			'orange.8': '#EF8E70',
  			'orange.9': '#EB5017',
  			'orange.10': '#DD4100',
  			'orange.11': '#D43900',
  			'orange.12': '#5C2919',
  			'gray.1': '#FCFCFD',
  			'gray.2': '#F9F9FB',
  			'gray.3': '#EFF0F3',
  			'gray.4': '#E7E8EC',
  			'gray.5': '#E0E1E6',
  			'gray.6': '#D8D9E0',
  			'gray.7': '#CDCED7',
  			'gray.8': '#B9BBC6',
  			'gray.9': '#8B8D98',
  			'gray.10': '#80828D',
  			'gray.11': '#62636C',
  			'gray.12': '#62636C',
  			'gray.13': '#1E1F24',
  			'blue.200': '#2D93D0',
  			'white': '#FFFFFF',
  			'black': '#141414',
  			'success': '#0CC963',
  			'error': '#EE0001',
  			'access': '#0CC963',
  			red: {
  				dark: '#D12B1F'
  			},
  			blue: {
  				'200': '#2D93D0'
  			},
  			'main': '#D43900',
  			'border.input': '#EFF0F3',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}