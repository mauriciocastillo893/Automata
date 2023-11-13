import { useState } from 'react';
import '../style-sheets/Automatum.css'

function Automatum() {
    const [inputResult, setInputResult] = useState("")
    const documentation = 
    `LOS DATOS QUE ACEPTA SON LOS SIGUIENTES:
    \rVARIABLES:
    > string nombreCadena = "texto";
    > int nombreDigito = 1;
    > char nombreCaracter = 'a';
    > bool nombreBooleano = true;
    > float nombreFlotante = 9.2;
    `

    const grammar = {
        "EX": /^string NVS;\s*$/,
        "NVS": /^[a-zA-Z_][a-zA-Z0-9_]* = ".+"$/,
    };

    const grammarExpression = [
        {key: "EX", terminal: "string", next_key: "NVS"},
        {key: "NVS", terminal: ["a", "b"], next_key: "NVSS"},
        {key: "NVSS", terminal: "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z", next_key: "NVS"},
    ]

    function contarPalabras(texto) {
        var palabras = texto.split(/[^\S\n]+/);
        palabras = palabras.filter(function(palabra) {
            return palabra.length > 0;
        });
        return palabras.length;
    }
    
    function contarEspacios(cadena) {
        var espacios = cadena.split(" ").length - 1;
        return espacios;
    }

    function detectExpression(cadena) {
        console.log("cantidad de espacios", contarEspacios(cadena))
    
        if (cadena && contarEspacios(cadena) <= 0) {
            let found = false;
    
            grammarExpression.forEach((expression) => {
                // console.log(expression.terminal)
                if (expression.terminal === cadena) {
                    console.log("entre")
                    console.log("matched", expression.terminal === cadena)
                    setInputResult(expression.terminal);
                    found = true;
                }
            });
    
            if (!found) {
                console.log("not found");
                setInputResult("not found");
            }
        } else {
            console.log("no hay cadena");
        }
    }
    

    const handleSearchExpression = (e) => {
        detectExpression(e.target.value)
    }

    return (
        <div className='main-container'>
            <div className='header'>
                <div className='header-content' onClick={()=>{console.log(inputResult)}}>ZORN INDUSTRIES</div>
            </div>
            <div className='content'>
                <div className='first-content'>
                    <div className='title-f-c'></div>
                    <textarea className='description' value={documentation} readOnly/>
                </div>
                <div className="second-content">
                    <div className="second-one-content">
                        <div className='title-s-o-c'></div>
                        <textarea className="code" onChange={(e) => { handleSearchExpression(e) }} />
                    </div>
                    <div className="second-two-content">
                        <div className='title-s-t-c'></div>
                        <textarea className="terminal" value={inputResult} readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Automatum;