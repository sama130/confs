const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

// Variáveis para armazenar a posição do scroll
let scrollPosition = 0;

if (bar) {
    bar.addEventListener('click', () => {
        // Salvar a posição do scroll antes de abrir o menu
        scrollPosition = window.scrollY;  // ou document.documentElement.scrollTop
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        // Restaurar a posição do scroll após fechar o menu
        nav.classList.remove('active');
        window.scrollTo(0, scrollPosition);  // Restaura a posição do scroll
    });
}

console.log("Novo código iniciado!");

// O restante do código permanece o mesmo...









// 1) Referências ao modal e áreas de conteúdo
const openCartBtn         = document.getElementById('openCart');
const cartModal           = document.getElementById('cartModal');
const cartModalClose      = document.getElementById('cartModalClose');
const cartModalContent    = document.getElementById('cartModalContent');
const cartModalTotalPrice = document.getElementById('cartModalTotalPrice');

// 2) Abre o modal ao clicar no ícone do header
openCartBtn.addEventListener('click', e => {
  e.preventDefault();
  cartModal.classList.add('active');
});

// 3) Fecha o modal ao clicar no “×”
cartModalClose.addEventListener('click', () => {
  cartModal.classList.remove('active');
});

// 4) Captura todos os botões de adicionar ao carrinho dentro de cada .pro
document.querySelectorAll('.pro a.cart').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();

    // 4.1) Pega os dados do produto clicado
    const pro      = btn.closest('.pro');
    const imgSrc   = pro.querySelector('img').src;
    const title    = pro.querySelector('.des h5').innerText;
    const priceStr = pro.querySelector('.des h4').innerText
                      .replace('R$', '')
                      .replace('.', '')
                      .replace(',', '.'); // ex: "R$67,00" → "67.00"
    const price    = parseFloat(priceStr);

    // 4.2) Adiciona o item no modal
    addProductToCart({ imgSrc, title, price });

    // 4.3) Recalcula o total e abre o modal
    updateTotal();
    cartModal.classList.add('active');
  });
});

// 5) Função que cria (ou incrementa) o .cart-box no modal
function addProductToCart({ imgSrc, title, price }) {
  // evita duplicatas
  const existing = [...cartModalContent.children].find(box =>
    box.querySelector('.cart-product-title').innerText === title
  );

  if (existing) {
    const qtyEl = existing.querySelector('.number');
    qtyEl.innerText = parseInt(qtyEl.innerText) + 1;
    return;
  }

  const box = document.createElement('div');
  box.classList.add('cart-box');
  box.innerHTML = `
    <img src="${imgSrc}" class="cart-img" />
    <div class="cart-detail">
      <h4 class="cart-product-title">${title}</h4>
      <span class="cart-price">R$${price.toFixed(2).replace('.', ',')}</span>
      <div class="cart-quantity">
        <button class="decrement">-</button>
        <span class="number">1</span>
        <button class="increment">+</button>
      </div>
    </div>
    <i class="fa-solid fa-trash cart-remove"></i>
  `;
  cartModalContent.appendChild(box);

  // liga eventos de incremento, decremento e remoção
  box.querySelector('.increment').addEventListener('click', () => {
    const num = box.querySelector('.number');
    num.innerText = parseInt(num.innerText) + 1;
    updateTotal();
  });
  box.querySelector('.decrement').addEventListener('click', () => {
    const num = box.querySelector('.number');
    if (parseInt(num.innerText) > 1) {
      num.innerText = parseInt(num.innerText) - 1;
      updateTotal();
    }
  });
  box.querySelector('.cart-remove').addEventListener('click', () => {
    box.remove();
    updateTotal();
  });
}

// 6) Recalcula o total do carrinho
function updateTotal() {
  let sum = 0;
  cartModalContent.querySelectorAll('.cart-box').forEach(box => {
    const priceText = box.querySelector('.cart-price').innerText
                      .replace('R$', '')
                      .replace(',', '.');
    const price = parseFloat(priceText);
    const qty   = parseInt(box.querySelector('.number').innerText);
    sum += price * qty;
  });
  cartModalTotalPrice.innerText = `R$${sum.toFixed(2).replace('.', ',')}`;
}


const gallery = document.querySelector('.gallery');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {
  gallery.scrollBy({ left: 300, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  gallery.scrollBy({ left: -300, behavior: 'smooth' });
});







  const buyBtn = document.querySelector('.cart-modal-btn-buy');
  const paymentForm = document.getElementById('paymentForm');

  buyBtn.addEventListener('click', () => {
    paymentForm.style.display = 'block';
    buyBtn.style.display = 'none'; // esconde botão de "Comprar"
  });

  const finishOrderBtn = document.getElementById('finishOrder');
  finishOrderBtn.addEventListener('click', () => {
    const method = document.getElementById('paymentMethod').value;
    const address = document.getElementById('deliveryAddress').value;

    if (!method || !address) {
      alert("Preencha todos os campos para finalizar a compra!");
      return;
    }

    alert("Compra finalizada com sucesso! Obrigado por comprar conosco 😊");
    // Aqui você pode limpar os campos ou fechar o modal
  });














  document.getElementById('finishOrder').addEventListener('click', function () {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const address = document.getElementById('deliveryAddress').value;
    const total = document.getElementById('cartModalTotalPrice').textContent;

    if (!paymentMethod || !address) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const paymentText = paymentMethod === 'pix' ? 'PIX' : 'Dinheiro';

    const message = `Olá! Gostaria de fazer um pedido:%0A%0A💳 Pagamento: ${paymentText}%0A🏠 Endereço: ${address}%0A💰 Total: ${total}`;

    // WhatsApp com número no formato internacional
    const whatsappNumber = '5522981048500';
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Abre o WhatsApp com a mensagem
    window.open(url, '_blank');
  });



 









  
  





