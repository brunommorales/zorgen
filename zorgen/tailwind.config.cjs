/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      fontSize: {
        text_footer: '10px'
      },
      colors: {
        titulos: '#393B44',
        textos: '#3F3F3F',
        texto_final: '#353535',
        branco: '#FFFFFF',
        cinza_input: '#F8F8F8',
        caixa_text: '#828282',
        borda: '#008CFF'
      },
      fontFamily: {
        'saira':['Saira', 'sans-serif']
      },
    },
  },
  plugins: [],
}