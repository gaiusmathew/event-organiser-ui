import {Avatar, Dropdown, Navbar, Text} from '@nextui-org/react';
import React from 'react';
import {DarkModeSwitch} from './darkmodeswitch';

export const UserDropdown = () => {
   return (
      <Dropdown placement="bottom-right">
         <Navbar.Item>
            <Dropdown.Trigger>
               <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://avatars.githubusercontent.com/u/23252086?v=4"
               />
            </Dropdown.Trigger>
         </Navbar.Item>
         <Dropdown.Menu
            aria-label="User menu actions"
            onAction={(actionKey) => console.log({actionKey})}
         >
            <Dropdown.Item key="profile" css={{height: '$18'}}>
               <Text b color="inherit" css={{d: 'flex'}}>
                  Signed in as
               </Text>
               <Text b color="inherit" css={{d: 'flex'}}>
                  gaiusmatheww@gmail.com
               </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
               Settings
            </Dropdown.Item>
            {/* <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item> */}
            <Dropdown.Item key="analytics" withDivider>
               Analytics
            </Dropdown.Item>
            {/* <Dropdown.Item key="system">System</Dropdown.Item> */}
            {/* <Dropdown.Item key="configurations">Configurations</Dropdown.Item> */}
            <Dropdown.Item key="help_and_feedback" withDivider>
               Roles & Permissions
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
               Log Out
            </Dropdown.Item>
            <Dropdown.Item key="switch" withDivider>
               <DarkModeSwitch />
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   );
};
