import type { Config } from 'tailwindcss';
const config: Config = {
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
        'waze-gradient':
          'linear-gradient(93.02deg, #01D1FF 6.15%, #9671FF 98.44%)',
        'google-maps-gradient':
          'linear-gradient(93.02deg, #FF0101 6.15%, #FF9900 98.44%)',
        'appointment-gradient':
          'linear-gradient(93.02deg, #DF678D 6.15%, #FB4D84 98.44%)',
        'whatsapp-gradient':
          'linear-gradient(93.02deg, #28CA42 6.15%, #3C7E14 98.44%)',
        'timesButton-gradient':
          'linear-gradient(180deg, #DF678D 0%, #FF0957 100%)',
        'timeoutModal-gradient':
          'linear-gradient(125.76deg, #FFFFFF -6.1%, #DDDCDC 116.49%)',
      },
      screens: {
        mobile: '375px',
        desktop: '1920px',
        tablet: '1024px',
      },
    },
  },
  plugins: [],
};
export default config;
