import "../pages/Tabs.css";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Periodontograma from './Periodontograma';

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext className="tabsForm" value={value}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
          <Tab label="Item Four" value="4" />
          <Tab label="Item Five" value="5" />
          <Tab label="Item Six" value="6" />
          <Tab label="Item Seven" value="7" />
        </Tabs>
      </Box>

      <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
      <TabPanel value="4">Item Four</TabPanel>
      <TabPanel value="5">Item Five</TabPanel>
      <TabPanel value="6">Item Six</TabPanel>
      <TabPanel value="7"><Periodontograma /></TabPanel>
    </TabContext>
  );
}
