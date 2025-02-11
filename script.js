
        function confirmarPresenca() {
            // Número de telefone e mensagem personalizada
            const numero = "5551995017229"; // Substitua pelo número de telefone
            const mensagem = "Olá, confirmo minha presença no aniversário!";
            
            // Gera o link do WhatsApp
            const linkWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
            
            // Redireciona para o WhatsApp
            window.open(linkWhatsApp, "_blank");
        }