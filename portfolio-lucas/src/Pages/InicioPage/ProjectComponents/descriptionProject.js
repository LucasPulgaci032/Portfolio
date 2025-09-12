export const BibliotecaVirtual = `Desenvolvi uma biblioteca digital simples e funcional, com uma barra de pesquisa que permite localizar livros ao verificar se o termo digitado está contido em seus títulos. Assim, é possível encontrar uma obra digitando apenas parte do nome. O sistema exibe a imagem do livro junto com seu título completo.
Nesse projeto, aprofundei meus conhecimentos em Styled-Components e JavaScript, utilizando o método map para renderizar os componentes de forma eficiente e dinâmica.
No backend, construí uma API com Express para implementar um sistema de favoritos. Ao clicar em um livro, uma requisição POST adiciona o item a um arquivo .json. Também é possível visualizar os livros favoritos com uma requisição GET, e removê-los com uma DELETE. Para testar as rotas da API, utilizei o Postman.
 Clique na imagem para visualização em tamanho maior!
 `

export const CloneInstagram2 = `Este projeto é um clone fiel da interface do Instagram, reproduzindo com precisão todos os detalhes, incluindo o padrão de cores e os tamanhos das divs. Além disso, o código consome a API do GitHub, permitindo a visualização de usuários reais.`

export const AcademiaBlueLion = `Este projeto marcou meu primeiro contato com o Front-End e foi desenvolvido como um trabalho acadêmico. Trata-se de um site para academia chamado "Blue Lion", uma criação minha.Por se tratar de um primeiro contato, não tem uma organização tão concisa em seu repositório.

O site foi construído utilizando apenas HTML, CSS e JavaScript puro, explorando os fundamentos do desenvolvimento front-end. Suas funcionalidades permitem que o usuário:

Visualize os exercícios do treino do dia.

Utilize cronômetros independentes para controlar os tempos de descanso.

Faça anotações sobre os exercícios, como carga e número de repetições, para facilitar o acompanhamento.

Acesse uma página dedicada ao cálculo do IMC (Índice de Massa Corporal), que exibe automaticamente a classificação correspondente ao resultado, indicando se o usuário está abaixo do peso, no peso ideal, acima do peso ou em obesidade.

Utilize telas de cadastro e login para gerenciamento de acesso.

Esse projeto foi essencial para o meu aprendizado inicial em desenvolvimento web e aprofundamento nas interações dinâmicas do JavaScript.


`
export const ApiNodeMongo = (
  <>
    API desenvolvida em <strong>Node.js</strong> com <strong>Express</strong> para gerenciamento de livros, permitindo a inserção (POST) e visualização (GET) de dados em um banco de dados <strong>MongoDB</strong>.<br /><br />
    
    A estrutura da API segue boas práticas de organização, com pastas separadas por responsabilidades:<br /><br />
    
    - <strong>Controllers:</strong> implementam a lógica das requisições HTTP;<br />
    - <strong>Models:</strong> definem os schemas do banco de dados;<br />
    - <strong>Routes:</strong> centralizam e organizam todas as rotas da aplicação;<br />
    - <strong>Config:</strong> armazena variáveis de ambiente, garantindo segurança e integridade no acesso ao banco.<br /><br />
    
    A API oferece um <strong>CRUD completo</strong>, com métodos para criação preparados embedding (relacionamento de documentos), leitura, atualização e exclusão de livros.<br />
    Sua arquitetura modular permite fácil expansão, possibilitando a criação de novas rotas e entidades de forma intuitiva e organizada.
  </>
)