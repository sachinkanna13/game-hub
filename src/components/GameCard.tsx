import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import PlatformsList from './PlatformsList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import { Game } from '../entities/interfaces';
import { Link } from 'react-router-dom';

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
        <Heading fontSize={'xl'}>
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
