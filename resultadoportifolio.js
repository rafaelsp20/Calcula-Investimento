let ativos = [
                [100, 200, 150],  
                [50, 100, 75],
                [120, 220, 180]
            
];

let dividendos = [
                [5, 10, 8],    
                [2, 5, 3],  
                [6, 12, 10]  
                                
];              

const totalAtivos = ativos.map((array) => {
    return array.reduce((soma, valor) => soma + valor, 0);
  });

const totalDividendos = dividendos.map((array) => {
    return array.reduce((soma, valor) => soma + valor, 0);
  });

// Filtrar e contar quantos arrays existem
const quantidade = ativos.filter(item => Array.isArray(item)).length;

let rendimento = calcularRendimentoR(totalAtivos, totalDividendos);

function calcularRendimentoR(totalAtivos, totalDividendos) {
            
         for (let i = 0; i < quantidade; i++) {        
                // total = numeros[i] + arr[i] + totalAtivos[i] + totalDividendos[i];   
            let dividendosTotais = 0;
            
                for (let dividendo of totalDividendos) {
                    dividendosTotais += dividendo;                 
                }        
                
              let precoTotalCompra = 0;
              for (let preco of totalAtivos) {
                  precoTotalCompra += preco;
                  // TODO: Some cada preço de compra ao total               
              } 

                // TODO: Calcule o rendimento percentual
                let rendimento = 0;
                rendimento = (totalDividendos[i]/ totalAtivos[i]) * 100;   
                
            console.log(rendimento.toFixed(2) + "%");          
            }
}

module.exports = calcularRendimentoR;