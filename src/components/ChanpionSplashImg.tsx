import { useState, useEffect } from 'react';

interface ChanpionLoadingImgProps {
  chanpionId: string
  skin: any
}

const ChanpionSplashImg = ({chanpionId, skin}: ChanpionLoadingImgProps) => {
  const [width, setwidth] = useState(0)
  useEffect(() => {
    setwidth(window.innerWidth);
  }, [])
  return (
    <img width={width} key={skin.id} alt="" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chanpionId}_${skin.num}.jpg`}/>
  )
}

export default ChanpionSplashImg