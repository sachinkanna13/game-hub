import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import PlatformsList from './PlatformsList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import { Game } from '../interfaces';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={'space-between'} marginBottom={2}>
          <PlatformsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'xl'}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
