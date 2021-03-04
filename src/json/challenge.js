const challenge_data = {
  id: 1,
  name: "",
  description: "BG-color se utiliza para cambiar el color del contenido del elemento, el reto es cambiar el backgroudn de text de prueba a azul",
  abilitie: "",
  keywords: "",
  resolved: 0,
  attempts: 0,
  challenge: {
    mco_input: ".divHola { background-color: cyan; width: 50px; height: 50px; }",
    user_input: "",
    output: ".divHola { background-color: red; width: 50px; height: 50px; }",
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
        id: 3,
        name: "El valor de la propiedad background-color debe ser igual a 'red'",
        rule: "(cssRules[selectorText='.divHola'].style.'background-color' = 'red')"
      }
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