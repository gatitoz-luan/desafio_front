var input = require("fs").readFileSync('/dev/stdin', 'utf8');     //Seleciona este para teste no URI beecrowd
//var input = require("fs").readFileSync('stdin', 'utf8');            //Seleciona este para testes unitário com o arquivo desta pasta

class Desafio{                  //Classe única

    Executa(input){             //Função princial que faz um laço para cada sequencia de casos de teste
        var round = 0;          //armazena qual linha de input está rodando
        const respostas = ['A','B','C','D','E','*'];
        var linhas =  input.split('\n');        //armazena as linhas com o numero de casos de teste

        while (linhas[round]!=='0') {           //laço do algoritmo
            round = desafio.Testes(respostas, linhas, round);   
        };
    }
    Testes(respostas, linhas, round){       //função de resposta do algoritmo
        var linha = parseInt(linhas[round]);    
        
        for (var i = 0; i < linha; i++) {       //loop para cada teste obter uma resposta
            var [a,b,c,d,e] = linhas[i+1+round].split(' ').map(item => parseInt(item));     //armazena em variaveis separadas em formato numerico a lista dada
            
            if (a>127){         //analíse se a leitura foi maior que 127, logo, brancos(1), caso contrário pretos(1)
                a = 1;
            }else{
                a = 0;
            }
            if (b>127){
                b = 1;
            }else{
                b = 0;
            }
            if (c>127){
                c = 1;
            }else{
                c = 0;
            }
            if (d>127){
                d = 1;
            }else{
                d = 0;
            }
            if (e>127){
                e = 1;
            }else{
                e = 0;
            }
            
            if (a+b+c+d+e===4) {        //Se apenas 1 preto, gera log com o qual
                if (a===0) {console.log(respostas[0])
                }else if (b===0) {console.log(respostas[1])}else if (c===0) {console.log(respostas[2])}else if (d===0) {console.log(respostas[3])}else if (e===0) {console.log(respostas[4])}
            }else {console.log(respostas[5])}
        }
        round=round+linha+1;
        return round;
    }
}

let desafio = new Desafio()               //chamadas de classe e função
desafio.Executa(input)


//para mais testes acesse: https://www.udebug.com/URI/1129
//cole o input no arquivo 'stdin' 
/*REMOVA AS LINHAS 1 E 2 DO CÓDIGO E COLE ESTAS:
//var input = require("fs").readFileSync('/dev/stdin', 'utf8');     //Seleciona este para teste no URI beecrowd
var input = require("fs").readFileSync('stdin', 'utf8');            //Seleciona este para testes unitário com o arquivo desta pasta 
*/
//rode o código
//copie o resultado usando o próprio site já aberto
