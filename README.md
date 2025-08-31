# Chatbot Manna Bridge

Um chatbot de atendimento amigável, acolhedor e cristocêntrico para a plataforma Manna Bridge, que conecta mantenedores e missionários.

## 🎯 Funcionalidades

- **Botão flutuante responsivo** que aparece no canto inferior direito
- **Interface de chat moderna** com animações suaves
- **Fluxos conversacionais inteligentes** para diferentes perfis:
  - Missionários buscando apoio
  - Mantenedores querendo contribuir
  - Curiosos sobre a plataforma
- **FAQ integrado** com respostas automáticas
- **Design responsivo** para desktop e mobile
- **Tema cristocêntrico** com linguagem acolhedora

## 🚀 Deploy na Vercel

### Pré-requisitos
- Conta na [Vercel](https://vercel.com)
- Repositório Git (GitHub, GitLab ou Bitbucket)

### Passos para Deploy

1. **Faça upload do código para um repositório Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [URL_DO_SEU_REPOSITORIO]
   git push -u origin main
   ```

2. **Conecte o repositório na Vercel**
   - Acesse [vercel.com](https://vercel.com) e faça login
   - Clique em "New Project"
   - Importe seu repositório
   - A Vercel detectará automaticamente que é um projeto Vite/React

3. **Configurações automáticas**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Clique em "Deploy"
   - Aguarde o processo de build e deploy
   - Sua aplicação estará disponível em uma URL da Vercel

### Deploy Alternativo (CLI)

Se preferir usar a CLI da Vercel:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel --prod
```

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 📱 Responsividade

O chatbot foi desenvolvido com foco em responsividade:
- **Desktop**: Janela de chat de 384px de largura
- **Mobile**: Adapta-se à largura da tela com margens adequadas
- **Tablet**: Interface otimizada para telas médias

## 🎨 Personalização

### Cores e Tema
As cores podem ser personalizadas no arquivo `src/App.css`:
- Gradiente principal: `from-blue-600 to-purple-600`
- Cores de fundo: `from-blue-50 via-white to-purple-50`

### Mensagens e Fluxos
Os textos e fluxos conversacionais estão no componente `src/components/ChatBot.jsx` e podem ser facilmente modificados.

## 📞 Contato e Suporte

Para dúvidas sobre implementação ou personalização, entre em contato com a equipe de desenvolvimento.

---

**Manna Bridge** - Conectando corações e missões 🙏

