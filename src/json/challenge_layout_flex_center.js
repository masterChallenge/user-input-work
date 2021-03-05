const challenge_data = {
  id: 1,
  name: "",
  description: "Utiliza la propiedad display y su valor flex para centrar el elemento como en el resultado",
  abilitie: "",
  keywords: "",
  resolved: 0,
  attempts: 0,
  challenge: {
    mco_input: ".divHola { background-color: cyan; width: 50px; height: 50px; }",
    user_input: "",
    output: ".divHola { background-color: red; width: 50px; height: 50px; }",
    image: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAoISURBVHhe7dpBThtZGEZRdpgtMctSWEqWkmW4jRUQ7fyo2yL9nt7tMzgCu8pG3+i6Cj89Pz9fgH2eLpeEaRuwjqDDZlMcTzRtA9YRdNhsiuOJpm3AOoIOm01xPNG0DVhH0GGzKY4nmrYB6wg6bDbF8et+Xp6+PV2eXq4/x+N/3rQNWEfQYbNbEF++XQP88lskb358//zYpwQd/m8EHTa7BVHQgS8SdNjsFkRBB75I0GGzWxAfDvqPy9PTNdjvrq//+fH4EPTXv/HxNX849tM2YB1Bh81uQXwk6D+vv98H+fWc1+d+/Hr8W9CvHwC+X72d//Ye7+d/3bQNWEfQYbNbEO+vnu99DPr36+OPcR6fvw/6vX86/rhpG7COoMNmtyD+6yv0XyGerqyn8/4W7Pvb9PfHv2baBqwj6LDZLYj/ddDf7gB8ekv+66ZtwDqCDpvdgvjI/9AfvuU+xXt67mumbcA6gg6b3YL4SNA//VLc9T3ev+l+F+z7DwFvV+yCDhmCDpvdgvhI0F+9Rf3d9ZyPx3+7Ar/7//nL9bErdEgRdNhsiuOJpm3AOoIOm01xPNG0DVhH0GGzKY4nmrYB6wg6bDbF8UTTNmAdQYfNpjieaNoGrCPosNkUxxNN24B1BB02m+J4omkbsI6gw2ZTHE80bQPWEXTYbIrjiaZtwDqCDptNcTzRtA1YR9BhsymOJ5q2AesIOmw2xfFE0zZgHUGHzaY4nmjaBqwj6LDZFMcTTduAdQQdNpvieKJpG7COoMNmUxxPNG0D1hF02GyK44mmbcA6gg6bTXE80bQNWEfQYbMpjieatgHrCDpsNsXxRNM2YB1Bh82mOJ5o2gasI+iw2RTHE03bgHUEHTab4niiaRuwjqDDZlMcTzRtA9YRdNhsiuOJpm3AOoIOm01xPNG0DVhH0GGzKY4nmrYB6wg6bDbF8UTTNmAdQYfNpjieaNoGrCPosNkUxxNN24B1BB02m+J4omkbsI6gw2ZTHE80bQPWEXTYbIrjiaZtwDqCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAAGCDgABgg4AAYIOAMd7vvwFcF1LZFm08ysAAAAASUVORK5CYII=",
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
    ],
    editor_data: {
      html: "<div class='divLayout'><div class='divHola'>Hola</div></div>",
      css: ".divHola { background-color: cyan; width: 50px; height: 50px; }",
      js: ""
    },
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