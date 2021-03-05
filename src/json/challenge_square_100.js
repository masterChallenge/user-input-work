const challenge_data = {
  id: 1,
  name: "",
  description: "Utiliza width y height para formar un cuadrado de 100x100 pixeles",
  abilitie: "",
  keywords: "",
  resolved: 0,
  attempts: 0,
  challenge: {
    mco_input: ".divHola { background-color: cyan; width: 50px; height: 50px; }",
    user_input: "",
    output: ".divHola { background-color: red; width: 50px; height: 50px; }",
    image: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAoPSURBVHhe7drBcRsHFkVRZuiUtFMoCkWhKAwarDE1HOqzvumqmfm+PotTJLob4OItLhrE09Pz8zN3fPnyBQA+TdCPmUYCgI2gHzONBAAbQT9mGgkANoJ+zDQSAGz+S0H/8fz029Pz07fHz/E8H5lGAoDNv4L+7bdHgL+NgXn6/vXjcx8S9L9qGgkANoJ+zDQSAGwE/ZhpJADY/MWgf3888RHsnx7P//H2/BD0l7/x9jliP5pGAoDNI62PkHwm6D8ev78P8ss1L8e+//H4l6A/3gB8fXi9/vU1fl7Pq2kkANj8O+gvgf3I26B/fTx+G+fx+Pugv7ed/+eaRgKAzSPXj5D86Tv0P0I83VlP1/1HsN9/TP/+PC+mkQBg878J+usnAB9+JM+raSQA2Hwy6A+f/sh9ivd0jBfTSACw+XzQP/xS3OM1fn7T/V2w378JeL1jF/RfTCMBwObzQX/xGvWfHte8Pf/LHfi7/59/ezx2hz6aRgKAzSOvc1j4/5hGAoCNoB8zjQQAG0E/ZhoJADaCfsw0EgBsBP2YaSQA2Aj6MdNIALAR9GOmkQBgI+jHTCMBwEbQj5lGAoCNoB8zjQQAG0E/ZhoJADaCfsw0EgBsBP2YaSQA2Aj6MdNIALAR9GOmkQBgI+jHTCMBwEbQj5lGAoCNoB8zjQQAG0E/ZhoJADaCfsw0EgBsBP2YaSQA2Aj6MdNIALAR9GOmkQBgI+jHTCMBwEbQj5lGAoCNoB8zjQQAG0E/ZhoJADaCfsw0EgBsBP2YaSQA2Aj6MdNIALAR9GOmkQBgI+jHTCMBwEbQj5lGAoCNoB8zjQQAG0E/ZhoJADaCfsw0EgBsBP2YaSQA2Aj6MdNIALAR9GOmkQBgI+jHTCMBwEbQj5lGAoCNoB8zjQQAG0E/ZhoJADaCfsw0EgBsBP2YaSQA2Aj6MdNIALAR9GOmkQBgI+jHTCMBwEbQj5lGAoCNoB8zjQQAG0E/ZhoJADaCfsw0EgBsBP2YaSQA2Aj6MdNIALAR9GOmkQBgI+jHTCMBwEbQj5lGAoCNoB8zjQQAG0E/ZhoJADaCfsw0EgBsBP2YaSQA2Aj6MdNIALAR9GOmkQBgI+jHTCMBwEbQj5lGAoCNoB8zjQQAG0E/ZhoJADaCfsw0EgBsBP2YaSQA2Aj6MdNIALAR9GOmkQBgI+jHTCMBwEbQj5lGAoCNoB8zjQQAG0E/ZhoJADaCfsw0EgBsBP2YaSQA2Aj6MdNIALAR9GOmkQBgI+jHTCMBwEbQj5lGAoCNoB8zjQQAG0E/ZhoJADZP00EA4O9F0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQAeBv78vz77L7t56a/MkWAAAAAElFTkSuQmCC",
    validatorRules: [
      {
        id: 1,
        name: "La clase divHola debe existir",
        rule: "$exists(cssRules[selectorText='.divHola'])",
      },
      {
        id: 2,
        name: "La propiedad width debe existir",
        rule: "$exists(cssRules[selectorText='.divHola'].style.'width')"
      },
      {
        id: 3,
        name: "El valor de la propiedad width debe ser igual a '100px'",
        rule: "(cssRules[selectorText='.divHola'].style.'width' = '100px')"
      },
      {
        id: 4,
        name: "La propiedad height debe existir",
        rule: "$exists(cssRules[selectorText='.divHola'].style.'height')"
      },
      {
        id: 5,
        name: "El valor de la propiedad height debe ser igual a '100px'",
        rule: "(cssRules[selectorText='.divHola'].style.'height' = '100px')"
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