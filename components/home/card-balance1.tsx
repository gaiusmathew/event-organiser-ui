import {Card, Text} from '@nextui-org/react';
import React from 'react';
import {Community} from '../icons/community';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const CardBalance1 = () => {
   return (
      <Card
         css={{
            mw: '375px',
            bg: '$blue600',
            borderRadius: '$xl',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}}>
               <Community />
               <Flex direction={'column'}>
                  <Text span css={{color: 'white'}}>
                     Total Participants
                  </Text>
                  {/* <Text span css={{color: 'white'}} size={'$xs'}>
                     334
                  </Text> */}
               </Flex>
            </Flex>
            <Flex css={{gap: '$6', py: '$4'}} align={'center'}>
               <Text
                  span
                  size={'$5xl'}
                  css={{color: 'white'}}
                  weight={'semibold'}
               >
                 334
               </Text>
               {/* <Text span css={{color: '$green600'}} size={'$xs'}>
                  + 4.5%
               </Text> */}
            </Flex>
            <Flex css={{gap: '$12'}} align={'center'}>
               <Box>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$green600'}}
                     weight={'semibold'}
                  >
                     {'↓'}
                  </Text>
                  <Text span size={'$xs'} css={{color: '$white'}}>
                     125 MALE
                  </Text>
               </Box>
               <Box>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$red600'}}
                     weight={'semibold'}
                  >
                     {'↓'}
                  </Text>
                  <Text span size={'$xs'} css={{color: '$white'}}>
                     154 FEMALE
                  </Text>
               </Box>
               <Box>
                  <Text
                     span
                     size={'$xs'}
                     css={{color: '$green600'}}
                     weight={'semibold'}
                  >
                     {'⭐'}
                  </Text>
                  <Text span size={'$xs'} css={{color: '$white'}}>
                     95 CHILDREN
                  </Text>
               </Box>
            </Flex>
         </Card.Body>
      </Card>
   );
};
