//cria referência ao form e ao elemento h3 (onde será exibida as resposta)

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um "ouvinte" de evento, acionada quando o botão submit for clicado 

frm.addEventListener("submit", (e) =>{
      const nome = frm.inNome.value     // obtem o nome digitado no form
      resp.innerText = `olá ${nome}`   // exibe a resposta do programa
      e.preventDefault()              // evita envio do form
 })

