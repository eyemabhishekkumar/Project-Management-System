import { Flex, Text, Box, Container } from "@chakra-ui/layout";
import { Tab, TabList, Tabs, TabPanels, TabPanel } from "@chakra-ui/tabs";
import { Avatar } from "@chakra-ui/avatar";
import { BellIcon, SearchIcon, AddIcon } from "@chakra-ui/icons";
import DrawerExample from "./Drawer";
import MenuDrop from "./Menu";
function Head() {
  return (
    <>
      <Flex mt="4" bg="">
        <Box flex="0"  >
          <DrawerExample  />
          {/* drawer here */}
        </Box>
        <Box flex="4">
          <Text py="3" ml="3">Cl - Corey - Animate a process for our website</Text>
        </Box>
        <Box flex="1">
        <MenuDrop icon={ <Avatar size="sm" name="Ryan Florence" mt="3" ml="3" src="" /> } />
        <MenuDrop icon={ <BellIcon w={7} h={7} ml="3" mt="3" /> } />
        <MenuDrop icon={  <SearchIcon w={5} h={5} ml="3" mt="3" />} />
        <MenuDrop icon={  <AddIcon w={4} h={4} ml="3" mt="3" />} />
        </Box>
      </Flex>
      <Flex>
        <Container maxW="container.2xl" mt="6" ml="75">
          <Tabs variant="enclosed">
            <TabList>
              <Tab>List</Tab>
              <Tab>Overview</Tab>
              <Tab>
                <AddIcon w={3} h={3} />
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>List</p>
              </TabPanel>
              <TabPanel>
                <p>Overview</p>
              </TabPanel>
              <TabPanel>
                <p>Add new project</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Flex>
    </>
  );
}

export default Head;
