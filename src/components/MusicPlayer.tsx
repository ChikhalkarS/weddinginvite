import {weddingData} from '../data/weddingData';

export function MusicPlayer(){
  return <audio autoPlay loop src={weddingData.music.url}/>
}
