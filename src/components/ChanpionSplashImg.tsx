import Image from 'next/image'

interface ChanpionLoadingImgProps {
  chanpionId: string
  skin: any
}

const ChanpionSplashImg = ({chanpionId, skin}: ChanpionLoadingImgProps) => {
  return (
    <Image layout="fill" key={skin.id} alt="" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chanpionId}_${skin.num}.jpg`}/>
  )
}

export default ChanpionSplashImg