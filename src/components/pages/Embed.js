import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Paper,
  Button,
  Divider
   }from '@mui/material';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';

function TabPanel(props){
  const {children, value, index, ...other} = props;
  return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
    {...other}
      >
        {value === index && (
        <Box sx={{p:2}}>
        <Typography>{children}</Typography>
        </Box>
        )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Embed() {
  const [value, setValue] = useState(0);
  const [copied, setCopied] = useState(false);
  const [scriptCopied, setScriptCopied] = useState(false);

  const handleTabs = (e, val) => {
    setValue(val);
  }

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: 5 }}>
        <Tabs
        value={value}
        onChange={ handleTabs }
        aria-label="embed code"
        >
          <Tab label='Direct Link' { ...a11yProps(0) }
          sx={{ marginRight: "40%",marginLeft: "7%", fontSize: 20, textTransform: 'none' }}/>
          <Tab label="Embed Script" {...a11yProps(1)}
          sx={{ fontSize: 20, textTransform: 'none' }}
          />
        </Tabs>
      </Box >

      <Paper sx={{ backgroundColor: "#D7E5F0", margin:10, padding: 5, borderRadius: 5 }}>
      <TabPanel value={value} index={0}>
        <Box sx={{ color: "black" }}>
            <Typography style={{ fontSize: 20, marginBottom: 5}}>Direct Link</Typography>
            <Typography style={{ fontSize: 18,marginBottom: 20, color: "rgb(53,126,199)" }}>Copy this link to your clipboard or share it</Typography>
      <Divider />
          <div style={{ display: "inline-flex", marginTop: 60, marginBottom: 20 }}>
          <input
          style = {{ width: 900, fontSize: 20 }}
          id = "direct_link"
          defaultValue="https://happysurvey.com/hölynpöly-666"
          readOnly
          />
          <CopyToClipboard
          text = "https://happysurvey.com/hölynpöly-666"
          onCopy = {() => setCopied(true)}
          >
          <Button
          sx={{ width:100, height: 45, marginTop: 1,marginLeft:.1,
            color: "white", backgroundColor:"rgb(22, 38, 57)",
            "&:hover": {
              backgroundColor: "rgb(80, 50, 90)",
              opacity: [0.4, 0.35, 0, 7],
            },
          }}
          >
            Copy
            <FileCopyOutlinedIcon sx={{ marginLeft: 2, color: "white" }}/>
            </Button>
          </CopyToClipboard>
          {copied ? <span style={{ color: 'red', marginTop: 14 }}>Copied.</span> : null}
          </div>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
      <Box sx={{ color: "black" }}>
            <Typography style={{ fontSize: 20, marginBottom: 5}}>Embed survey to your website
            </Typography>
            <Typography style={{ fontSize: 18,marginBottom: 20, color: "rgb(53,126,199)" }}>Copy this script and embed on your website
            </Typography>
          <Divider />
          <div style={{ display: "inline-flex", marginTop: 60, marginBottom: 20 }}>
          <textarea
          style = {{ width: 900, fontSize: 20 }}
          id = "embed-script"
          rows = "5"
          defaultValue ="<div class='happy-survey-wrapper'>
          <div id='hs-embeded-survey' class='hs-embeded-survey'>
          <script
            type='text/javascript'
            src='./hs-emb.js'
            id='happy-survey-script'
            surveyId='b1e5ff6a-6337-4616-b8e0-a9a6e388c6f6'
          ></script>
          </div>
        </div>"
          readOnly
          />
          <CopyToClipboard
          text = "<div class='happy-survey-wrapper'><div id='hs-embeded-survey' class='hs-embeded-survey'><script type='text/javascript' src='./hs-emb.js' id='happy-survey-script' surveyId='b1e5ff6a-6337-4616-b8e0-a9a6e388c6f6'></script></div></div>"
          onCopy = {() => setScriptCopied(true)}
          >
          <Button
          sx={{
            width:100, height: 45, marginTop: 1,marginLeft:.1,
            color: "white", backgroundColor:"rgb(22, 38, 57)",
            "&:hover": {
              backgroundColor: "rgb(80, 50, 90)",
              opacity: [0.4, 0.35, 0, 7],
            },
          }}
          >
            Copy
            <FileCopyOutlinedIcon sx={{marginLeft: 2, color: "white"}}/>
            </Button>
          </CopyToClipboard>
          {scriptCopied ? <span style={{color: 'red', marginTop: 14}}>Copied.</span> : null}
          </div>
          </Box>
      </TabPanel>
      </Paper>
    </>
  )
}
export default Embed;
