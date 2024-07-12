import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'

export function Tweet() {
  return (
    <a href="#" className='tweet'>
      <img src="https://github.com/Teuuzim.png" alt='Matheus Vaz'/>
      <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>Matheus Vaz</strong>
          <span>@MaatheeusVaaz</span>
        </div>

        <p>
        Node.js 22: 🚀 V8 atualizado, otimizações de performance e garbage collection, sistema de permissões experimental, suporte a import assertions, API de testes melhorada, top-level await, pattern matching e melhorias no sistema de arquivos. Mais seguro e eficiente! #NodeJS #Update
        </p>
        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle />
            20
          </button>
          <button type='button'>
            <ArrowsClockwise />
            20
          </button>
          <button type='button'>
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
    )
} 
