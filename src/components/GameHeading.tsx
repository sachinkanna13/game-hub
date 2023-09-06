import { Heading } from '@chakra-ui/react';
import useGameQueryStore from '../store';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((g) => g.id === platformId);

  return (
    <Heading as={'h1'} marginBlock={4}>
      {`${platform?.name || ''} ${genre?.name || ''} Games`}
    </Heading>
  );
};

export default GameHeading;
