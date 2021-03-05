const challenge_data = {
  id: 1,
  name: "",
  description: "Utiliza la propiedad display y su valor flex para centrar el elemento como en el resultado, pista: Utiliza justify-content y align-items",
  abilitie: "",
  keywords: "",
  resolved: 0,
  attempts: 0,
  challenge: {
    mco_input: ".divHola { background-color: cyan; width: 50px; height: 50px; }",
    user_input: "",
    output: ".divHola { background-color: red; width: 50px; height: 50px; }",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAoISURBVHhe7dpBThtZGEZRdpgtMctSWEqWkmW4jRUQ7fyo2yL9nt7tMzgCu8pG3+i6Cj89Pz9fAICzCToABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOmz2dLkkTNuAdQQdNpvieKJpG7COoMNmUxxPNG0D1hF02GyK44mmbcA6gg6bTXE80bQNWEfQYbMpjl/38/L07eny9HL9OR7/86ZtwDqCDpvdgvjy7Rrgl98iefPj++fHPiXo8H8j6LDZLYiCDnyRoMNmtyAKOvBFgg6b3YL4cNB/XJ6ersF+d339z4/Hh6C//o2Pr/nDsZ+2AesIOmx2C+IjQf95/f0+yK/nvD7349fj34J+/QDw/ert/Lf3eD//66ZtwDqCDpvdgnh/9XzvY9C/Xx9/jPP4/H3Q7/3T8cdN24B1BB02uwXxX1+h/wrxdGU9nfe3YN/fpr8//jXTNmAdQYfNbkH8r4P+dgfg01vyXzdtA9YRdNjsFsRH/of+8C33Kd7Tc18zbQPWEXTY7BbER4L+6Zfiru/x/k33u2Dffwh4u2IXdMgQdNjsFsRHgv7qLervrud8PP7bFfjd/89fro9doUOKoMNmUxxPNG0D1hF02GyK44mmbcA6gg6bTXE80bQNWEfQYbMpjieatgHrCDpsNsXxRNM2YB1Bh82mOJ5o2gasI+iw2RTHE03bgHUEHTab4niiaRuwjqDDZlMcTzRtA9YRdNhsiuOJpm3AOoIOm01xPNG0DVhH0GGzKY4nmrYB6wg6bDbF8UTTNmAdQYfNpjieaNoGrCPosNkUxxNN24B1BB02m+J4omkbsI6gw2ZTHE80bQPWEXTYbIrjiaZtwDqCDptNcTzRtA1YR9BhsymOJ5q2AesIOmw2xfFE0zZgHUGHzaY4nmjaBqwj6LDZFMcTTduAdQQdNpvieKJpG7COoMNmUxxPNG0D1hF02GyK44mmbcA6gg6bTXE80bQNWEfQYbMpjieatgHrCDpsNsXxRNM2YB1Bh82mOJ5o2gasI+iw2RTHE03bgHUEHTab4niiaRuwjqDDZlMcTzRtA9YRdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0ADje8+UvLF5LZG6Vpf8AAAAASUVORK5CYII=",
    validatorRules: [
      {
        id: 1,
        name: "La clase divHola debe existir",
        rule: "$exists(cssRules[selectorText='.divHola'])",
      },
      {
        id: 2,
        name: "La propiedad background-color debe existir",
        rule: "$exists(cssRules[selectorText='.divHola'].style.'background-color')"
      },
      {
        id: 4,
        name: "La clase divLayout debe existir",
        rule: "$exists(cssRules[selectorText='.divLayout'])",
      },
      {
        id: 5,
        name: "La propiedad display en divLayout debe existir",
        rule: "$exists(cssRules[selectorText='.divLayout'].style.'display')"
      },
      {
        id: 6,
        name: "El valor de la propiedad display en divLayout debe ser igual a 'flex'",
        rule: "(cssRules[selectorText='.divLayout'].style.'display' = 'flex')"
      },
      {
        id: 7,
        name: "La propiedad justify-content en divLayout debe existir",
        rule: "$exists(cssRules[selectorText='.divLayout'].style.'justify-content')"
      },
      {
        id: 8,
        name: "El valor de la propiedad justify-content en divLayout debe ser igual a 'center'",
        rule: "(cssRules[selectorText='.divLayout'].style.'justify-content' = 'center')"
      },
      {
        id: 9,
        name: "La propiedad align-items en divLayout debe existir",
        rule: "$exists(cssRules[selectorText='.divLayout'].style.'align-items')"
      },
      {
        id: 10,
        name: "El valor de la propiedad align-items en divLayout debe ser igual a 'center'",
        rule: "(cssRules[selectorText='.divLayout'].style.'align-items' = 'center')"
      }
    ],
    editor_data: [
      {
        language: "html",
        value: "<div class='divLayout'><div class='divHola'>Hola</div></div>"
      },
      {
        language: "css",
        value: ".divLayout { width: 500px; height: 500px; } .divHola { background-color: cyan; width: 50px; height: 50px;}"
      },
      {
        language: "js",
        value: ""
      }
    ],
    hints: [
      {
        id: 1,
        name: "bg-color: green",
        description: "Vas por buen camino, consulta esta guia para saber mas de colores",
        url: "http//mdn/css-bg-color"
      }
    ]
  }
}

export default challenge_data