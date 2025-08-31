import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { MessageCircle, X, Send, Heart, Users, Shield } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import '../App.css'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [currentFlow, setCurrentFlow] = useState('welcome')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Mensagem de boas-vindas automática
      setTimeout(() => {
        addBotMessage("Olá! Que alegria ter você aqui na Manna Bridge! 🙏 Sou seu assistente virtual e estou aqui para ajudar a conectar corações e missões. Como posso te guiar hoje?")
        setTimeout(() => {
          showProfileOptions()
        }, 1500)
      }, 500)
    }
  }, [isOpen])

  const addBotMessage = (text, options = null) => {
    const message = {
      id: Date.now(),
      text,
      sender: 'bot',
      timestamp: new Date(),
      options
    }
    setMessages(prev => [...prev, message])
  }

  const addUserMessage = (text) => {
    const message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, message])
  }

  const showProfileOptions = () => {
    const options = [
      { id: 'missionary', text: 'Missionário(a) buscando apoio', icon: Heart },
      { id: 'supporter', text: 'Mantenedor(a) querendo contribuir', icon: Users },
      { id: 'curious', text: 'Apenas curioso(a) sobre a Manna Bridge', icon: Shield }
    ]
    addBotMessage("Para que eu possa te ajudar da melhor forma, você se identifica como:", options)
  }

  const handleProfileSelection = (profileType) => {
    const profileTexts = {
      missionary: 'Missionário(a) buscando apoio',
      supporter: 'Mantenedor(a) querendo contribuir',
      curious: 'Apenas curioso(a) sobre a Manna Bridge'
    }
    
    addUserMessage(profileTexts[profileType])
    setCurrentFlow(profileType)
    
    setTimeout(() => {
      switch(profileType) {
        case 'missionary':
          handleMissionaryFlow()
          break
        case 'supporter':
          handleSupporterFlow()
          break
        case 'curious':
          handleCuriousFlow()
          break
      }
    }, 500)
  }

  const handleMissionaryFlow = () => {
    addBotMessage("Que benção ter você aqui! 🌟 Entendemos os desafios da missão e queremos ser seu suporte. Na Manna Bridge, você encontra recursos financeiros, apoio emocional e uma comunidade que ora e cuida de você.")
    
    setTimeout(() => {
      const options = [
        { id: 'register', text: 'Iniciar meu cadastro', action: 'register_missionary' },
        { id: 'learn_support', text: 'Saber mais sobre o apoio', action: 'learn_support' },
        { id: 'contact_team', text: 'Falar com um cuidador', action: 'contact_team' }
      ]
      addBotMessage("Para se cadastrar e acessar todo o apoio que a Manna Bridge oferece, você pode:", options)
    }, 2000)
  }

  const handleSupporterFlow = () => {
    addBotMessage("Seu coração generoso é a força que impulsiona a missão! 💝 Na Manna Bridge, sua contribuição faz a diferença real na vida de missionários dedicados.")
    
    setTimeout(() => {
      const options = [
        { id: 'donate', text: 'Contribuir financeiramente', action: 'donate' },
        { id: 'emotional_support', text: 'Oferecer apoio emocional/espiritual', action: 'emotional_support' },
        { id: 'transparency', text: 'Ver nossa transparência', action: 'transparency' }
      ]
      addBotMessage("Você pode apoiar de diversas formas:", options)
    }, 2000)
  }

  const handleCuriousFlow = () => {
    addBotMessage("É ótimo ter seu interesse em nossa visão! ✨ A Manna Bridge é mais que uma plataforma; é um movimento de fé e apoio para que a Grande Comissão avance.")
    
    setTimeout(() => {
      const options = [
        { id: 'about', text: 'Conhecer nossa história e visão', action: 'about' },
        { id: 'testimonials', text: 'Ver testemunhos', action: 'testimonials' },
        { id: 'security', text: 'Entender nossa segurança', action: 'security' }
      ]
      addBotMessage("Para saber mais sobre nosso impacto e valores:", options)
    }, 2000)
  }

  const handleAction = (action) => {
    const actionTexts = {
      register_missionary: 'Iniciar meu cadastro',
      learn_support: 'Saber mais sobre o apoio',
      contact_team: 'Falar com um cuidador',
      donate: 'Contribuir financeiramente',
      emotional_support: 'Oferecer apoio emocional/espiritual',
      transparency: 'Ver nossa transparência',
      about: 'Conhecer nossa história e visão',
      testimonials: 'Ver testemunhos',
      security: 'Entender nossa segurança'
    }
    
    addUserMessage(actionTexts[action])
    
    setTimeout(() => {
      switch(action) {
        case 'register_missionary':
          addBotMessage("Perfeito! Para iniciar seu cadastro como missionário, você será direcionado para nossa página segura de cadastro. Lá você poderá fornecer suas informações e começar a receber o apoio que precisa. 🔗 [Link para Cadastro de Missionário]")
          break
        case 'learn_support':
          addBotMessage("Nossa plataforma oferece apoio integral: recursos financeiros mensais, acompanhamento emocional com cuidadores especializados, rede de intercessão, mentoria ministerial e suporte para emergências. Tudo com total transparência! 📋 [Link para 'Como Ajudamos Missionários']")
          break
        case 'contact_team':
          addBotMessage("Nossa equipe de cuidadores está pronta para conversar com você! Por favor, preencha nosso formulário com suas informações e entraremos em contato em até 24 horas. 📞 [Link para Formulário de Contato]")
          break
        case 'donate':
          addBotMessage("Que alegria saber do seu desejo de contribuir! Você pode fazer doações únicas ou mensais, escolher missionários específicos para apoiar e acompanhar o impacto da sua generosidade. 💳 [Link para Página de Doação]")
          break
        case 'emotional_support':
          addBotMessage("Seu apoio emocional e espiritual é fundamental! Você pode se tornar um cuidador, participar da rede de intercessão ou oferecer mentoria. Cada forma de cuidado fortalece a missão! 🤝 [Link para 'Seja um Cuidador']")
          break
        case 'transparency':
          addBotMessage("A transparência é nosso compromisso! Você pode acompanhar relatórios detalhados, ver como cada doação é utilizada e acessar nossas auditorias regulares. Confiança é a base de tudo! 📊 [Link para Página de Transparência]")
          break
        case 'about':
          addBotMessage("A Manna Bridge nasceu da visão de conectar corações generosos com missionários dedicados. Conheça nossa história, valores e como estamos transformando o apoio missionário! 📖 [Link para 'Sobre Nós']")
          break
        case 'testimonials':
          addBotMessage("Nada é mais poderoso que testemunhos reais! Veja como a Manna Bridge tem transformado vidas de missionários e tocado corações de mantenedores ao redor do mundo. 💬 [Link para Testemunhos]")
          break
        case 'security':
          addBotMessage("Sua segurança é nossa prioridade! Utilizamos criptografia avançada, auditorias regulares e os mais rigorosos padrões de proteção de dados. Você pode confiar plenamente! 🔒 [Link para Segurança e Transparência]")
          break
      }
      
      setTimeout(() => {
        showFAQOptions()
      }, 2000)
    }, 500)
  }

  const showFAQOptions = () => {
    const options = [
      { id: 'faq_transparency', text: 'Como garantem a transparência?', action: 'faq_transparency' },
      { id: 'faq_security', text: 'É seguro doar pela plataforma?', action: 'faq_security' },
      { id: 'faq_selection', text: 'Como os missionários são verificados?', action: 'faq_selection' },
      { id: 'faq_choose', text: 'Posso escolher quem apoiar?', action: 'faq_choose' },
      { id: 'contact_human', text: 'Falar com a equipe', action: 'contact_human' },
      { id: 'restart', text: 'Começar novamente', action: 'restart' }
    ]
    addBotMessage("Posso ajudar com mais alguma coisa? Aqui estão algumas perguntas frequentes:", options)
  }

  const handleFAQ = (action) => {
    const faqTexts = {
      faq_transparency: 'Como garantem a transparência?',
      faq_security: 'É seguro doar pela plataforma?',
      faq_selection: 'Como os missionários são verificados?',
      faq_choose: 'Posso escolher quem apoiar?',
      contact_human: 'Falar com a equipe',
      restart: 'Começar novamente'
    }
    
    addUserMessage(faqTexts[action])
    
    setTimeout(() => {
      switch(action) {
        case 'faq_transparency':
          addBotMessage("Na Manna Bridge, a transparência é um dos nossos pilares. Utilizamos um sistema robusto onde cada mantenedor pode acompanhar exatamente como sua doação está sendo utilizada, com relatórios detalhados e acesso a informações sobre os projetos e missionários apoiados. Nossas contas são auditadas regularmente para garantir a máxima integridade e confiança. 📊")
          break
        case 'faq_security':
          addBotMessage("Sim, a segurança dos seus dados e doações é nossa prioridade máxima! 🔒 Utilizamos tecnologias de criptografia avançadas e seguimos os mais rigorosos padrões de segurança para proteger todas as transações e informações pessoais. Você pode doar com total tranquilidade.")
          break
        case 'faq_selection':
          addBotMessage("Todos os missionários que buscam apoio na Manna Bridge passam por um rigoroso processo de seleção e verificação. ✅ Isso inclui análise de histórico ministerial, referências, alinhamento com nossos valores e comprovação de suas necessidades. Nosso objetivo é garantir que o apoio chegue a quem realmente está no campo, dedicando suas vidas à missão.")
          break
        case 'faq_choose':
          addBotMessage("Sim! A Manna Bridge oferece a flexibilidade para você escolher missionários ou projetos específicos para apoiar, de acordo com sua paixão e direcionamento. 🎯 Você terá acesso a perfis detalhados e poderá acompanhar o impacto direto da sua contribuição.")
          break
        case 'contact_human':
          addBotMessage("Se sua dúvida for mais complexa ou se você preferir um contato direto, nossa equipe está pronta para te atender! 📧 Você pode nos enviar um e-mail para contato@mannabridge.org ou preencher nosso formulário de contato. Responderemos o mais breve possível!")
          break
        case 'restart':
          setMessages([])
          setCurrentFlow('welcome')
          setTimeout(() => {
            addBotMessage("Olá novamente! 😊 Como posso te ajudar hoje?")
            setTimeout(() => {
              showProfileOptions()
            }, 1000)
          }, 500)
          return
      }
      
      setTimeout(() => {
        showFAQOptions()
      }, 2000)
    }, 500)
  }

  const handleOptionClick = (option) => {
    if (option.action) {
      if (option.action.startsWith('faq_') || option.action === 'contact_human' || option.action === 'restart') {
        handleFAQ(option.action)
      } else {
        handleAction(option.action)
      }
    } else if (option.id === 'missionary' || option.id === 'supporter' || option.id === 'curious') {
      handleProfileSelection(option.id)
    }
  }

  const handleSendMessage = (messageText = inputValue) => {
    if (messageText.trim()) {
      addUserMessage(messageText)
      setInputValue("")

      setTimeout(() => {
        // Lógica para processar a mensagem do usuário
        // Se o usuário digitou algo, tentar responder com base no contexto atual
        // ou oferecer opções relevantes.
        if (currentFlow === "welcome") {
          // Se ainda estiver no fluxo de boas-vindas, tentar identificar o perfil
          const lowerCaseMessage = messageText.toLowerCase()
          if (lowerCaseMessage.includes("missionário")) {
            handleProfileSelection("missionary")
          } else if (lowerCaseMessage.includes("mantenedor") || lowerCaseMessage.includes("contribuir")) {
            handleProfileSelection("supporter")
          } else if (lowerCaseMessage.includes("curioso") || lowerCaseMessage.includes("geral")) {
            handleProfileSelection("curious")
          } else {
            addBotMessage("Desculpe, não entendi. Por favor, selecione uma das opções ou digite 'recomeçar' para ver as opções de perfil novamente.")
            setTimeout(() => {
              showProfileOptions()
            }, 1000)
          }
        } else {
          // Se já estiver em um fluxo específico, tentar responder a perguntas frequentes
          const lowerCaseMessage = messageText.toLowerCase()
          if (lowerCaseMessage.includes("transparência")) {
            handleFAQ("faq_transparency")
          } else if (lowerCaseMessage.includes("segurança") || lowerCaseMessage.includes("seguro")) {
            handleFAQ("faq_security")
          } else if (lowerCaseMessage.includes("seleção") || lowerCaseMessage.includes("verificados")) {
            handleFAQ("faq_selection")
          } else if (lowerCaseMessage.includes("escolher") || lowerCaseMessage.includes("apoiar")) {
            handleFAQ("faq_choose")
          } else if (lowerCaseMessage.includes("contato") || lowerCaseMessage.includes("equipe")) {
            handleFAQ("contact_human")
          } else if (lowerCaseMessage.includes("recomeçar") || lowerCaseMessage.includes("início")) {
            handleFAQ("restart")
          } else {
            addBotMessage("Obrigado pela sua mensagem! 😊 Para te ajudar melhor, nossa equipe pode responder dúvidas mais específicas. Enquanto isso, posso te guiar com as opções abaixo:")
            setTimeout(() => {
              showFAQOptions()
            }, 1000)
          }
        }
      }, 500)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Botão flutuante */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Janela do chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)]"
          >
            <Card className="h-full flex flex-col shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Manna Bridge</h3>
                    <p className="text-sm text-white/80">Conectando corações e missões</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0">
                {/* Área de mensagens */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        
                        {/* Opções de resposta */}
                        {message.options && (
                          <div className="mt-3 space-y-2">
                            {message.options.map((option) => (
                              <Button
                                key={option.id}
                                onClick={() => handleOptionClick(option)}
                                variant="outline"
                                size="sm"
                                className="w-full justify-start text-left h-auto p-2 bg-white hover:bg-gray-50 border-gray-300 text-gray-700"
                              >
                                <div className="flex items-center space-x-2">
                                  {option.icon && <option.icon className="w-4 h-4" />}
                                  <span className="text-xs">{option.text}</span>
                                </div>
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Campo de entrada */}
                <div className="p-4 border-t bg-gray-50">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Digite sua mensagem..."
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSendMessage}
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
