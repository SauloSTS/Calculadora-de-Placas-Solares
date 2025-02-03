# 🚀 Calculadora de Placas Solares 🔆  

Esta calculadora de placas solares ajuda a determinar **quantas placas solares** são necessárias para suprir um determinado **consumo médio mensal**. O usuário insere algumas informações básicas e o sistema calcula automaticamente a **quantidade de placas** recomendada para instalação.  

## 📌 Como Funciona a Calculadora?  

A calculadora segue os seguintes passos para determinar a quantidade ideal de placas solares:  

### 1️⃣ Entrada de Dados pelo Usuário:  
- **Consumo médio mensal (kWh)**: Energia consumida por mês.  
- **Média diária da irradiação solar (kWh/m²)**: O usuário consulta o site do [CRESESB](https://www.cresesb.cepel.br/index.php#data) para obter a média da sua região.  
- **Potência da placa solar (W)**: O usuário informa a potência da placa que deseja utilizar.  

### 2️⃣ Cálculo Automático:  
- O **consumo médio diário** é calculado dividindo o consumo mensal por 30 dias.  
- A **potência do sistema** é determinada pela fórmula:  
  \[
  \text{Potência do Sistema} = \frac{\text{Consumo Diário}}{\text{Irradiação Solar}} \times 0.75
  \]
- A **quantidade de placas necessárias** é obtida dividindo a potência do sistema pela potência da placa:  
  \[
  \text{Quantidade de Placas} = \frac{\text{Potência do Sistema} \times 1000}{\text{Potência da Placa}}
  \]
- O resultado é **arredondado para cima** para garantir que o sistema gere energia suficiente.  

---

## 📌 Estrutura e Funções do Código  

A calculadora está dividida em três partes principais:  

### 1️⃣ **Estrutura HTML (`index.html`)**  
Define os campos de entrada, botões e áreas onde os resultados serão exibidos.  
- **Campos de entrada** para que o usuário forneça os valores necessários.  
- **Botão "Calcular"** que aciona a função de cálculo.  
- **Link útil** para consulta da irradiação solar.  

### 2️⃣ **Estilização com CSS (`style.css`)**  
Deixa a interface mais agradável e responsiva:  
- **Cores e fontes modernas** para facilitar a leitura.  
- **Botões interativos** que mudam de cor ao passar o mouse.  
- **Entradas bem formatadas** para uma experiência fluida.  

### 3️⃣ **Lógica e Cálculo com TypeScript (`script.ts`)**  
A lógica principal é programada em TypeScript dentro da classe `SolarCalculator`.  

---

## 📌 Principais Funções e Responsabilidades  

### 🔹 1. **Classe `SolarCalculator`**  
Encapsula toda a lógica da calculadora, separando os elementos HTML e os cálculos.  

### 🔹 2. **Construtor `constructor()`**  
- Obtém referências dos elementos HTML usando `document.getElementById()`.  
- Adiciona um evento ao botão **"Calcular"** para chamar a função `calcular()`.  

### 🔹 3. **Método `calcular()`**  
- **Obtém os valores** digitados pelo usuário.  
- **Valida os dados** (verifica se são números e se foram preenchidos corretamente).  
- **Realiza os cálculos**:  
  - **Consumo médio diário** → `consumoMensal / 30`  
  - **Potência do sistema** → `(consumoDiario / irradiacao) * 0.75`  
  - **Quantidade de placas** → `(potenciaSistema * 1000) / potenciaPlaca`  
- **Exibe os resultados** preenchendo os campos na tela.  
- **Exibe um alerta de sucesso** após o cálculo.  

---

## 📌 Tecnologias Utilizadas  
- **📝 HTML** – Estrutura da página  
- **🎨 CSS** – Estilização da interface  
- **⚡ TypeScript** – Lógica e cálculos  
