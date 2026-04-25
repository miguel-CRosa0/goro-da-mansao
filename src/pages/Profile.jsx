import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { User, Mail, Lock, Camera, Save, ArrowLeft, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Profile = () => {
  const { user, updateProfile } = useAuth()
  const [username, setUsername] = useState(user?.username || '')
  const [email, setEmail] = useState(user?.email || '')
  const [password, setPassword] = useState('')
  const [profileImage, setProfileImage] = useState(user?.profile_image || '')
  const [showCamera, setShowCamera] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  
  useEffect(() => {
    if (user) {
      setUsername(user.username || '')
      setEmail(user.email || '')
      setProfileImage(user.profile_image || '')
    }
  }, [user])
  
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  const handleSave = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })
    try {
      await updateProfile({ username, email, password, profile_image: profileImage })
      setMessage({ type: 'success', text: 'Perfil atualizado com sucesso!' })
      setPassword('')
    } catch (error) {
      setMessage({ type: 'error', text: 'Erro ao atualizar perfil.' })
    } finally {
      setLoading(false)
    }
  }

  const startCamera = async () => {
    setShowCamera(true)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (err) {
      console.error("Erro ao acessar a câmera: ", err)
      setMessage({ type: 'error', text: 'Não foi possível acessar a câmera.' })
      setShowCamera(false)
    }
  }

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks()
      tracks.forEach(track => track.stop())
    }
    setShowCamera(false)
  }

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d')
      context.drawImage(videoRef.current, 0, 0, 400, 300)
      const dataUrl = canvasRef.current.toDataURL('image/png')
      setProfileImage(dataUrl)
      stopCamera()
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-32 px-6 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[14px] font-medium text-olive-gray dark:text-warm-silver hover:text-primary transition-colors mb-12 font-body">
          <ArrowLeft size={16} />
          Voltar para Início
        </Link>

        <header className="mb-12 border-b border-border-cream dark:border-dark-surface pb-10">
          <h1 className="font-display text-4xl text-near-black dark:text-ivory mb-4">Editar Perfil</h1>
          <p className="text-olive-gray dark:text-warm-silver font-body">Personalize sua identidade na Mansão.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Avatar Section */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="relative group">
              <div className="w-40 h-40 rounded-[32px] overflow-hidden bg-ivory dark:bg-dark-surface border-2 border-border-cream dark:border-dark-surface flex items-center justify-center shadow-sm group-hover:border-primary/30 transition-all">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User size={64} className="text-stone-gray" />
                )}
              </div>
              <button 
                onClick={startCamera}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all"
                title="Tirar Foto"
              >
                <Camera size={20} />
              </button>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:col-span-8">
            <form onSubmit={handleSave} className="space-y-8">
              {message.text && (
                <div className={`p-4 rounded-xl text-sm font-body border ${
                  message.type === 'success' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-red-600 border-red-100'
                }`}>
                  {message.text}
                </div>
              )}

              <div className="space-y-6 font-body">
                <div>
                  <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">Nome de Usuário</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-gray">
                      <User size={18} />
                    </span>
                    <input 
                      type="text" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="input-claude pl-12" 
                      placeholder="Nome de usuário" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">E-mail</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-gray">
                      <Mail size={18} />
                    </span>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-claude pl-12" 
                      placeholder="seu@email.com" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">Nova Senha</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-gray">
                      <Lock size={18} />
                    </span>
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-claude pl-12" 
                      placeholder="Deixe em branco para manter" 
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn-terracotta w-full justify-center py-4 text-sm font-bold uppercase tracking-widest"
              >
                {loading ? 'Salvando...' : 'Salvar Alterações'}
                <Save size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Camera Modal */}
      {showCamera && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-near-black/90 backdrop-blur-sm p-6">
          <div className="bg-ivory dark:bg-dark-surface rounded-[40px] p-8 max-w-lg w-full relative border border-white/5">
            <button 
              onClick={stopCamera}
              className="absolute top-6 right-6 text-stone-gray hover:text-near-black dark:hover:text-ivory transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="font-display text-2xl mb-8 text-near-black dark:text-ivory">Capturar Foto</h3>
            
            <div className="aspect-video bg-near-black rounded-3xl overflow-hidden mb-8">
              <video ref={videoRef} autoPlay className="w-full h-full object-cover" />
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={capturePhoto}
                className="flex-1 btn-terracotta justify-center py-4"
              >
                Capturar Agora
              </button>
              <button 
                onClick={stopCamera}
                className="px-8 btn-secondary"
              >
                Cancelar
              </button>
            </div>
            <canvas ref={canvasRef} width="400" height="300" className="hidden" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
