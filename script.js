
        function confirmarPresenca() {
            
            const numero = "5551995017229"; 
            const mensagem = "Olá, confirmo minha presença no aniversário!";
            
            const linkWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        
            window.open(linkWhatsApp, "_blank");
        }

        function nokPresenca() {
            
            const numero = "5551995017229"; 
            const mensagem = "Olá, não vou conseguir comparecer ao aniversário!";
            
            const linkWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        
            window.open(linkWhatsApp, "_blank");
        }