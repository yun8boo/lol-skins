interface ChanpionListItem {
  chanpionInfo: any
}

const ChanpionListItem = ({chanpionInfo}: ChanpionListItem) => {
  console.log(chanpionInfo);
  const imagePath = `http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/${chanpionInfo.image.full}`;
  return (
    <div>
      <img src={imagePath} alt=""/>
    </div>
  )
}

export default ChanpionListItem