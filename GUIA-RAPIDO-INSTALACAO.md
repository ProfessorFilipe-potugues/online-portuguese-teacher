# 🚀 Guia Rápido de Instalação

## ⚡ Setup em 5 Minutos

### 1️⃣ Configurar Firebase (3 min)

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Crie um novo projeto
3. Ative **Authentication** → Email/Password
4. Ative **Firestore Database**
5. Ative **Storage**
6. Copie as credenciais do projeto

### 2️⃣ Atualizar Credenciais nos Arquivos (1 min)

Procure por `firebaseConfig` em TODOS os arquivos HTML e substitua:

```javascript
const firebaseConfig = {
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO_ID",
};
```

**Arquivos que precisam ser atualizados:**
- ✅ teacher-settings.html
- ✅ dashboard-teacher-enhanced.html
- ✅ login.html
- ✅ cadastro-aluno.html
- ✅ dashboard-student.html
- ✅ perfil-professor.html
- ✅ pricing.html
- ✅ payment.html
- ✅ chat.html

### 3️⃣ Configurar Regras Firebase (1 min)

**Firestore Rules:**
No Firebase Console → Firestore → Rules, cole:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /appointments/{appointmentId} {
      allow read, write: if request.auth != null;
    }
    
    match /messages/{messageId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
    }
  }
}
```

**Storage Rules:**
No Firebase Console → Storage → Rules, cole:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /teachers/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🎯 Primeiro Uso

### Criar Conta de Professor:

1. Abra `login.html`
2. Insira email e senha
3. Selecione "Professor"
4. Clique em "Criar Conta"
5. Você será redirecionado para o dashboard

### Configurar Perfil:

1. No dashboard, clique em "⚙️ Configurações"
2. Preencha cada seção:
   - ✅ Perfil (nome, país, foto)
   - ✅ Preços (defina seus valores)
   - ✅ Disponibilidade (marque horários)
   - ✅ Sobre Mim (descrição)
   - ✅ Áreas de Ensino
   - ✅ Pagamentos (PayPal, etc)
3. Salve cada seção

### Ver Perfil Público:

- Acesse `perfil-professor.html`
- Este é o que os alunos verão!

## 📂 Estrutura de Diretórios

```
seu-projeto/
├── index.html                          # Landing page
├── login.html                          # Login/Registro
├── cadastro-aluno.html                 # Cadastro do aluno
│
├── teacher-settings.html               # ⭐ NOVO: Configurações do professor
├── dashboard-teacher-enhanced.html     # ⭐ NOVO: Dashboard melhorado
├── perfil-professor.html               # Perfil público
│
├── dashboard-student.html              # Dashboard do aluno
├── pricing.html                        # Preços
├── payment.html                        # Pagamento
├── chat.html                           # Chat
│
└── assets/ (opcional)
    ├── images/
    │   └── filipe.jpg                  # Foto do professor
    └── css/
        └── styles.css (se quiser separar)
```

## 🖼️ Adicionar Foto do Professor

1. Coloque uma imagem chamada `filipe.jpg` na mesma pasta
2. Ou use o upload na página de configurações
3. A foto será salva no Firebase Storage

## 🧪 Testar Localmente

### Opção 1: Servidor Python
```bash
python -m http.server 8000
```
Acesse: http://localhost:8000

### Opção 2: VS Code Live Server
1. Instale extensão "Live Server"
2. Clique direito → "Open with Live Server"

### Opção 3: Qualquer servidor web
- XAMPP, WAMP, nginx, etc.

## 🌐 Deploy

### Opção 1: Firebase Hosting (Grátis)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Opção 2: Netlify (Grátis)
1. Arraste pasta para netlify.com/drop
2. Pronto!

### Opção 3: GitHub Pages (Grátis)
1. Crie repositório no GitHub
2. Faça push dos arquivos
3. Ative GitHub Pages nas configurações

## ✅ Checklist Pré-Deploy

- [ ] Credenciais Firebase atualizadas em TODOS os arquivos
- [ ] Regras do Firestore configuradas
- [ ] Regras do Storage configuradas
- [ ] Foto do professor adicionada (ou placeholder)
- [ ] Testado localmente
- [ ] Email/senha de teste criados
- [ ] Perfil de professor configurado
- [ ] PayPal configurado (se usar pagamentos)

## 🔧 Customização Rápida

### Mudar Cores:
Em `teacher-settings.html`, procure por `:root` e altere:

```css
:root {
  --primary: #1a73e8;      /* Azul principal */
  --secondary: #34a853;    /* Verde */
  --danger: #ea4335;       /* Vermelho */
  --warning: #fbbc04;      /* Amarelo */
}
```

### Mudar Nome da Plataforma:
Procure por "📚 Plataforma de Ensino" e substitua

### Adicionar Logo:
Substitua o emoji 📚 por `<img src="logo.png">`

## 🆘 Problemas Comuns

### "Erro ao fazer login"
- ✅ Verifique se Email/Password está ativo no Firebase
- ✅ Confirme que as credenciais estão corretas

### "Foto não carrega"
- ✅ Verifique regras do Storage
- ✅ Tamanho máximo: 5MB
- ✅ Formatos: JPG, PNG, WebP

### "Dados não salvam"
- ✅ Verifique regras do Firestore
- ✅ Confirme que está autenticado
- ✅ Veja console do navegador (F12)

### "Chat não funciona"
- ✅ Regras do Firestore para messages
- ✅ Ambos usuários devem estar logados

## 📊 Monitoramento

No Firebase Console você pode ver:
- 👥 Usuários ativos
- 📊 Leituras/escritas do Firestore
- 💾 Uso de Storage
- 📈 Analytics (se ativar)

## 🔐 Segurança

### IMPORTANTE:
1. **NUNCA** exponha suas credenciais em repositórios públicos
2. Use variáveis de ambiente se possível
3. Ative regras de segurança no Firebase
4. Monitore uso para detectar abusos

### Para Produção:
- Ative reCAPTCHA no Authentication
- Configure domínios autorizados
- Ative rate limiting
- Faça backup regular do Firestore

## 📚 Recursos Úteis

- [Documentação Firebase](https://firebase.google.com/docs)
- [Firestore Queries](https://firebase.google.com/docs/firestore/query-data/queries)
- [Storage Upload](https://firebase.google.com/docs/storage/web/upload-files)

## 🎓 Aprendizado

### Para entender melhor:
1. Leia os comentários no código
2. Use o console do navegador (F12)
3. Veja a aba Network para requisições
4. Explore o Firestore no console

## 🚀 Melhorias Futuras

Quando quiser expandir:
- [ ] Sistema de avaliações (⭐⭐⭐⭐⭐)
- [ ] Integração com Stripe
- [ ] Notificações push
- [ ] App mobile (React Native)
- [ ] Dashboard analytics avançado
- [ ] Sistema de cupons/descontos

## 💡 Dicas de Sucesso

1. **Complete o perfil 100%** - Quanto mais completo, mais conversões
2. **Adicione vídeo** - Aumenta em 40% as conversões
3. **Preços competitivos** - Pesquise a concorrência
4. **Responda rápido** - Alunos valorizam rapidez
5. **Fotos profissionais** - Primeira impressão importa

---

**Pronto! Em 5 minutos você tem uma plataforma funcional! 🎉**

Dúvidas? Consulte o README-PLATAFORMA-COMPLETA.md
