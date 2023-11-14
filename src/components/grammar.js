const stateMap = {
    "qe": [
        {
            nextState: "q010",
            error: "Misspelled reserved word.",
            rule: /^int$/,
        },
        {
            nextState: "q020",
            error: "Misspelled reserved word.",
            rule: /^float$/,
        },
        {
            nextState: "q030",
            error: "Misspelled reserved word.",
            rule: /^bool$/,
        },
        {
            nextState: "q040",
            error: "Misspelled reserved word.",
            rule: /^string$/,
        },
        {
            nextState: "q080",
            error: "Misspelled reserved word.",
            rule: /^char$/,
        },


        {
            nextState: "qfr",
            error: "Invalid variable name o palabra reservada mal escrita",
            rule: /^([a-z][a-z0-9_]*)(.read)$/,
        },
        {
            nextState: "qfw",
            error: "Invalid variable name o palabra reservada mal escrita",
            rule: /^(\(".*?"\)\.write$|\([a-z][a-z0-9_]*\)\.write)$/,
        },
        {
            nextState: "q20",
            error: "Invalid variable name o palabra reservada mal escrita",
            rule: /^\(".*$/
        },
        {
            nextState: "q2",
            error: "Palabra reservada mal escrita",
            rule: /^fnc$/,
        },
        {
            nextState: "q6",
            error: "Palabra reservada mal escrita",
            rule: /^switch$/,
        },
        {
            nextState: "q12",
            error: "Palabra reservada mal escrita",
            rule: /^while$/,
        },
        /* {
           nextState: "q17",
           error: "Invalid variable name",
           rule: /^[a-z][a-z0-9_]*$/,
         },*/

    ],
    "q010": [
        {
            nextState: "q0101",
            error: "Invalid variable name",
            rule: /^[a-z][a-z0-9_]*$/,
        },
    ],
    "q0101": [
        {
            nextState: "q011",
            error: "Semicolon or equals expected",
            rule: /^;$/,
        },
        {
            nextState: "q012",
            error: "Invalid operator",
            rule: /^=$/,
        },
    ],
    "q011": [
        {
            nextState: "q012",
            error: "Invalid operator",
            rule: /^=$/,
        },
        {
            nextState: "q010",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q012": [
        {
            nextState: "q0103",
            error: "Invalid expression",
            rule: /^[0-9]*$/,
        },
    ],
    "q0103": [
        {
            nextState: "q013",
            error: "Semicolon expected",
            rule: /^;$/,
        },
    ],
    "q013": [
        {
            nextState: "q010",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q020": [
        {
            nextState: "q0201",
            error: "Invalid variable name",
            rule: /^[a-z][a-z0-9_]*$/,
        },
    ],
    "q0201": [
        {
            nextState: "q021",
            error: "Semicolon or equals expected",
            rule: /^;$/,
        },
        {
            nextState: "q022",
            error: "Invalid operator",
            rule: /^=$/,
        },
    ],
    "q021": [
        {
            nextState: "q022",
            error: "Invalid operator",
            rule: /^=$/,
        },
        {
            nextState: "q020",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q022": [
        {
            nextState: "q0203",
            error: "Invalid expression",
            rule: /^[0-9]*.[0-9]*$/,
        },
    ],
    "q0203": [
        {
            nextState: "q023",
            error: "Semicolon expected",
            rule: /^;$/,
        },
    ],
    "q023": [
        {
            nextState: "q020",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q030": [
        {
            nextState: "q0301",
            error: "Invalid variable name",
            rule: /^[a-z][a-z0-9_]*$/,
        },
    ],
    "q0301": [
        {
            nextState: "q031",
            error: "Semicolon or equals expected",
            rule: /^;$/,
        },
        {
            nextState: "q032",
            error: "Invalid operator",
            rule: /^=$/,
        },
    ],
    "q031": [
        {
            nextState: "q032",
            error: "Invalid operator",
            rule: /^=$/,
        },
        {
            nextState: "q030",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q032": [
        {
            nextState: "q0303",
            error: "Invalid expression",
            rule: /^(true|false)*$/,
        },
    ],
    "q0303": [
        {
            nextState: "q033",
            error: "Semicolon expected",
            rule: /^;$/,
        },
    ],
    "q033": [
        {
            nextState: "q030",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q040": [
        {
            nextState: "q0401",
            error: "Invalid expression",
            rule: /^[a-z][a-zA-Z0-9]*$/,
        },
    ],
    "q0401": [
        {
            nextState: "q041",
            error: "Semicolon or equals expected",
            rule: /^;$/,
        },
        {
            nextState: "q042",
            error: "Invalid operator",
            rule: /^=$/,
        },
    ],
    "q041": [
        {
            nextState: "q042",
            error: "Invalid operator",
            rule: /^=$/,
        },
        {
            nextState: "q040",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q042": [
        {
            nextState: "q0403",
            error: "Double quotation marks expected",
            rule: /^".*"$/
        },
        {
            nextState: "q044",
            error: "Double quotation marks expected",
            rule: /^".*$/
        },
    ],
    "q0403": [
        {
            nextState: "q043",
            error: "Semicolon expected",
            rule: /^;$/,
        },
    ],
    "q043": [
        {
            nextState: "q040",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q044": [
        {
            nextState: "q043",
            error: "Invalid value or double quotation marks missing",
            rule: /^[^"]"*$/
        },
        {
            nextState: "q044",
            error: "Invalid word",
            rule: /^[^"]+$/
        }
    ],"q080": [
        {
            nextState: "q0801",
            error: "Invalid expression",
            rule: /^[a-z][a-zA-Z0-9]*$/,
        },
    ],
    "q0801": [
        {
            nextState: "q081",
            error: "Semicolon or equals expected",
            rule: /^;$/,
        },
        {
            nextState: "q082",
            error: "Invalid operator",
            rule: /^=$/,
        },
    ],
    "q081": [
        {
            nextState: "q082",
            error: "Invalid operator",
            rule: /^=$/,
        },
        {
            nextState: "q080",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q082": [
        {
            nextState: "q0803",
            error: "Double quotation marks expected",
            rule: /^".*"$/
        },
        {
            nextState: "q084",
            error: "Double quotation marks expected",
            rule: /^".*$/
        },
    ],
    "q0803": [
        {
            nextState: "q083",
            error: "Semicolon expected",
            rule: /^;$/,
        },
    ],
    "q083": [
        {
            nextState: "q080",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q084": [
        {
            nextState: "q083",
            error: "Invalid value or double quotation marks missing",
            rule: /^[^"]"*$/
        },
        {
            nextState: "q084",
            error: "Invalid word",
            rule: /^[^"]+$/
        }
    ],
    "q1": [
        {
            nextState: "qfd",
            error: "Invalid variable name",
            rule: /^[a-z][a-z0-9_]*$/,
        },
    ],
    "q2": [
        {
            nextState: "q3",
            error: "Invalid variable name",
            rule: /^[a-z][a-z0-9_]*$/,
        }
    ],
    "q3": [
        {
            nextState: "q4",
            error: "Cierre y apertura no válido",
            rule: /^(\(\){$|^\([a-z][a-z0-9_]*\){)$/
        },
        {
            nextState: "q003",
            error: "Cierre y apertura no válido",
            rule: /^\([a-z][a-z0-9_]*$/
        }
    ],
    "q003": [
        {
            nextState: "q004",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q004": [
        {
            nextState: "q4",
            error: "Cierre y apertura no válido",
            rule: /^[a-z][a-z0-9_]*\){$/
        },
        {
            nextState: "q003",
            error: "Cierre y apertura no válido",
            rule: /^[a-z][a-z0-9_]*$/

        }
    ],
    "q4": [
        {
            nextState: "q5",
            error: "Invalid variable name o palabra reservada mal escrita",
            rule: /^(\(".*?"\)\.write$|\([a-z][a-z0-9_]*\)\.write|([a-z][a-z0-9_]*)(.read))$/,
        },
        {
            nextState: "q050",
            error: "Invalid variable name o inicio mal escrito",
            rule: /^\(".*$/
        },
    ],
    "q050": [
        {
            nextState: "q5",
            error: "Palabra no válida o cierre incorrecto",
            rule: /^[^"]*"\)\.write$/
        },
        {
            nextState: "q050",
            error: "Palabra no válido",
            rule: /^[^"]+$/
        }
    ],
    "q5": [
        {
            nextState: "qff",
            error: "Cierre no válido",
            rule: /^\}$/,
        },
    ],
    "q6": [
        {
            nextState: "q7",
            error: "Nombre de variable de switch no válido",
            rule: /^\([a-z][a-z0-9_]*\){$/,
        },
    ],
    "q7": [
        {
            nextState: "q8",
            error: "Case no válido",
            rule: /^case_[a-z][a-z0-9_]*\($/,
        },
    ],
    "q8": [
        {
            nextState: "q9",
            error: "Introducción no válido",
            rule: /^(\(".*?"\)\.write$|\([a-z][a-z0-9_]*\)\.write|([a-z][a-z0-9_]*)(.read))$/,
        },
        {
            nextState: "q090",
            error: "Invalid variable name o inicio mal escrito",
            rule: /^\(".*$/
        },
    ],
    "q090": [
        {
            nextState: "q9",
            error: "Palabra no válida o cierre incorrecto",
            rule: /^[^"]*"\)\.write$/
        },
        {
            nextState: "q090",
            error: "Palabra no válido",
            rule: /^[^"]+$/
        }
    ],
    "q9": [
        {
            nextState: "q10",
            error: "Cierre no válido",
            rule: /\)$/,
        },
    ],
    "q10": [
        {
            nextState: "q8",
            error: "Case no válido",
            rule: /^case_[a-z][a-z0-9_]*\($/,
        },
        {
            nextState: "q11",
            error: "Misspelled reserved word",
            rule: /^exit$/,
        },
    ],
    "q11": [
        {
            nextState: "qfs",
            error: "Cierre no válido",
            rule: /}$/,
        },
    ],
    "q12": [
        {
            nextState: "q13",
            error: "Nombre de variable de while no válido",
            rule: /^\([a-z][a-z0-9_]*$/,
        },
    ],
    "q13": [
        {
            nextState: "q14",
            error: "Invalid operator",
            rule: /^==$/,
        },
    ],
    "q14": [
        {
            nextState: "q15",
            error: "Invalid expression",
            rule: /^(true\)|false\){)$/
        },
    ],
    "q15": [
        {
            nextState: "q16",
            error: "Introducción no válido",
            rule: /^(\(".*?"\)\.write$|\([a-z][a-z0-9_]*\)\.write|([a-z][a-z0-9_]*)(.read))$/,
        },
        {
            nextState: "q016",
            error: "Invalid variable name o inicio mal escrito",
            rule: /^\(".*$/
        },

    ],
    "q016": [
        {
            nextState: "q16",
            error: "Palabra no válida o cierre incorrecto",
            rule: /^[^"]*"\)\.write$/
        },
        {
            nextState: "q016",
            error: "Palabra no válido",
            rule: /^[^"]+$/
        }
    ],
    "q16": [
        {
            nextState: "q11",
            error: "Palabra reservada no válido",
            rule: /^exit$/,
        },
    ],
    "q17": [
        {
            nextState: "q18",
            error: "Invalid operator",
            rule: /^=$/,
        }
    ],
    "q18": [
        {
            nextState: "q19",
            error: "Invalid expression",
            rule: /^([0-9]*|[0-9]*.[0-9]*|true|false|".*")$/,
        },
        {
            nextState: "q19",
            error: "Invalid expression",
            rule: /^".*$/
        },
    ],
    "q19": [
        {
            nextState: "q20",
            error: "Invalid expression o hace falta comillas",
            rule: /^[^"]*"$/
        },
        {
            nextState: "q19",
            error: "Palabra no válido",
            rule: /^[^"]+$/
        }
    ],
    "q20": [
        {
            nextState: "qfw",
            error: "Palabra no válida o cierre incorrecto",
            rule: /^[^"]*"\)\.write$/
        },
        {
            nextState: "q20",
            error: "Palabra no válido",
            rule: /^[^"]+$/
        }
    ],
};

export function validateVariableDeclaration(value) {
    let currentState = "qe";
    const lines = value.split('\n');

    for (const line of lines) {
        const tokens = line.trim().split(' ');
        for (const token of tokens) {
            const nextState = getNextState(currentState, token);
            if (nextState === "q0-error") {
                return `Error: ${currentState}: ${stateMap[currentState][0].error}`;
            }
            if ((currentState === "q1" && token.endsWith('_')) || (currentState === "q010" && token.endsWith('_')) || (currentState === "q020" && token.endsWith('_')) || (currentState === "q030" && token.endsWith('_')) || (currentState === "q040" && token.endsWith('_')) || (currentState === "qe" && token.endsWith('_'))) {
                return `Error: Nombre de variable no puede terminar en '_'`;
            }
            currentState = nextState;
        }
    }

    if (currentState === "qfd" || currentState === "q011" || currentState === "q021" || currentState === "q031" || currentState === "q041") {
        return "Declaration variable is accepted";
    }
    if (currentState === "q013" || currentState === "q023" || currentState === "q033" || currentState === "q043") {
        return "Variable declaration and initialization is valid";
    }
    if (currentState === "q19" || currentState === "q20") {
        return "Inicialización de variable válido";
    }
    if (currentState === "qfr") {
        return "Leer variable válido";
    }
    if (currentState === "qfw") {
        return "Escribir variable válido";
    }
    if (currentState === "qff") {
        return "Declaración de función válido";
    }
    if (currentState === "qfs") {
        return "Declaración de funcion de sentencia válido";
    }
    else {
        return `Error: ${currentState}: ${stateMap[currentState][0].error}`;
    }
}

function getNextState(currentState, token) {
    const stateTransitions = stateMap[currentState];
    if (stateTransitions) {
        for (const transition of stateTransitions) {
            if (transition.rule.test(token)) {
                return transition.nextState;
            }
        }
    }
    return "q0-error";
}

/*const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
rl.question('Ingrese el bloque de codigo: ', (input) => {
  const result = validateVariableDeclaration(input);
  console.log(result);
  rl.close();
});*/