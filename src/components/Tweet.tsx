import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'

interface TweetProps {
  content : string
}

export function Tweet(props: TweetProps) {
  return (
    <a href="#" className='tweet'>
      <img src="https://github.com/Teuuzim.png" alt='Matheus Vaz'/>
      <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>Matheus Vaz</strong>
          <span>@MaatheeusVaaz</span>
        </div>

        <p>{props.content}</p>
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
