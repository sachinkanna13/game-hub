import { HStack, Image } from '@chakra-ui/react';
import reactLogo from '../assets/react.svg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={reactLogo} boxSize={'60px'} objectFit={'cover'}></Image>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
