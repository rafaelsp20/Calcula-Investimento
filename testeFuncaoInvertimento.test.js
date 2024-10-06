const calcularRendimento = require("./Investimento");

test("Realizar o calculo do investimento de R$1000,00 por 10 anos a taxa de juros de 5% ano ano", () => {
  expect(calcularRendimento(1000, 5, 10)).toBe("1628.89");
});
