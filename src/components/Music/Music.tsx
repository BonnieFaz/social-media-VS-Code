import { Heading } from "../Index";
import MusicElem from "./MusicElem";

const Music = () => {
    return (
        <div className="MusicBlock">
        <div className="MusicBlock__title">
          <Heading text="Вы недавно слушали" variant="h2"/>
          <span>123</span>
        </div>
        <MusicElem albunImg="./img/music/album-1.png" musicName="Pieces"
        musicAuthor="Andrew Belle" isActive={true}/>
        <MusicElem albunImg="./img/music/album-2.png" musicName="In the Wind"
        musicAuthor="On-The-Go" isActive={false}/>
        <MusicElem albunImg="./img/music/album-3.png" musicName="On you own"
        musicAuthor="Meltt" isActive={true}/>
        <MusicElem albunImg="./img/music/album-4.png" musicName="Infinity"
        musicAuthor="James Young" isActive={false}/>
        <MusicElem albunImg="./img/music/album-5.png" musicName="Let me follow"
        musicAuthor=">Son Lux" isActive={true}/>
        <MusicElem albunImg="./img/music/album-6.png" musicName="Youth"
        musicAuthor="Glass Animals" isActive={true}/>
      </div>
    );
};

export default Music;