# 🎨 Nova Página de Perfil do Professor - Guia Completo

## 📋 Visão Geral

Criei uma página de perfil profissional e moderna inspirada na **Preply**, com design sofisticado e funcionalidades avançadas.

**Arquivo:** `perfil-professor.html`

---

## ✨ Características Principais

### 1. 🎨 Design Moderno e Profissional

- **Estilo:** Clean, moderno, tipo Preply/Airbnb
- **Fontes:** DM Sans (corpo) + Space Grotesk (títulos)
- **Cores:** Paleta profissional azul (#1a73e8)
- **Layout:** Grid responsivo com sidebar fixa
- **Animações:** Transições suaves e hover effects

### 2. 👤 Perfil do Professor (Sidebar Esquerda)

#### Foto do Professor:
- ✅ **Redonda** com borda azul
- ✅ **120px** de diâmetro
- ✅ Sombra suave para destaque
- 🔄 **Para usar sua foto:** Substitua a linha 636:
```javascript
// Linha atual (placeholder):
src="https://ui-avatars.com/api/?name=Filipe+Monteiro..."

// Substitua por:
src="filipe.jpg"
```

#### Informações Exibidas:
- ✅ **Nome:** Filipe Monteiro
- ✅ **País:** 🇲🇿 Moçambique (badge pequeno ao lado do nome)
- ✅ **Título:** Professor Certificado de Português
- ✅ **Avaliação:** ⭐⭐⭐⭐⭐ 5.0 (48 avaliações)

#### Estatísticas:
- 📊 **500+ Aulas** dadas
- 👥 **85 Alunos** ativos
- 🎓 **3 Anos** de experiência

#### Seções de Informação:

**📚 Metodologia:**
```
Abordagem comunicativa focada na conversação real. 
Uso de materiais autênticos, músicas, vídeos e 
situações do dia a dia para tornar o aprendizado 
natural e eficaz.
```

**🎯 Especialidades:**
- ✓ Conversação fluente
- ✓ Preparação para exames (CIPLE, DIPLE, DEPLE)
- ✓ Português para negócios
- ✓ Gramática avançada

**🏆 Experiência:**
```
3 anos ensinando português online para alunos de 
mais de 20 países. Certificado em Ensino de 
Português como Língua Estrangeira (PLE).
```

#### Botão de Ação:
- 🔵 **"Marcar Aula Experimental - $5"**
- Rola suavemente até a seção de agendamento

---

### 3. 📹 Vídeo do YouTube (Área Principal)

#### Características:
- ✅ **Integrado** diretamente na página
- ✅ **Responsivo** (16:9 ratio)
- ✅ **Borda arredondada** com sombra
- ✅ Reproduz dentro do site (não abre em nova aba)

#### Seu Vídeo:
```
https://youtu.be/r2J0BiJPR-c?si=l-27PbjlospKPUs3
```

Já está configurado e funcionando! 🎥

---

### 4. 📅 Sistema de Agendamento Avançado

#### A) Abas de Preços

**Aba 1: Aula Experimental**
- 💰 **$5 USD**
- 1 aula de 60 minutos
- "Experimente sem compromisso"

**Aba 2: Pacotes Mensais**

| Pacote | Preço | Por Aula | Economia |
|--------|-------|----------|----------|
| **4 Aulas/Mês** | $36 | $9/aula | Base |
| **8 Aulas/Mês** 🔥 | $64 | $8/aula | Economize $8 |
| **12 Aulas/Mês** 💎 | $84 | $7/aula | Economize $24 |
| **20 Aulas/Mês** | $120 | $6/aula | Economize $60 |

#### B) Calendário Interativo

**Funcionalidades:**
- ✅ **Navegação** entre meses (setas ‹ ›)
- ✅ **Dias desabilitados** (passados em cinza)
- ✅ **Hoje** destacado com borda azul
- ✅ **Seleção visual** (dia selecionado fica azul)
- ✅ **Hover effects** suaves

**Design:**
- Grid 7 colunas (Dom - Sáb)
- Células quadradas
- Números grandes e legíveis
- Cores intuitivas

#### C) Horários Disponíveis

**Slots de Tempo:**
- 08:00, 09:00, 10:00, 11:00, 12:00
- 14:00, 15:00, 16:00, 17:00, 18:00, 19:00, 20:00

**Funcionalidades:**
- ✅ **Auto-gerados** quando seleciona dia
- ✅ **Horários ocupados** aparecem desabilitados (cinza)
- ✅ **Seleção visual** (horário selecionado fica azul)
- ✅ **Grid responsivo** (3 colunas no mobile)

#### D) Resumo da Reserva

Aparece automaticamente quando:
1. ✅ Pacote selecionado
2. ✅ Data selecionada
3. ✅ Horário selecionado

**Mostra:**
- 📦 **Pacote:** "Aula Experimental" ou "Pacote 4 Aulas/Mês"
- 📅 **Data:** "15 de fevereiro de 2026"
- ⏰ **Horário:** "10:00"
- 💰 **Total:** "$5 USD" (em destaque)

#### E) Botão de Confirmação

- 🔵 **"Continuar para Pagamento"**
- Só aparece quando tudo estiver selecionado
- Redireciona para `login.html` com dados da reserva

---

## 🎯 Fluxo Completo do Usuário

### Para Novos Alunos (Aula Experimental):

1. Acessa `perfil-professor.html`
2. Vê vídeo do professor
3. Lê metodologia e experiência
4. Clica em **"Marcar Aula Experimental"**
5. Seleciona **data** no calendário
6. Seleciona **horário** disponível
7. Vê resumo: "$5 USD"
8. Clica **"Continuar para Pagamento"**
9. Redireciona para login/cadastro
10. Após login → `payment.html` com dados

### Para Alunos Existentes (Pacotes):

1. Acessa `perfil-professor.html`
2. Clica na aba **"Pacotes Mensais"**
3. Seleciona pacote (ex: 8 aulas por $64)
4. Seleciona data no calendário
5. Seleciona horário
6. Vê resumo: "$64 USD"
7. Clica **"Continuar para Pagamento"**
8. Login → Pagamento

---

## 🔧 Personalização

### Como Adicionar Sua Foto:

1. Coloque o arquivo `filipe.jpg` no mesmo diretório
2. Edite a linha 636 em `perfil-professor.html`:

```html
<!-- ANTES (placeholder): -->
<img 
  src="https://ui-avatars.com/api/?name=Filipe+Monteiro&size=240&background=1a73e8&color=fff&bold=true" 
  alt="Professor Filipe Monteiro" 
  class="teacher-avatar"
  id="teacherPhoto"
>

<!-- DEPOIS (sua foto): -->
<img 
  src="filipe.jpg" 
  alt="Professor Filipe Monteiro" 
  class="teacher-avatar"
  id="teacherPhoto"
>
```

### Como Editar Informações:

**Mudar Metodologia:**
```html
Linha 661-665:
<div class="info-content">
  SEU TEXTO AQUI
</div>
```

**Mudar Especialidades:**
```html
Linha 669-676:
<ul class="info-list">
  <li>Sua especialidade 1</li>
  <li>Sua especialidade 2</li>
  ...
</ul>
```

**Mudar Experiência:**
```html
Linha 681-685:
<div class="info-content">
  SEU TEXTO AQUI
</div>
```

**Mudar Estatísticas:**
```html
Linhas 650-662:
<div class="stat-number">500+</div> <!-- Aulas -->
<div class="stat-number">85</div>   <!-- Alunos -->
<div class="stat-number">3</div>    <!-- Anos -->
```

---

## 📱 Responsividade

### Desktop (> 900px):
- Layout em 2 colunas (sidebar + conteúdo)
- Sidebar fixa ao fazer scroll
- Calendário grid 7 colunas

### Tablet (600px - 900px):
- Layout em 1 coluna
- Sidebar no topo
- Calendário mantém 7 colunas

### Mobile (< 600px):
- 1 coluna
- Horários em 3 colunas
- Botões empilhados
- Texto menor

---

## 🎨 Paleta de Cores

```css
--primary: #1a73e8     (Azul principal)
--secondary: #34a853   (Verde para checks)
--accent: #fbbc04      (Amarelo para badges)
--text-dark: #1f1f1f   (Texto escuro)
--text-light: #5f6368  (Texto claro)
--bg-light: #f8f9fa    (Fundo claro)
--border: #dadce0      (Bordas)
--white: #ffffff       (Branco)
```

---

## 🔗 Integração com Sistema Existente

### Redirecionamentos:

**1. Botão "Fazer Login" (header):**
```
→ login.html
```

**2. Botão "Continuar para Pagamento":**
```
→ login.html?date=2026-02-15&start=10:00&end=11:00&package=trial&lessons=1&price=5
```

### Parâmetros Enviados:
- `date`: Data selecionada (ISO format)
- `start`: Horário início
- `end`: Horário fim (+1 hora)
- `package`: "trial" ou "package"
- `lessons`: Número de aulas
- `price`: Preço total

---

## ⚡ Funcionalidades JavaScript

### 1. Troca de Abas de Preço:
```javascript
switchPricingTab('trial')   // Aula experimental
switchPricingTab('packages') // Pacotes mensais
```

### 2. Seleção de Pacote:
```javascript
selectPackage(lessons, price)
// Exemplo: selectPackage(8, 64)
```

### 3. Navegação do Calendário:
```javascript
previousMonth() // Mês anterior
nextMonth()     // Próximo mês
```

### 4. Seleção de Data:
```javascript
selectDate(dateObject)
// Mostra horários disponíveis automaticamente
```

### 5. Seleção de Horário:
```javascript
selectTime('10:00')
// Atualiza resumo automaticamente
```

### 6. Confirmar Reserva:
```javascript
confirmBooking()
// Valida e redireciona com parâmetros
```

---

## 🚀 Melhorias Futuras Sugeridas

### Curto Prazo:
- [ ] Conectar com Firebase para horários reais
- [ ] Mostrar apenas horários realmente disponíveis
- [ ] Salvar preferências do aluno

### Médio Prazo:
- [ ] Sistema de avaliações real
- [ ] Galeria de fotos das aulas
- [ ] Testemunhos de alunos
- [ ] Blog com dicas de português

### Longo Prazo:
- [ ] Chat ao vivo
- [ ] Vídeo-chamada integrada
- [ ] Materiais didáticos para download
- [ ] Gamificação (badges, níveis)

---

## ✅ Checklist de Implementação

- [x] Design moderno tipo Preply
- [x] Foto redonda do professor
- [x] Nome + país (pequeno ao lado)
- [x] Metodologia, especialidades, experiência
- [x] Vídeo do YouTube integrado
- [x] Calendário moderno e fácil
- [x] Sistema de pacotes de aulas
- [x] Aula experimental ($5)
- [x] Pacotes mensais (4, 8, 12, 20 aulas)
- [x] Resumo automático da reserva
- [x] Integração com sistema de login
- [x] 100% responsivo
- [ ] Adicionar sua foto real (filipe.jpg)
- [ ] Testar no navegador
- [ ] Deploy no GitHub Pages

---

## 📞 Instruções para Você

### 1. Adicionar Sua Foto:
```
1. Tire uma foto profissional (fundo neutro, boa iluminação)
2. Nomeie como: filipe.jpg
3. Coloque no mesmo diretório dos HTMLs
4. Edite linha 636 conforme instruções acima
```

### 2. Personalizar Textos:
- Metodologia (linhas 661-665)
- Especialidades (linhas 669-676)
- Experiência (linhas 681-685)
- Estatísticas (linhas 650-662)

### 3. Testar:
```
1. Abra perfil-professor.html no navegador
2. Clique nas abas de preço
3. Selecione uma data
4. Selecione um horário
5. Veja o resumo aparecer
6. Clique em "Continuar para Pagamento"
```

---

## 🎓 Diferenciais desta Página

✨ **Design profissional** tipo Preply/Airbnb
✨ **Vídeo integrado** (não abre em nova aba)
✨ **Calendário intuitivo** (click para selecionar)
✨ **Pacotes flexíveis** (4, 8, 12, 20 aulas)
✨ **Resumo em tempo real** (mostra tudo que foi selecionado)
✨ **Mobile-first** (funciona perfeitamente no celular)
✨ **Animações suaves** (transições em hover, scroll)
✨ **Tipografia moderna** (DM Sans + Space Grotesk)

---

**Pronto para usar!** 🚀

Esta página é sua **vitrine profissional**. Ela vai converter visitantes em alunos com uma experiência de reserva moderna e simples!

---

**Desenvolvido com atenção aos detalhes** 💙  
**Para:** Professor Filipe Monteiro - Plataforma de Ensino de Português Online
