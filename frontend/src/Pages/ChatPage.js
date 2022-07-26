import React, { useState } from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { Box } from "@chakra-ui/layout";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { ChatState } from "../context/ChatProvider";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setfetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && <ChatBox fetchAgain={fetchAgain} setfetchAgain={setfetchAgain}/>}
      </Box>
    </div>
  );
};

export default ChatPage;
