const form = document.getElementById('pedidoForm');
const resumo = document.getElementById('resumo');
const detalhesPedido = document.getElementById('detalhesPedido');
const linkWhatsapp = document.getElementById('linkWhatsapp');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const tamanho = document.getElementById('tamanho').value;
  const sabor1 = document.getElementById('sabor1').value;
  const sabor2 = document.getElementById('sabor2').value;
  const borda = document.getElementById('borda').checked ? "Sim" : "Não";
  const bebida = document.getElementById('bebida').value;
  const obs = document.getElementById('obs').value;
  const endereco = document.getElementById('endereco').value;

  let pedido = `🍕 *Pedido de Pizza* %0A`;
  pedido += `Tamanho: ${tamanho}%0A`;
  pedido += `Sabor 1: ${sabor1}%0A`;
  if (sabor2) pedido += `Sabor 2: ${sabor2}%0A`;
  pedido += `Borda recheada: ${borda}%0A`;
  if (bebida) pedido += `Bebida: ${bebida}%0A`;
  if (obs) pedido += `Observações: ${obs}%0A`;
  pedido += `📍 Endereço: ${endereco}%0A`;

  detalhesPedido.innerText = decodeURIComponent(pedido.replace(/%0A/g, '\n'));
  linkWhatsapp.href = `https://wa.me/5575974003081?text=${pedido}`;

  form.style.display = 'none';
  resumo.style.display = 'block';
});
