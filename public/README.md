Documentação do Processo

1.0 Introdução  
Este projeto consiste em uma melhoria feita no site que serviu de base para nota no ano passado. O site era composto por HTML e CSS bruto, agora foi transformado em um projeto React. O React é uma biblioteca de JavaScript de código aberto usada principalmente para construir interfaces de usuários interativas e dinâmicas. A principal melhoria ao utilizar o React.js em relação a uma página estática com HTML e JavaScript puro está na componentização e na atualização dinâmica da interface. O React permite separar a interface em pequenos componentes reutilizáveis, facilitando a organização do código e a manutenção do projeto.

2.0 Passo a Passo da Conversão  
2.1 Inicialização do projeto React (comandos utilizados)  
- O primeiro passo a ser seguido é criar uma pasta para o seu projeto;  
- Depois de ter criado a pasta, abra um novo terminal;  
- Digite os comandos "git config --global user.name 'seu nome'" e "git config --global user.email 'seuemail@gmail.com'"; com esses comandos você está logado no Git;  
- Use o comando "git init" para iniciar seu projeto;  
- Acesse o site "vite.dev" e use o comando "npm create vite@latest nomequequiser -- --template react". A partir disso, você terá um arquivo criado;  
- Use o comando "npm install" para instalar as dependências.

2.2 Explicação sobre a criação dos componentes.  
- Dentro da pasta "src", criei outra pasta chamada "components" e, dentro dessa pasta, dividi meu site em 4 partes (arquivos ".tsx" e arquivos ".css"), sendo elas:  
- Header: destinada ao cabeçalho da página;  
- Background: destinada ao banner da página;  
- Card: destinada aos cards do site;  
- Footer: destinada ao rodapé da página.

2.3 Como foi aplicada a estilização.  
- O CSS da página estava no arquivo "App.css";  
- Dentro da pasta "components", criei um arquivo CSS para cada componente da página (Header, Card etc.);  
- Dentro desses arquivos, coloquei a estilização referente ao componente;  
- Na página principal "App.jsx", importei os arquivos utilizando tags e o atributo "import from". Exemplo: '<Header></Header>'.

2.4 Como a lista de produtos.  
- Criei, dentro da pasta "components", um arquivo "Card.tsx";  
- Dentro desse arquivo, coloquei todo o HTML da página;  
- Importei para a página principal utilizando a técnica explicada no item 2.3.

2.5 Testes e ajustes finais.  
Os únicos ajustes feitos foram:  
- Mudar as imagens, antes em arquivos ".jpeg", para URL;  
- Colocar as propriedades no devido lugar.

3.0 Instruções para clonar e executar o projeto.  
- Para clonar o projeto, é necessário usar o comando "git clone https://github.com/index7x7/sitejs.git"  
- Para executar, é necessário usar o comando "npm run dev"

4.0 Reflexão Final  
Este trabalho exigiu muito de minha determinação, pois errei muitas vezes, o que me fez pensar, perguntar para meus amigos e pesquisar na internet. Principalmente na parte de decorar a ordem dos comandos do Git e em colocar os arquivos nos lugares certos. Mas sinto que saio deste trabalho com um bom aprendizado sobre React, sobre como utilizar os comandos do Git, sobre como usar JavaScript sem a necessidade de ter um arquivo HTML e CSS. Estou ansioso para colocar em prática meus aprendizados.
