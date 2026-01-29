# 🔧 Guia de Configuração do PayPal

## Suas Informações:
- **Email PayPal:** filipemonteirodjob@gmail.com
- **WhatsApp:** +258 85 313 1045

---

## ✅ Já Configurado:

### 1. Link PayPal.me para Aula Experimental ($5)
Já está funcionando em `payment.html`:
```
https://www.paypal.me/filipemonteirodjob/5
```

Este link redireciona diretamente para pagamento de $5 USD.

---

## ⚠️ Ainda Precisa Configurar:

### 2. PayPal Client ID para Pagamentos Integrados

O arquivo `pricing.html` usa integração avançada do PayPal que requer um **Client ID**.

#### Como Obter o Client ID:

**PASSO 1:** Acesse o PayPal Developer
- Site: https://developer.paypal.com/
- Faça login com: filipemonteirodjob@gmail.com

**PASSO 2:** Criar uma App
1. Vá em "My Apps & Credentials"
2. Clique em "Create App"
3. Nome da App: "Portuguese Teacher Platform" (ou qualquer nome)
4. Tipo: Merchant

**PASSO 3:** Copiar o Client ID
1. Após criar, você verá:
   - **Client ID** (string longa começando com "A...")
   - Client Secret (não precisa por enquanto)
2. Copie o **Client ID**

**PASSO 4:** Modo Sandbox vs Live
- **Sandbox**: Para testes (não cobra dinheiro real)
- **Live**: Para produção (cobra dinheiro real)

⚠️ **Importante:** Comece no modo Sandbox para testar!

**PASSO 5:** Adicionar ao Código
Abra `pricing.html` e substitua esta linha:

```javascript
const PAYPAL_CLIENT_ID = "SUBSTITUI_PELO_TEU_CLIENT_ID";
```

Por:

```javascript
const PAYPAL_CLIENT_ID = "SEU_CLIENT_ID_AQUI";
```

Exemplo (Client ID fictício):
```javascript
const PAYPAL_CLIENT_ID = "AYx8Q9vBZ7_u3Kj4mN2pQ1rS5tV6wX8yZ0aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0u";
```

---

## 📋 Opções de Pagamento no Site:

### Opção 1: PayPal.me (Já Funcionando)
- ✅ Simples e rápido
- ✅ Já configurado em `payment.html`
- ✅ Link direto: https://www.paypal.me/filipemonteirodjob/5
- ❌ Menos integrado (precisa confirmar manualmente)

### Opção 2: PayPal Buttons (Requer Client ID)
- ✅ Totalmente integrado
- ✅ Pagamento dentro do site
- ✅ Confirmação automática
- ❌ Precisa configurar Client ID
- Usado em: `pricing.html`

---

## 🎯 Recomendação:

**Para começar agora:**
Use o sistema atual com PayPal.me que já está funcionando!

**Para o futuro:**
Configure o Client ID quando tiver tempo para melhorar a experiência do usuário.

---

## 📞 Informações de Contato Configuradas:

Todos os links do WhatsApp já estão atualizados para:
- **Número:** +258 85 313 1045
- **Link formatado:** https://wa.me/258853131045

Arquivos atualizados:
- ✅ index.html
- ✅ dashboard-student.html

---

## 🚀 Próximos Passos:

1. **Testar o site** com as novas informações
2. **Fazer um pedido teste** usando PayPal.me
3. Quando estiver pronto, configurar Client ID para integração completa
4. Configurar Firebase Security Rules (já mencionado no relatório principal)

---

## 💡 Dicas:

- O PayPal.me é perfeito para começar
- Pode processar pagamentos imediatamente
- Quando crescer, adicione a integração completa
- Sempre teste no Sandbox antes de usar modo Live

---

**Dúvidas?** Entre em contacto via WhatsApp: +258 85 313 1045 😊
