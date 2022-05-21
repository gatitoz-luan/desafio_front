import '../react/index.css'
import listas from './listas.js'


function script(){                  //função principal
    var passos = [];                //armazena os id clicados

////////////////////funções dos botões//////////////////////////////////////////
    function botao11(){             //botões foram nomeados em forma de matriz (botão(linha)(coluna))
        var x1 = document.getElementById('botao21');    //seleciona os proximos botões
        var x2 = document.getElementById('botao22');
        var x3 = document.getElementById('botao23');
        var proximos = listas()[0][0]['produtos']       //obtem quais serão os próximos

        if(proximos.includes(1))
        {x1.style.display = 'inline'}else{x1.style.display = 'none'};
        if(proximos.includes(2))
        {x2.style.display = 'inline'}else{x2.style.display = 'none'};      //define quais serão exibidos          
        if(proximos.includes(3))
        {x3.style.display = 'inline'}else{x3.style.display = 'none'};

        passos[0] = listas()[0][0]['id'];
    };
    function botao12(){
        var x1 = document.getElementById('botao21');
        var x2 = document.getElementById('botao22');
        var x3 = document.getElementById('botao23');
        var proximos = listas()[0][1]['produtos']       

        if(proximos.includes(1))
        {x1.style.display = 'inline'}else{x1.style.display = 'none'};
        if(proximos.includes(2))
        {x2.style.display = 'inline'}else{x2.style.display = 'none'};         
        if(proximos.includes(3))
        {x3.style.display = 'inline'}else{x3.style.display = 'none'};

        passos[0] = listas()[0][1]['id'];
    };
    function botao21(){
        var x2 = document.getElementById('botao32');
        var x1 = document.getElementById('botao31');
        var x3 = document.getElementById('botao33');
        var proximos = listas()[1][0]['bancos']       

        if(proximos.includes(1))
        {x1.style.display = 'inline'}else{x1.style.display = 'none'};
        if(proximos.includes(2))
        {x2.style.display = 'inline'}else{x2.style.display = 'none'};         
        if(proximos.includes(3))
        {x3.style.display = 'inline'}else{x3.style.display = 'none'};

        passos[1] = listas()[1][0]['id'];
    };
    function botao22(){
        var x1 = document.getElementById('botao31');
        var x2 = document.getElementById('botao32');
        var x3 = document.getElementById('botao33');
        var proximos = listas()[1][1]['bancos']       

        if(proximos.includes(1))
        {x1.style.display = 'inline'}else{x1.style.display = 'none'};
        if(proximos.includes(2))
        {x2.style.display = 'inline'}else{x2.style.display = 'none'};         
        if(proximos.includes(3))
        {x3.style.display = 'inline'}else{x3.style.display = 'none'};

        passos[1] = listas()[1][1]['id'];
    };
    function botao23(){
        var x1 = document.getElementById('botao31');
        var x2 = document.getElementById('botao32');
        var x3 = document.getElementById('botao33');
        var proximos = listas()[1][2]['bancos']       

        if(proximos.includes(1))
        {x1.style.display = 'inline'}else{x1.style.display = 'none'};
        if(proximos.includes(2))
        {x2.style.display = 'inline'}else{x2.style.display = 'none'};         
        if(proximos.includes(3))
        {x3.style.display = 'inline'}else{x3.style.display = 'none'};

        passos[1] = listas()[1][2]['id'];
    };
    function botao31(){
        passos[2] = listas()[2][0]['id'];  
        alerta();           
    };
    function botao32(){
        passos[2] = listas()[2][1]['id'];
        alerta();
    };
    function botao33(){
        passos[2] = listas()[2][2]['id'];
        alerta();
    };
    function alerta(){                  //Função que exibe a rota
        alert('Os passos até aqui foram:\n id_'+passos[0]+'--->id_'+passos[1]+'--->id_'+passos[2]);
    };

//////////////////////componente react//////////////////////////////////////////
    return(
        <ul id="botoes">   {/* ul e li para facilitar a estilização presente no arquivo ./src/react/index.css */}
            <li id="orgaos">       {/* botões com o nome importado da lista */}
                <button class="orgaos" id="botao11" onClick={botao11}><p id="orgaos1">{listas()[0][0]['nome']}</p></button>
                <button class="orgaos" id="botao12" onClick={botao12}><p id="orgaos2">{listas()[0][1]['nome']}</p></button>
            </li>
            <li id="produtos">
                <button class="produtos" id="botao21" onClick={botao21}><p id="p21">{listas()[1][0]['nome']}</p></button>
                <button class="produtos" id="botao22" onClick={botao22}><p id="p22">{listas()[1][1]['nome']}</p></button>
                <button class="produtos" id="botao23" onClick={botao23}><p  id="p23">{listas()[1][2]['nome']}</p></button>
            </li>
            <li id="bancos">
                <button class="bancos" id="botao31" onClick={botao31}><p  id="p31">{listas()[2][0]['codigo']} - {listas()[2][0]['nome']}</p></button>
                <button class="bancos" id="botao32" onClick={botao32}><p  id="p32">{listas()[2][1]['codigo']} - {listas()[2][1]['nome']}</p></button>
                <button class="bancos" id="botao33" onClick={botao33}><p  id="p33">{listas()[2][2]['codigo']} - {listas()[2][2]['nome']}</p></button> {/* aqui são exibidos codigo e nome importados da lista presente no arquivo ./src/components/listas.js */}
            </li>
        </ul>
    )
}

export default script

