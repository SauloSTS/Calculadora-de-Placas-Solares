class SolarCalculator {
    private consumoMensalInput: HTMLInputElement;
    private consumoDiarioInput: HTMLInputElement;
    private irradiacaoInput: HTMLInputElement;
    private potenciaSistemaInput: HTMLInputElement;
    private potenciaPlacaInput: HTMLInputElement;
    private quantidadePlacasInput: HTMLInputElement;
    private calcularButton: HTMLButtonElement;

    constructor() {
        // Capturando os elementos do DOM
        this.consumoMensalInput = document.getElementById("consumoMensal") as HTMLInputElement;
        this.consumoDiarioInput = document.getElementById("consumoDiario") as HTMLInputElement;
        this.irradiacaoInput = document.getElementById("irradiacao") as HTMLInputElement;
        this.potenciaSistemaInput = document.getElementById("potenciaSistema") as HTMLInputElement;
        this.potenciaPlacaInput = document.getElementById("potenciaPlaca") as HTMLInputElement;
        this.quantidadePlacasInput = document.getElementById("quantidadePlacas") as HTMLInputElement;
        this.calcularButton = document.getElementById("calcular") as HTMLButtonElement;

        // Adiciona evento de clique no botão
        this.calcularButton.addEventListener("click", () => this.calcular());
    }

    private calcular(): void {
        const consumoMensal = parseFloat(this.consumoMensalInput.value);
        const irradiacao = parseFloat(this.irradiacaoInput.value);
        const potenciaPlaca = parseFloat(this.potenciaPlacaInput.value);
        const eficiencia = 0.75; // Eficiência do sistema (75%)

        if (isNaN(consumoMensal) || isNaN(irradiacao) || isNaN(potenciaPlaca)) {
            this.exibirErro("Preencha todos os campos corretamente.");
            return;
        }

        // Cálculo do consumo médio diário
        const consumoDiario = consumoMensal / 30;
        this.consumoDiarioInput.value = consumoDiario.toFixed(2);

        // Cálculo da potência do sistema
        const potenciaSistema = (consumoDiario / irradiacao) * eficiencia;
        this.potenciaSistemaInput.value = potenciaSistema.toFixed(2);

        // Cálculo da quantidade de placas solares necessárias
        const quantidadePlacas = Math.ceil((potenciaSistema * 1000) / potenciaPlaca);
        this.quantidadePlacasInput.value = quantidadePlacas.toString();

        this.exibirSucesso();
    }

    private exibirErro(mensagem: string): void {
        alert("❌ " + mensagem);
    }

    private exibirSucesso(): void {
        alert("✅ Cálculo realizado com sucesso!");
    }
}

// Inicializa a calculadora quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    new SolarCalculator();
});
