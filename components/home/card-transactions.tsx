import {Avatar, Card, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const CardTransactions = () => {
   return (
      <Card
         css={{
            mw: '375px',
            height: 'auto',
            bg: '$accents0',
            borderRadius: '$xl',
            // alignContent: 'start',
            justifyContent: 'start',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}} justify={'center'}>
               <Text h3 css={{textAlign: 'center'}}>
                  Latest Participants
               </Text>
            </Flex>
            <Flex
               css={{gap: '$6', py: '$4'}}
               // align={'center'}

               direction={'column'}
            >
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
                  <Text span size={'$base'} weight={'semibold'}>
                     Abhijith Thomas
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                     30 - 30 GROUP
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     9/20/2021
                  </Text>
               </Flex>

               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
                  <Text span size={'$base'} weight={'semibold'}>
                     Prem VA
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                    40 - 50 GROUP
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     9/20/2021
                  </Text>
               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
                  <Text span size={'$base'} weight={'semibold'}>
                     Sijo Joseph
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                     30 - 40 GROUP
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     2/20/2022
                  </Text>
               </Flex>
              
            </Flex>
         </Card.Body>
      </Card>
   );
};
