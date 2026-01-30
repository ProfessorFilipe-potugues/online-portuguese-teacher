# 🎓 Plataforma de Ensino Estilo Preply - Documentação Completa

## 📋 Visão Geral

Esta é uma plataforma completa de ensino online onde **professores têm controle total** sobre seus perfis, preços, disponibilidade e configurações - exatamente como funciona na Preply.

## 🌟 Características Principais

### Para o Professor:
✅ **Controle Total do Perfil** - Edite todas as informações pessoais  
✅ **Gerenciamento de Preços** - Defina e altere preços livremente  
✅ **Calendário de Disponibilidade** - Controle total dos horários  
✅ **Dashboard Completo** - Visualize alunos, aulas e pagamentos  
✅ **Sistema de Chat** - Comunicação direta com alunos  
✅ **Estatísticas** - Acompanhe o desempenho  
✅ **Métodos de Pagamento** - Configure como receber

### Para o Aluno:
✅ **Visualizar Perfil do Professor** - Veja informações completas  
✅ **Agendar Aulas** - Escolha data e horário  
✅ **Diferentes Pacotes** - Aula experimental ou pacotes mensais  
✅ **Sistema de Pagamento** - PayPal integrado  
✅ **Chat com Professor** - Tire dúvidas  

## 📁 Estrutura de Arquivos

```
/
├── index.html                      # Landing page pública
├── login.html                      # Login/Cadastro
├── cadastro-aluno.html            # Formulário de perfil do aluno
│
├── PROFESSOR/
│   ├── dashboard-teacher-enhanced.html  # Dashboard principal do professor ⭐
│   ├── teacher-settings.html           # Painel de configurações completo ⭐⭐⭐
│   └── perfil-professor.html           # Perfil público do professor
│
├── ALUNO/
│   ├── dashboard-student.html     # Dashboard do aluno
│   ├── pricing.html               # Página de preços/pacotes
│   └── payment.html               # Página de pagamento
│
└── COMPARTILHADO/
    └── chat.html                  # Sistema de mensagens
```

## 🚀 Novo Arquivo Principal: `teacher-settings.html`

Este é o **coração do sistema** onde o professor controla TUDO:

### 🔧 Seções Disponíveis:

#### 1️⃣ **PERFIL**
- Upload de foto de perfil
- Nome completo
- País
- Especialização
- Idiomas
- Anos de experiência

#### 2️⃣ **PREÇOS** 💰
O professor pode definir:
- Preço da aula experimental (ex: $5)
- Preço por aula avulsa (ex: $10)
- Pacote 4 aulas/mês (ex: $36)
- Pacote 8 aulas/mês (ex: $64)
- Pacote 12 aulas/mês (ex: $84)
- Pacote 20 aulas/mês (ex: $120)

**Todos os preços podem ser alterados a qualquer momento!**

#### 3️⃣ **DISPONIBILIDADE** 📅
- Grid visual por dia da semana
- Horários de 08:00 às 20:00
- Ativar/desativar dias completos
- Selecionar horários específicos
- Sistema de toggle fácil

#### 4️⃣ **SOBRE MIM** 📝
- Descrição do perfil (500 caracteres)
- Metodologia de ensino
- Formação e certificações
- Link de vídeo de apresentação (YouTube)

#### 5️⃣ **ÁREAS DE ENSINO** 📚

**Níveis:**
- Iniciante (A1-A2)
- Intermediário (B1-B2)
- Avançado (C1-C2)

**Especialidades:**
- Conversação / Fluência Oral
- Preparação para Exames
- Português para Negócios
- Português para Viagens
- Aulas para Crianças
- Gramática e Escrita
- Literatura e Cultura

#### 6️⃣ **PAGAMENTOS** 💳
Configure múltiplos métodos:
- PayPal (email + link PayPal.me)
- Transferência Bancária (NIB/IBAN)
- M-Pesa (Moçambique)
- WhatsApp para pagamento

#### 7️⃣ **NOTIFICAÇÕES** 🔔
Controle o que receber:
- Novas reservas
- Mensagens de alunos
- Lembretes de aulas
- Pagamentos recebidos
- Newsletter

#### 8️⃣ **ESTATÍSTICAS** 📈
Visualize:
- Visualizações do perfil
- Total de alunos
- Aulas ministradas
- Avaliação média

#### 9️⃣ **CONTA** ⚙️
- Alterar senha
- Visibilidade do perfil
- Aceitar novos alunos
- Excluir conta

## 🎨 Design e UX

### Interface Moderna:
- ✨ Design clean e profissional
- 📱 Totalmente responsivo
- 🎯 Navegação intuitiva por sidebar
- 💾 Salvamento individual por seção
- ⚡ Feedback visual instantâneo

### Cores:
- **Primary:** #1a73e8 (Azul Google)
- **Secondary:** #34a853 (Verde)
- **Warning:** #fbbc04 (Amarelo)
- **Danger:** #ea4335 (Vermelho)

## 🔐 Segurança e Firebase

