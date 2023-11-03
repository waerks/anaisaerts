/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
            // SLIDE 1
    'apricot-50:': '#fdf5f3',    
    'apricot-100': '#fbeae5',
    'apricot-200': '#f9d9cf',
    'apricot-300': '#f4bead',
    'apricot-400': '#e98e72',
    'apricot-500': '#de7555',
    'apricot-600': '#ca5a38',
    'apricot-700': '#aa492b',
    'apricot-800': '#8d3f27',
    'apricot-900': '#753927',
    'apricot-950': '#3f1b10',

    // SLIDE 2
    'cyan-aqua-50': '#ebfffd',
    'cyan-aqua-100': '#cdfffc',
    'cyan-aqua-200': '#a1fffd',
    'cyan-aqua-300': '#47ffff',
    'cyan-aqua-400': '#1af3f6',
    'cyan-aqua-500': '#00d6dc',
    'cyan-aqua-600': '#01aab9',
    'cyan-aqua-700': '#098795',
    'cyan-aqua-800': '#116c79',
    'cyan-aqua-900': '#135966',
    'cyan-aqua-950': '#063b46',

    // SLIDE 3
    'bittersweet-50': '#fff1f1',
    'bittersweet-100': '#ffe2e1',
    'bittersweet-200': '#ffc9c7',
    'bittersweet-300': '#ffa3a0',
    'bittersweet-400': '#ff706b',
    'bittersweet-500': '#f8413b',
    'bittersweet-600': '#e5241d',
    'bittersweet-700': '#c11a14',
    'bittersweet-800': '#a01914',
    'bittersweet-900': '#841c18',
    'bittersweet-950': '#480907',

    // SLIDE 4
    'victoria-50': '#f0f3fd',
    'victoria-100': '#e4e9fb',
    'victoria-200': '#ced6f7',
    'victoria-300': '#b0bbf1',
    'victoria-400': '#9198e8',
    'victoria-500': '#7677de',
    'victoria-600': '#635bd0',
    'victoria-700': '#544bb7',
    'victoria-800': '#49439d',
    'victoria-900': '#3b3976',
    'victoria-950': '#242145',
      },
	  progress: {
        '92': 'background: radial-gradient(closest-side, white 79%, transparent 80% 100%); animation: html-progress 2s 1 forwards;',
        '87': 'background: radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0); animation: css-progress 2s 1 forwards;',
        '73': 'background: radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0); animation: js-progress 2s 1 forwards;',
      },
    },
  },
  plugins: [],
}

