const formulario = document.querySelector('#formulario-tarefa');
const campoTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const modeloTarefa = document.querySelector('#modelo-tarefa');

const tarefas = [];
function adicionarTarefa(evento) {
  evento.preventDefault();

  const texto = campoTarefa.value.trim();

  if (texto === '') {
    return;
  }


  const tarefa = {texto: texto, concluida: false};

  tarefas.push(tarefa);
 
 
 

  // Copia a estrutura da tarefa definida no HTML.
  const item = modeloTarefa.content.firstElementChild.cloneNode(true);
  const textoTarefa = item.querySelector('.texto-tarefa');
  const checkbox = item.querySelector('.checkbox-tarefa');
  const botaoExcluir = item.querySelector('.botao-excluir');

  textoTarefa.textContent = tarefa.texto;
  botaoExcluir.setAttribute('aria-label', 'Excluir tarefa: ' + tarefa.texto);
   


  checkbox.addEventListener('change', function () {
  tarefa.concluida = checkbox.checked;
   
  contarTarefasPendentes();

    
    
  });

  botaoExcluir.addEventListener('click', function () {
    const indice = tarefas.indexOf(tarefa);
    tarefas.splice(indice, 1);
    item.remove();
    campoTarefa.focus();
  });

  listaTarefas.appendChild(item);
  campoTarefa.value = '';
  campoTarefa.focus();




    

}

 function contarTarefasPendentes(){
    const pendentes = tarefas.filter(tarefa => tarefa.concluida ===false)
    console.log(pendentes.length);
   

    }
formulario.addEventListener('submit', adicionarTarefa);
