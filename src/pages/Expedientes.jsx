import "../pages/Tabs.css";
import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import Navbar from "./Navbar";
import Periodontograma from "./Periodontograma";
import Odontograma from "./Odontograma";
import Datos from "./Datos";
import SearchPatients from "./SearchPatients";
import Anamnesis from "./Anamnesis";
import Consulta from "./Consulta";
import Finanzas from "./Finanzas";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

const Expedientes = () => {
  const [mainTab, setMainTab] = React.useState(0);
  const [nestedTab, setNestedTab] = React.useState(0);

  const handleMainTabChange = (event, newValue) => {
    setMainTab(newValue);
  };

  const handleNestedTabChange = (event, newValue) => {
    setNestedTab(newValue);
  };

  return (
    <div>
      <Navbar />
      <h1>Expedientes</h1>
      <div className="containerExp">
        <div className="boxPanel">
          <Box
            sx={{
              maxWidth: { xs: 320, sm: 480 },
              bgcolor: "background.paper",
            }}
          >
            <Tabs
              className="tabsForm"
              value={mainTab}
              onChange={handleMainTabChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable main tabs"
            >
              <Tab label="Datos Básicos" value={0} />
              <Tab label="Anamnesis" value={1} />
              <Tab label="Consulta" value={2} />
              <Tab label="Odontología" value={3} />
              <Tab label="Finanzas" value={4} />
            </Tabs>
            <TabPanel className="panel datos" value={mainTab} index={0}>
              <SearchPatients />
              <Datos />
            </TabPanel>
            <TabPanel className="panel" value={mainTab} index={1}>
            <Box>
                <Tabs
                  className="subTabsForm"
                  value={nestedTab}
                  onChange={handleNestedTabChange}
                  scrollButtons="auto"
                  aria-label="nested tabs"
                >
                  <Tab label="APP" value={0} />
                  <Tab label="ANP" value={1} />
                </Tabs>
                <TabPanel className="panel" value={nestedTab} index={0}>
                  <hi>Tab 1</hi>
                </TabPanel>
                <TabPanel className="panel" value={nestedTab} index={1}>
                <hi>Tab 2</hi>
                </TabPanel>
              </Box>
            </TabPanel>
            <TabPanel className="panel" value={mainTab} index={2}>
              <Consulta />
            </TabPanel>
            <TabPanel className="panel" value={mainTab} index={3}>
              <Box>
                <Tabs
                  className="subTabsForm"
                  value={nestedTab}
                  onChange={handleNestedTabChange}
                  scrollButtons="auto"
                  aria-label="nested tabs"
                >
                  <Tab label="Odontográma" value={0} />
                  <Tab label="Periodontográma" value={1} />
                </Tabs>
                <TabPanel className="panel" value={nestedTab} index={0}>
                  <Odontograma />
                </TabPanel>
                <TabPanel className="panel" value={nestedTab} index={1}>
                  <Periodontograma />
                </TabPanel>
              </Box>
            </TabPanel>
            <TabPanel className="panel" value={mainTab} index={4}>
              <Finanzas />
            </TabPanel>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Expedientes;
