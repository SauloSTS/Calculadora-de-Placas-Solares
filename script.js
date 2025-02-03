var SolarCalculator = /** @class */ (function () {
    function SolarCalculator() {
        var _this = this;
        // Capturando os elementos do DOM
        this.consumoMensalInput = document.getElementById("consumoMensal");
        this.consumoDiarioInput = document.getElementById("consumoDiario");
        this.irradiacaoInput = document.getElementById("irradiacao");
        this.potenciaSistemaInput = document.getElementById("potenciaSistema");
        this.potenciaPlacaInput = document.getElementById("potenciaPlaca");
        this.quantidadePlacasInput = document.getElementById("quantidadePlacas");
        this.calcularButton = document.getElementById("calcular");
        // Adiciona evento de clique no botão
        this.calcularButton.addEventListener("click", function () { return _this.calcular(); });
    }
    SolarCalculator.prototype.calcular = function () {
        var consumoMensal = parseFloat(this.consumoMensalInput.value);
        var irradiacao = parseFloat(this.irradiacaoInput.value);
        var potenciaPlaca = parseFloat(this.potenciaPlacaInput.value);
        var eficiencia = 0.75; // Eficiência do sistema (75%)
        if (isNaN(consumoMensal) || isNaN(irradiacao) || isNaN(potenciaPlaca)) {
            this.exibirErro("Preencha todos os campos corretamente.");
            return;
        }
        // Cálculo do consumo médio diário
        var consumoDiario = consumoMensal / 30;
        this.consumoDiarioInput.value = consumoDiario.toFixed(2);
        // Cálculo da potência do sistema
        var potenciaSistema = (consumoDiario / irradiacao) * eficiencia;
        this.potenciaSistemaInput.value = potenciaSistema.toFixed(2);
        // Cálculo da quantidade de placas solares necessárias
        var quantidadePlacas = Math.ceil((potenciaSistema * 1000) / potenciaPlaca);
        this.quantidadePlacasInput.value = quantidadePlacas.toString();
        this.exibirSucesso();
    };
    SolarCalculator.prototype.exibirErro = function (mensagem) {
        alert("❌ " + mensagem);
    };
    SolarCalculator.prototype.exibirSucesso = function () {
        alert("✅ Cálculo realizado com sucesso!");
    };
    return SolarCalculator;
}());
// Inicializa a calculadora quando a página carregar
document.addEventListener("DOMContentLoaded", function () {
    new SolarCalculator();
});
