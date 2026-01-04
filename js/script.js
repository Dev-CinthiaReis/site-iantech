/* --- js/script.js --- */

// 1. Lógica do Modal (Abrir e Fechar)
const modal = document.getElementById('modal-contato');
const closeBtn = document.querySelector('.close-btn');
const openBtns = document.querySelectorAll('.btn-open-modal');

// Abre o modal ao clicar em botões de "Falar com Técnico"
openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
    });
});

// Fecha ao clicar no X
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Fecha ao clicar fora da caixa do modal
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// 2. Integração com WhatsApp
// O JavaScript escuta quando o formulário é enviado
document.getElementById('form-whatsapp').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Coleta os valores dos campos pelos IDs
    let nome = document.getElementById('nome').value;
    let contato = document.getElementById('contato').value;
    let assunto = document.getElementById('assunto').value;
    let msgCliente = document.getElementById('mensagem').value;

    // --- CONFIGURAÇÃO DO NÚMERO ---
    // Coloque seu número aqui (55 + DDD + Numero)
    let telefoneTecnico = "5561996038031"; 
    // -----------------------------

    // Monta a mensagem formatada para o WhatsApp
    let textoMensagem = 
        `*Novo Contato via Site*\n\n` +
        `*Nome:* ${nome}\n` +
        `*Contato:* ${contato}\n` +
        `*Assunto:* ${assunto}\n` +
        `*Mensagem:* ${msgCliente}`;

    // Codifica a mensagem para funcionar na URL
    let textoCodificado = encodeURIComponent(textoMensagem);

    // CORREÇÃO DE SEGURANÇA:
    // Adicionado 'noopener,noreferrer' no terceiro parâmetro para proteger a aba original
    window.open(`https://wa.me/${telefoneTecnico}?text=${textoCodificado}`, '_blank', 'noopener,noreferrer');
    
    // Fecha o modal e limpa os campos
    modal.classList.remove('active');
    document.getElementById('form-whatsapp').reset();
});

// 3. Animação de Rolagem (Scroll)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
// Aplica a animação em todos os cards
document.querySelectorAll('.service-box, .price-card').forEach((el) => observer.observe(el));