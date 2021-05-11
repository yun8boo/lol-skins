interface ChanpionLoadingImgProps {
  chanpionId: string
  skin: any
}

const ChanpionSplashImg = ({chanpionId, skin}: ChanpionLoadingImgProps) => {
  return (
    <img height={250} key={skin.id} alt="" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chanpionId}_${skin.num}.jpg`}/>
  )
}

export default ChanpionSplashImg