### Integração Firebase:
- ✅ Authentication (login/registro)
- ✅ Firestore (banco de dados)
- ✅ Storage (upload de imagens)
- ✅ Regras de segurança necessárias

### Estrutura do Firestore:

```javascript
/users/{userId}
{
  // Perfil
  name: "João Silva",
  email: "joao@email.com",
  role: "teacher",
  country: "Portugal",
  specialty: "Professor de Português",
  languages: "Português, Inglês",
  experience: 5,
  photoURL: "https://...",
  
  // Sobre
  bio: "Descrição...",
  methodology: "Como ensino...",
  credentials: "Formações...",
  videoUrl: "https://youtube.com/...",
  
  // Preços
  pricing: {
    trial: 5,
    single: 10,
    package4: 36,
    package8: 64,
    package12: 84,
    package20: 120
  },
  
  // Disponibilidade
  availability: {
    segunda: {
      active: true,
      hours: ["09:00", "10:00", "14:00"]
    },
    // ... outros dias
  },
  
  // Especialidades
  subjects: {
    beginner: true,
    intermediate: true,
    advanced: false,
    conversation: true,
    exams: true,
    // ...
  },
  
  // Pagamento
  payment: {
    paypalEmail: "professor@email.com",
    paypalMeLink: "https://paypal.me/professor",
    bankName: "Banco ABC",
    bankAccount: "PT50...",
    // ...
  },
  
  // Stats
  stats: {
    views: 150,
    students: 25,
    lessons: 180,
    rating: 4.9
  },
  
  createdAt: timestamp,
  updatedAt: timestamp
}
```

## 🔥 Como Usar

### Para o Professor:

1. **Primeiro Acesso:**
   - Acesse `login.html`
   - Crie conta como "Professor"
   - Será redirecionado para o dashboard

2. **Configurar Perfil:**
   - Clique em "⚙️ Configurações" no dashboard
   - Preencha todas as seções
   - Salve cada seção individualmente

3. **Gerenciar Aulas:**
   - Use o dashboard para ver alunos e aulas
   - Responda mensagens no chat
   - Acompanhe pagamentos

### Para o Aluno:

1. **Encontrar Professor:**
   - Acesse `perfil-professor.html`
   - Veja informações, preços e disponibilidade
   - Escolha um pacote

2. **Agendar Aula:**
   - Selecione data e horário
   - Faça login/cadastro
   - Proceda com pagamento

3. **Após Agendamento:**
   - Acesse o dashboard de aluno
   - Veja suas aulas
   - Converse com o professor no chat

## 📊 Fluxo de Dados

```mermaid
Professor → teacher-settings.html → Firebase
                                      ↓
                              Dados Salvos
                                      ↓
                            perfil-professor.html (Público)
                                      ↓
                              Aluno Visualiza
                                      ↓
                              Agenda Aula
                                      ↓
                              Pagamento
                                      ↓
                      Notificação para Professor
```

## 🎯 Próximos Passos Recomendados

### Funcionalidades Adicionais:

1. **Sistema de Avaliações** ⭐
   - Alunos avaliam professores
   - Média exibida no perfil

2. **Calendário Avançado** 📅
   - Visualização mensal/semanal
   - Integração com Google Calendar

3. **Vídeo Chamadas** 📹
   - Integração com Zoom/Google Meet
   - Links automáticos nas aulas

4. **Material Didático** 📚
   - Upload de PDFs
   - Exercícios e testes

5. **Relatórios Detalhados** 📊
   - Gráficos de desempenho
   - Relatórios mensais

6. **Certificados** 🎓
   - Geração automática
   - Após conclusão de cursos

7. **Sistema de Comissão** 💰
   - Cálculo automático de comissões
   - Relatórios financeiros

## 🐛 Troubleshooting

### Problemas Comuns:

**1. "Erro ao salvar dados"**
- Verifique as regras do Firestore
- Certifique-se de estar autenticado

**2. "Imagem não carrega"**
- Verifique as regras do Storage
- Tamanho máximo: 5MB

**3. "Disponibilidade não aparece"**
- Certifique-se de salvar após marcar horários
- Verifique console do navegador

## 🔒 Regras Firebase Necessárias

### Firestore Rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users podem ler e escrever seus próprios dados
    match /users/{userId} {
      allow read: if true; // Perfil público
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Appointments
    match /appointments/{appointmentId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update: if request.auth != null && 
        (request.auth.uid == resource.data.studentId || 
         request.auth.uid == resource.data.teacherId);
    }
    
    // Messages
    match /messages/{messageId} {
      allow read: if request.auth != null &&
        (request.auth.uid == resource.data.senderId || 
         request.auth.uid == resource.data.receiverId);
      allow create: if request.auth != null;
    }
  }
}
```

### Storage Rules:
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

## 📞 Suporte

Para dúvidas ou problemas:
- 📧 Email: suporte@plataforma.com
- 💬 WhatsApp: +258 XX XXX XXXX

## 📝 Licença

Este projeto é de código aberto para uso educacional e comercial.

---

**Desenvolvido com ❤️ para democratizar o ensino online**

Versão: 2.0  
Última atualização: Janeiro 2026
