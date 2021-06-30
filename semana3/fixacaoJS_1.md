```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
const salario = 2000
const comissao = qtdeCarrosVendidos * 100 + (valorTotalVendas-(valorTotalVendas*0.95))
const salarioFinal = salario + comissao
return salarioFinal
}```