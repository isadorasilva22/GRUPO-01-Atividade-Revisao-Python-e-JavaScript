function calcularIMC() {
            var peso = parseFloat(document.getElementById('peso').value);
            var altura = parseFloat(document.getElementById('altura').value);

            if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
                alert("Por favor, insira valores válidos para peso e altura.");
                return;
            }

            var imc = peso / (altura * altura);
            var classificacao = "";

            if (imc < 18.5) {
                classificacao = "Abaixo do peso";
            } else if (imc >= 18.5 && imc < 24.9) {
                classificacao = "Peso normal";
            } else if (imc >= 25 && imc < 29.9) {
                classificacao = "Sobrepeso";
            } else if (imc >= 30) {
                classificacao = "Obesidade";
            }

            document.getElementById('resultado').innerHTML = `IMC: ${imc.toFixed(2)} - Classificação: ${classificacao}`;
        }