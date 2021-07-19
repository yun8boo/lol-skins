import { useState, useEffect } from 'react';
import Image from 'next/image'

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
    <Image width={width} height={width * 0.5898} key={skin.id} alt="" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chanpionId}_${skin.num}.jpg`}/>
  )
}

export default ChanpionSplashImg