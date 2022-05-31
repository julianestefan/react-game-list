interface GameItemProps{
  name: string;
  imageUrl: string;
}

function GameItem({name, imageUrl} : GameItemProps) {
  return <div>GameItem</div>;
}

export default GameItem;
