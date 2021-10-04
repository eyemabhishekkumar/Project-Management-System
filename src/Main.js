import { Container, VStack } from "@chakra-ui/layout";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex,  Box, Spacer } from "@chakra-ui/layout";
import { IoMdUndo } from "react-icons/io";
import { BiAlignRight } from "react-icons/bi";
import { AiOutlineRise } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineFile } from "react-icons/ai";
import { CgFormatIndentIncrease } from "react-icons/cg";

import TaskList from "./components/Todo/TodoList";
import DialogT from "./components/Dialog/Dialog";
import Add from "./components/Dialog/add";
import Boxcard from "./components/Dialog/Box";
import BoxList from "./components/Dialog/Boxlist";
function Main() {
  return (
    <div>
      <VStack>
        <Container maxW="container.2xl"  >
          <Flex>
            <Box p="4" flex="4" bg="" ml="16">
              <Flex>
                <AiOutlineFile />
                <FiChevronDown />
              </Flex>
            </Box>
            <Spacer />
            <Box p="5" flex="1">
              <Flex>
                <BiAlignRight />
                <Spacer />
                <AiOutlineRise />
                <Spacer />
                <IoMdUndo />
                <Spacer />
                <CgFormatIndentIncrease />
                <Spacer />
                <ArrowBackIcon />
              </Flex>
            </Box>
          </Flex>
        </Container>
        <Container maxW="container.2xl" bg="">
          <Flex>
            <Box  ml="7" flex="3" bg="">
            <Flex>
      
   
            </Flex>
            </Box>
            <Box flex="1" bg="">
             
                <DialogT />
          
            </Box>
          </Flex>
        </Container>
      </VStack>
    </div>
  );
}

export default Main;
