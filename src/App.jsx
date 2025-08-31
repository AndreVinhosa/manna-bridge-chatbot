import ChatBot from './components/ChatBot.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Conteúdo principal da página (simulado) */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Manna Bridge
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Conectando corações generosos com missionários dedicados
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Para Mantenedores</h3>
              <p className="text-gray-600">Apoie missionários com transparência total e acompanhe o impacto da sua generosidade.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🙏</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Para Missionários</h3>
              <p className="text-gray-600">Receba apoio financeiro, emocional e espiritual para sua missão no campo.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Impacto Global</h3>
              <p className="text-gray-600">Juntos, estamos transformando vidas e levando esperança ao mundo inteiro.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chatbot */}
      <ChatBot />
    </div>
  )
}

export default App
