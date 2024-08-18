tailwind.config = {
    theme: {
      extend: {      
        colors: {
          lavalemenu: '#001114',
          lavale: '#003a47',
          lavalelight: "#008391",
          lavalesemi: "#073b47",
          active: '#feefc0',
          advice: '#f5f2e3',
          lavaledark: "#061d23",
        },
        fontFamily: {
          display: ["Playfair Display", 'serif'],
          monsterrat: ["Montserrat", "sans-serif"],
        },
        boxShadow: {
          'homepage': '0 200px 0 200px #003a47',
        },
        backgroundImage: {
          'ruouman': "url('./img/nen1.png')",
          'ruoutaomeo': "url('./img/nen2.jfif')",
          'ruouvai': "url('./img/nen3.jfif')",
          'hoatdong': "url('./img/post.jfif')",
          'spliter': "url('./img/spliter.png')",
          'logo': "url('./img/logo.png')",
          'middleground': "url('./img/middleground.png')"
        }
      }
    },
  }