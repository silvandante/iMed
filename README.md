# iMed

Resumo
iMed é um aplicativo de visualização de medicamentos e suas respectivas interações medicamentosas assim como descrição de riscos e efeitos. Dados de Karen Ludimylla Bezerra Lima e desenvolvido por Anny Caroline Walker Silva.



Descrição Detalhada
O iMed é um aplicativo desenvolvido por Anny Caroline Walker Silva a partir da base de dados de Karen Ludimylla Bezerra Lima, e tem como objetivo permitir que o usuário visualize medicamentos e suas respectivas interações medicamentosas assim como descrição de riscos e efeitos.
Para cumprir com esse objetivo foi desenvolvido um aplicativo para Android, que ao ser aberto pelo usuário exibe uma lista de medicamentos, possuindo seu nome, descrição e imagem ilustrativa de seu princípio ativo, como demostrado na Figura 1 abaixo.

![Figura 1. Print Lista de Medicamentos](https://github.com/silvandante/iMed/blob/master/Documenta%C3%A7%C3%A3o%20T%C3%A9cnica/Exemplo%20de%20Tela%20Lista%20de%20Medicamentos.jpg)

A partir dessa lista de medicamentos, é possível selecionar um item, e assim visualizar a lista de interações medicamentosas que exibe a combinação do item selecionado com outros remédios e quais são os riscos e efeitos de tal interação, evento ilustrado na Figura 2.

![Figura 2. Lista de Interações Medicamentos de AAS](https://github.com/silvandante/iMed/blob/master/Documenta%C3%A7%C3%A3o%20T%C3%A9cnica/Exemplo%20de%20Tela%20Lista%20de%20Intera%C3%A7%C3%B5es%20de%20Medicamento%20(AAS).jpg)

É possível ainda, selecionar uma interação da lista de interações e inspecioná-la exclusivamente, como exibido na Figura 3. O app é flexível e possibilita que sejam visualizadas interações medicamentosas de vários remédios da Lista de Medicamentos.

![Figura 3. Interação Medicamentosa entre AAS e Captopril destacada](https://github.com/silvandante/iMed/blob/master/Documenta%C3%A7%C3%A3o%20T%C3%A9cnica/Exemplo%20de%20Intera%C3%A7%C3%A3o%20de%20Medicamentos%20(AAS%20%2B%20CAPTOPRIL)%20Destacada.jpg)

Para formalizar as ações do app, foi elaborado o Caso de Uso da Figura 4. Onde temos cada ação possível dentro do app e seus relacionamentos descritos por duas categorias: include, que significa uma relação de obrigatoriedade, onde se A é executado, B é necessariamente executado também; e extends, que indica uma relação opcional entre as ações, onde é possível e opcional executar B a partir de A.

![Figura 4. Caso de Uso do iMed](https://github.com/silvandante/iMed/blob/master/Documenta%C3%A7%C3%A3o%20T%C3%A9cnica/Caso%20de%20Uso%20-%20iMed.jpeg)

Observamos a partir da Figura 4 que Ver Tela Lista de Medicamentos ocorre necessariamente após a abertura do app, e possibilita a seleção de um medicamento específico em Selecionar Medicamento, o que obrigatoriamente gera a lista de interações em Ver Tela Lista de Interações do Medicamento.
A partir da lista de interações, é possível retornar a tela de medicamentos (Retornar para Tela Lista de Medicamentos), ou a selecionar de uma interação específica (Selecionar Interação de Medicamentos), que por sua vez gera necessariamente o destaque da interação em Ver Interação de Medicamentos Destacada, que pode ser fechada. Com adendo de que o app pode ser finalizado em qualquer etapa desde que tenha sido aberto.

