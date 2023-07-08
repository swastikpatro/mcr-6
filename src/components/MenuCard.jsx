import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const MenuCard = ({ menuData, restaurantInfo }) => {
  const { name, imgSrc, price, qty } = menuData;
  return (
    <Card as="article" borderRadius={'md'} p="0" boxShadow={'md'}>
      <Box
        as="div"
        h="15rem"
        overflow={'hidden'}
        borderRadius={'.5rem .5rem 0 0'}
      >
        <Image w="full" h="full" objectFit={'cover'} src={imgSrc} alt={name} />
      </Box>

      <CardBody>
        <Heading as="h3" fontSize="1.2rem" mb=".5rem" letterSpacing={'wider'}>
          {name}
        </Heading>

        <Text color="gray.500" letterSpacing={'wider'} mb=".5rem">
          Rs. {price} for {qty}
        </Text>

        <ChakraLink
          as={Link}
          to={`/restaurant/${restaurantInfo.id}`}
          color="gray.500"
          letterSpacing={'wider'}
        >
          {restaurantInfo.name}
        </ChakraLink>
      </CardBody>
    </Card>
  );
};

export default MenuCard;
