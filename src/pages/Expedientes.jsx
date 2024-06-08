import React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Navbar from "../Navbar";
import Periodontograma from "./Periodontograma";

const Expedientes = () => {
  const [value, setValue] = React.useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Navbar />
      <h1>Expedientes</h1>
      <div className="container">
        <TabContext value={value}>
          <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
            <TabList
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Item One" value='0' />
              <Tab label="Item Two" value='1' />
              <Tab label="Item Three" value='2' />
              <Tab label="Item Four" value='3' />
              <Tab label="Item Five" value='4' />
              <Tab label="Item Six" value='5' />
              <Tab label="Item Seven" value='6' />
            </TabList>
          </Box>

          <TabPanel value='0'>Item One</TabPanel>
          <TabPanel value='1'>Item Two</TabPanel>
          <TabPanel value='2'>Item Three</TabPanel>
          <TabPanel value='3'>Item Four</TabPanel>
          <TabPanel value='4'>Item Five</TabPanel>
          <TabPanel value='5'>Item Six</TabPanel>
          <TabPanel value='6'>
            <Periodontograma />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default Expedientes;
