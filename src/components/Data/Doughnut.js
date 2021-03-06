import { Box, styled, Grid, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";
import Responses from "./Responses";
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
import moment from "moment";
import { PieChart, Pie, Label, Tooltip, Cell, Legend } from "recharts";
import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";
Chart.register(ChartDataLabels);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DoughnutNPS = ({ dateFrom, dateTo }) => {
  let dateFromValue = moment(dateFrom).format("");
  let dateToValue = moment.utc(dateTo).add(1, "day").format("");

  const [selection, setSelection] = useState("all");
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchResponses()), []);
  const responses = useSelector((state) => state.responses);

  let detractor = 0;
  let promoter = 0;
  let passive = 0;

  if (dateFrom === "" || dateTo === "") {
    for (let i = 0; i < responses.length; i++) {
      if (responses[i].score >= 9) promoter++;
      if (responses[i].score >= 7 && responses[i].score <= 8) ++passive;
      if (responses[i].score <= 6) detractor++;
    }
  } else {
    for (let i = 0; i < responses.length; i++) {
      let respDate = moment(responses[i].created_at).format("");
      if (respDate >= dateFromValue && respDate <= dateToValue) {
        if (responses[i].score >= 9) promoter++;
        if (responses[i].score >= 7 && responses[i].score <= 8) ++passive;
        if (responses[i].score <= 6) detractor++;
      }
    }
  }

  let PR = promoter++;
  let DE = detractor++;
  let PA = passive++;
  const All = PR + DE + PA;
  const NPScore = Math.round(((PR - DE) / All) * 100);

  const NPS = Math.min(Math.max(parseInt(NPScore), -100), 100);

  const data = [
    { name: "Detractors", value: DE },
    { name: "Passives", value: PA },
    { name: "Promoters", value: PR },
  ];
  const data2 = [{ name: "NPS", value: NPS }];
  const COLORS = ["#E26060", "#F3C934", "#52A569"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fontSize="25"
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {data[index].value}
      </text>
    );
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={-3}>
        <Grid item xs={3} md={5}>
          <Typography
            variant="h5"
            component="div"
            sx={{ marginLeft: 10, marginBottom: -10 }}
          >
            Total Responses {All}
          </Typography>
          <Grid sx={{ marginTop: 0, marginLeft: -10 }}>
            <PieChart width={600} height={500}>
              <Pie
                data={data}
                cx="45%"
                cy="60%"
                labelLine={false}
                label={renderCustomizedLabel}
                innerRadius={60}
                outerRadius={120}
                paddingAngle={1}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    onClick={() => setSelection(data[index].name)}
                  />
                ))}
                {data2.map((entry, index) => (
                  <Label
                    key={`cell-${index}`}
                    value={`NPS ${NPS}`}
                    position="center"
                    fontFamily="sans-serif"
                    fontWeight={400}
                    fontSize="30"
                    fill="#555555"
                    onClick={() => setSelection(data2[index].name)}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                height={100}
                iconType="circle"
                align="center"
                fontFamily="sans-serif"
              />
            </PieChart>
          </Grid>
        </Grid>
        <Grid item xs={4} md={6} sx={{ marginTop: 10, marginLeft: -6 }}>
          <Responses
            dateFrom={dateFrom}
            dateTo={dateTo}
            selection={selection}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default DoughnutNPS;
