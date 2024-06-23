// import {createChart} from "lightweight-charts"

const totalData = [
    {
      time: 1710959400,
      open: 57.59,
      high: 58.119999,
      low: 57.450001,
      close: 57.849998,
      macd: NaN,
      macd_signal: NaN,
      rsi: NaN
    },
    {
      time: 1711045800,
      open: 57.810001,
      high: 58.02,
      low: 57.119999,
      close: 57.130001,
      macd: NaN,
      macd_signal: NaN,
      rsi: NaN
    },
    {
      time: 1711305000,
      open: 57.080002,
      high: 57.330002,
      low: 56.369999,
      close: 56.73,
      macd: NaN,
      macd_signal: NaN,
      rsi: NaN
    },
    {
      time: 1711391400,
      open: 57.139999,
      high: 57.150002,
      low: 56.59,
      close: 56.68,
      macd: NaN,
      macd_signal: NaN,
      rsi: NaN
    },
    {
      time: 1711477800,
      open: 56.380001,
      high: 57.639999,
      low: 56.380001,
      close: 57.610001,
      macd: NaN,
      macd_signal: NaN,
      rsi: NaN
    },
    {
      time: 1711564200,
      open: 57.66,
      high: 58.080002,
      low: 57.560001,
      close: 57.959999,
      macd: NaN,
      macd_signal: NaN,
      rsi: NaN
    },
    {
      time: 1711909800,
      open: 57.880001,
      high: 57.880001,
      low: 57.259998,
      close: 57.610001,
      macd: NaN,
      macd_signal: NaN,
      rsi: NaN
    },
    {
      time: 1711996200,
      open: 57.360001,
      high: 58,
      low: 57.189999,
      close: 57.349998,
      macd: NaN,
      macd_signal: NaN,
      rsi: NaN
    },
    {
      time: 1712082600,
      open: 57.200001,
      high: 57.959999,
      low: 56.849998,
      close: 57.130001,
      macd: NaN,
      macd_signal: NaN,
      rsi: NaN
    },
    {
      time: 1712169000,
      open: 57.73,
      high: 58,
      low: 56.540001,
      close: 56.68,
      macd: NaN,
      macd_signal: NaN,
      rsi: NaN
    },
    {
      time: 1712255400,
      open: 56.630001,
      high: 57.619999,
      low: 56.57,
      close: 57.400002,
      macd: NaN,
      macd_signal: NaN,
      rsi: NaN
    },
    {
      time: 1712514600,
      open: 57.380001,
      high: 57.98,
      low: 57.310001,
      close: 57.790001,
      macd: NaN,
      macd_signal: NaN,
      rsi: NaN
    },
    {
      time: 1712601000,
      open: 57.700001,
      high: 57.990002,
      low: 56.869999,
      close: 57.580002,
      macd: NaN,
      macd_signal: NaN,
      rsi: NaN
    },
    {
      time: 1712687400,
      open: 56.790001,
      high: 57.299999,
      low: 56.419998,
      close: 56.939999,
      macd: NaN,
      macd_signal: NaN,
      rsi: 41.928894803562486
    },
    {
      time: 1712773800,
      open: 56.98,
      high: 57,
      low: 55.630001,
      close: 56.689999,
      macd: NaN,
      macd_signal: NaN,
      rsi: 39.13881424288723
    },
    {
      time: 1712860200,
      open: 55.970001,
      high: 57,
      low: 55.34,
      close: 56.470001,
      macd: NaN,
      macd_signal: NaN,
      rsi: 36.817062046904326
    },
    {
      time: 1713119400,
      open: 57.610001,
      high: 57.98,
      low: 56.740002,
      close: 56.970001,
      macd: NaN,
      macd_signal: NaN,
      rsi: 44.82767005926822
    },
    {
      time: 1713205800,
      open: 56.900002,
      high: 56.959999,
      low: 55.66,
      close: 56.41,
      macd: NaN,
      macd_signal: NaN,
      rsi: 38.881798884097684
    },
    {
      time: 1713292200,
      open: 56.880001,
      high: 57.630001,
      low: 56.650002,
      close: 57.18,
      macd: NaN,
      macd_signal: NaN,
      rsi: 48.91518951950254
    },
    {
      time: 1713378600,
      open: 57.630001,
      high: 59.130001,
      low: 57.220001,
      close: 58.740002,
      macd: NaN,
      macd_signal: NaN,
      rsi: 62.38718912826353
    },
    {
      time: 1713465000,
      open: 59,
      high: 60.849998,
      low: 58.860001,
      close: 60.349998,
      macd: NaN,
      macd_signal: NaN,
      rsi: 70.91281534503626
    },
    {
      time: 1713724200,
      open: 60.400002,
      high: 61.490002,
      low: 60.34,
      close: 61.099998,
      macd: NaN,
      macd_signal: NaN,
      rsi: 73.88270210606112
    },
    {
      time: 1713810600,
      open: 61.169998,
      high: 61.759998,
      low: 60.810001,
      close: 60.939999,
      macd: NaN,
      macd_signal: NaN,
      rsi: 72.18933190420847
    },
    {
      time: 1713897000,
      open: 60.599998,
      high: 60.950001,
      low: 60.049999,
      close: 60.599998,
      macd: NaN,
      macd_signal: NaN,
      rsi: 68.59160875052946
    },
    {
      time: 1713983400,
      open: 60.610001,
      high: 60.959999,
      low: 59.599998,
      close: 59.93,
      macd: NaN,
      macd_signal: NaN,
      rsi: 62.03103610035646
    },
    {
      time: 1714069800,
      open: 59.779999,
      high: 60.43,
      low: 59.380001,
      close: 59.91,
      macd: -0.7449349375778951,
      macd_signal: NaN,
      rsi: 61.84088989475927
    },
    {
      time: 1714329000,
      open: 59.860001,
      high: 60.299999,
      low: 59.360001,
      close: 59.799999,
      macd: -0.7337762620726451,
      macd_signal: NaN,
      rsi: 60.738104056295526
    },
    {
      time: 1714415400,
      open: 59.599998,
      high: 59.990002,
      low: 59.299999,
      close: 59.32,
      macd: -0.678381068875396,
      macd_signal: NaN,
      rsi: 56.04180297793818
    },
    {
      time: 1714501800,
      open: 59.580002,
      high: 60.150002,
      low: 59.330002,
      close: 59.52,
      macd: -0.6432038540470657,
      macd_signal: NaN,
      rsi: 57.51579962391605
    },
    {
      time: 1714588200,
      open: 60.119999,
      high: 60.150002,
      low: 59.32,
      close: 59.830002,
      macd: -0.633042903921762,
      macd_signal: NaN,
      rsi: 59.767707341515774
    },
    {
      time: 1714674600,
      open: 60.029999,
      high: 60.259998,
      low: 59.119999,
      close: 59.939999,
      macd: -0.6266425708729102,
      macd_signal: NaN,
      rsi: 60.5664196541245
    },
    {
      time: 1714933800,
      open: 60.470001,
      high: 60.880001,
      low: 59.84,
      close: 60.189999,
      macd: -0.6344298589870832,
      macd_signal: NaN,
      rsi: 62.39375967608789
    },
    {
      time: 1715020200,
      open: 60.279999,
      high: 60.610001,
      low: 60.060001,
      close: 60.259998,
      macd: -0.6388850065524707,
      macd_signal: NaN,
      rsi: 62.91199044223399
    },
    {
      time: 1715106600,
      open: 60.150002,
      high: 61.43,
      low: 60.099998,
      close: 61.23,
      macd: -0.7124738428894304,
      macd_signal: -0.67542632933404,
      rsi: 69.23816282349351
    },
    {
      time: 1715193000,
      open: 60.740002,
      high: 61.369999,
      low: 60.48,
      close: 61.279999,
      macd: -0.7659980782771854,
      macd_signal: -0.693540679122669,
      rsi: 69.52669906352567
    },
    {
      time: 1715279400,
      open: 61.459999,
      high: 61.970001,
      low: 61.459999,
      close: 61.889999,
      macd: -0.8478646663641527,
      macd_signal: -0.7244054765709658,
      rsi: 72.87010707488221
    },
    {
      time: 1715538600,
      open: 61.959999,
      high: 62.169998,
      low: 61.209999,
      close: 61.259998,
      macd: -0.8520863901774334,
      macd_signal: -0.7499416592922593,
      rsi: 64.94489350628896
    },
    {
      time: 1715625000,
      open: 61.560001,
      high: 61.990002,
      low: 61.02,
      close: 61.889999,
      macd: -0.8959401123653024,
      macd_signal: -0.779141349906868,
      rsi: 68.62022166176075
    },
    {
      time: 1715711400,
      open: 62.200001,
      high: 62.549999,
      low: 61.869999,
      close: 62.34,
      macd: -0.9559858136536263,
      macd_signal: -0.8145102426562197,
      rsi: 70.96211312368764
    },
    {
      time: 1715797800,
      open: 62.450001,
      high: 62.48,
      low: 60.970001,
      close: 61.060001,
      macd: -0.89002755895185,
      macd_signal: -0.8296137059153459,
      rsi: 57.757984245948215
    },
    {
      time: 1715884200,
      open: 61.41,
      high: 61.630001,
      low: 60.889999,
      close: 61.080002,
      macd: -0.8298036208356123,
      macd_signal: -0.8296516888993992,
      rsi: 57.88983932892473
    },
    {
      time: 1716143400,
      open: 60.98,
      high: 61.790001,
      low: 60.59,
      close: 60.700001,
      macd: -0.742849702131025,
      macd_signal: -0.8122912915457244,
      rsi: 54.41459490197257
    },
    {
      time: 1716229800,
      open: 60.82,
      high: 61.700001,
      low: 60.779999,
      close: 61.459999,
      macd: -0.7268845099592909,
      macd_signal: -0.7952099352284377,
      rsi: 59.6338948047979
    },
    {
      time: 1716316200,
      open: 61.299999,
      high: 61.450001,
      low: 60.509998,
      close: 60.93,
      macd: -0.6638134618479796,
      macd_signal: -0.7689306405523462,
      rsi: 54.91215345479147
    },
    {
      time: 1716402600,
      open: 60.75,
      high: 60.779999,
      low: 59.360001,
      close: 59.68,
      macd: -0.507118897523192,
      macd_signal: -0.7165682919465154,
      rsi: 45.717927030304764
    },
    {
      time: 1716489000,
      open: 60.040001,
      high: 60.389999,
      low: 59.869999,
      close: 60.209999,
      macd: -0.42085249074424524,
      macd_signal: -0.6574251317060613,
      rsi: 49.57322239744811
    },
    {
      time: 1716834600,
      open: 59.970001,
      high: 60.18,
      low: 59.189999,
      close: 59.48,
      macd: -0.2902352718633665,
      macd_signal: -0.5839871597375224,
      rsi: 44.848453189672036
    },
    {
      time: 1716921000,
      open: 58.869999,
      high: 58.939999,
      low: 58.419998,
      close: 58.75,
      macd: -0.12635870126595705,
      macd_signal: -0.4924614680432093,
      rsi: 40.67368602325091
    },
    {
      time: 1717007400,
      open: 58.82,
      high: 59.389999,
      low: 58.599998,
      close: 59.209999,
      macd: -0.03322046844728277,
      macd_signal: -0.40061326812402404,
      rsi: 44.19860055995225
    },
    {
      time: 1717093800,
      open: 59.27,
      high: 59.990002,
      low: 58.970001,
      close: 59.919998,
      macd: -0.016508434547219508,
      macd_signal: -0.3237923014086631,
      rsi: 49.214265288762604
    },
    {
      time: 1717353000,
      open: 60.200001,
      high: 60.200001,
      low: 58.599998,
      close: 59.34,
      macd: 0.04304081633797807,
      macd_signal: -0.2504256778593349,
      rsi: 45.6078445036368
    },
    {
      time: 1717439400,
      open: 58.82,
      high: 59.48,
      low: 58.34,
      close: 58.700001,
      macd: 0.14025976997922385,
      macd_signal: -0.17228858829162313,
      rsi: 41.954416452360626
    },
    {
      time: 1717525800,
      open: 58.860001,
      high: 58.919998,
      low: 58.130001,
      close: 58.68,
      macd: 0.21642558528243683,
      macd_signal: -0.09454575357681115,
      rsi: 41.8416119285161
    },
    {
      time: 1717612200,
      open: 58.779999,
      high: 59,
      low: 57.5,
      close: 57.73,
      macd: 0.34941674444839776,
      macd_signal: -0.005753253971769373,
      rsi: 36.78278297611864
    },
    {
      time: 1717698600,
      open: 57.57,
      high: 58.68,
      low: 57.57,
      close: 58.360001,
      macd: 0.3993736498411238,
      macd_signal: 0.07527212679080926,
      rsi: 41.807492669526205
    },
    {
      time: 1717957800,
      open: 57.900002,
      high: 58.130001,
      low: 57.369999,
      close: 57.93,
      macd: 0.4682644828429261,
      macd_signal: 0.15387059800123262,
      rsi: 39.49977269831243
    },
    {
      time: 1718044200,
      open: 57.75,
      high: 57.75,
      low: 56.509998,
      close: 57.130001,
      macd: 0.5807200188660744,
      macd_signal: 0.23924048217420096,
      rsi: 35.56633102708783
    },
    {
      time: 1718130600,
      open: 58.279999,
      high: 58.450001,
      low: 57.16,
      close: 57.299999,
      macd: 0.6486472220880231,
      macd_signal: 0.3211218301569654,
      rsi: 37.00196644029563
    },
    {
      time: 1718217000,
      open: 57.450001,
      high: 57.619999,
      low: 56.689999,
      close: 57.27,
      macd: 0.6968676323378276,
      macd_signal: 0.3962709905931378,
      rsi: 36.845950592344415
    },
    {
      time: 1718303400,
      open: 56.990002,
      high: 57.610001,
      low: 56.619999,
      close: 57.400002,
      macd: 0.7163351146436554,
      macd_signal: 0.46028381540324137,
      rsi: 38.06468810522814
    },
    {
      time: 1718562600,
      open: 57.209999,
      high: 58.25,
      low: 57.07,
      close: 58.240002,
      macd: 0.656415505457133,
      macd_signal: 0.4995101534140197,
      rsi: 45.396977468731
    },
    {
      time: 1718649000,
      open: 58.209999,
      high: 59.049999,
      low: 57.900002,
      close: 59.049999,
      macd: 0.537374278824295,
      macd_signal: 0.5070829784960749,
      rsi: 51.37490366870504
    },
    {
      time: 1718821800,
      open: 58.740002,
      high: 59.200001,
      low: 58.59,
      close: 58.959999,
      macd: 0.4451639242962955,
      macd_signal: 0.494699167656119,
      rsi: 50.71058528463936
    },
    {
      time: 1718908200,
      open: 58.294998,
      high: 58.450001,
      low: 57.34,
      close: 58.099998,
      macd: 0.4364503197595937,
      macd_signal: 0.48304939807681396,
      rsi: 44.755199764647024
    }
  ];

// ohlcv chart
const ohlcv_chart = LightweightCharts.createChart(document.getElementById("ohlcv-chart-container"), {});

const ohlcv_candles = ohlcv_chart.addCandlestickSeries({ upColor: '#26a69a', downColor: '#ef5350', borderVisible: false, wickUpColor: '#26a69a', wickDownColor: '#ef5350' });

// let ohlcv_datas = []

// totalData.forEach((data)=>{
//     ohlcv_datas.push({time: data["time"], open: data["open"], high: data["high"], low: data["low"], close: data["close"]});
// })

// ohlcv_candles.setData(ohlcv_datas)


// macd chart
const macd_chart = LightweightCharts.createChart(document.getElementById("macd-chart-container"), {
});

const macd_line = macd_chart.addLineSeries({color: "#00FF00", lineWidth: 2});
const macd_signal_line = macd_chart.addLineSeries({color: "#FF0000", lineWidth: 2});
const macd_hist = macd_chart.addHistogramSeries({ color: '#26a69a' });

// let macd_datas = [];
// let macd_signal_datas = [];
// let macd_hist_datas = []

// totalData.forEach((ind)=>{
//     macd_datas.push({time: ind["time"], value: ind["macd"]});
//     macd_signal_datas.push({time: ind["time"], value: ind["macd_signal"]});
//     macd_hist_datas.push({time: ind["time"], value: ind["macd_signal"]- ind["macd"]})
// });

// macd_line.setData(macd_datas);

// macd_signal_line.setData(macd_signal_datas);

// macd_hist.setData(macd_hist_datas)


// rsi chart
const rsi_chart = LightweightCharts.createChart(document.getElementById("rsi-chart-container"), {
});

const rsi_line = rsi_chart.addLineSeries({color: "#0000FF", lineWidth: 2});

let rsi_datas = [];

// totalData.forEach((ind)=>{
//     rsi_datas.push({time: ind["time"], value: ind["rsi"]});
// });

rsi_line.setData(rsi_datas);


// syncing two charts

function getCrosshairDataPoint(series, param) {
    if (!param.time) {
        return null;
    }
    const dataPoint = param.seriesData.get(series);
    return dataPoint || null;
}

function syncCrosshair(chart, series, dataPoint) {
    if (dataPoint) {
        chart.setCrosshairPosition(dataPoint.value, dataPoint.time, series);
        return;
    }
    chart.clearCrosshairPosition();
}

function syncCrosshairOHLCV(chart, series, dataPoint){
    if(dataPoint){
        chart.setCrosshairPosition(dataPoint.close, dataPoint.time, series);
        return;
    }
    chart.clearCrosshairPosition();
}

ohlcv_chart.timeScale().subscribeVisibleLogicalRangeChange(timeRange => {
    macd_chart.timeScale().setVisibleLogicalRange(timeRange);
});

macd_chart.timeScale().subscribeVisibleLogicalRangeChange(timeRange => {
    rsi_chart.timeScale().setVisibleLogicalRange(timeRange);
});

rsi_chart.timeScale().subscribeVisibleLogicalRangeChange(timeRange => {
    macd_chart.timeScale().setVisibleLogicalRange(timeRange);
    ohlcv_chart.timeScale().setVisibleLogicalRange(timeRange);
});

macd_chart.subscribeCrosshairMove(param => {
    const dataPoint = getCrosshairDataPoint(macd_line, param);
    syncCrosshair(rsi_chart, rsi_line, dataPoint);
    syncCrosshair(ohlcv_chart, ohlcv_candles, dataPoint);
});

rsi_chart.subscribeCrosshairMove(param => {
    const dataPoint = getCrosshairDataPoint(rsi_line, param);
    syncCrosshair(macd_chart, macd_line, dataPoint);
    syncCrosshair(ohlcv_chart, ohlcv_candles, dataPoint)
});

ohlcv_chart.subscribeCrosshairMove(param =>{
    const dataPoint = getCrosshairDataPoint(ohlcv_candles, param);
    syncCrosshairOHLCV(macd_chart, macd_line, dataPoint);
    syncCrosshairOHLCV(rsi_chart, rsi_line, dataPoint);
})



// simulate real time data
function* getNextRealtimeUpdate(realtimeData) {
    for (const dataPoint of realtimeData) {
        yield dataPoint;
    }
    return null;
}
const streamingDataProvider = getNextRealtimeUpdate(totalData);

const intervalID = setInterval(() => {

    const update = streamingDataProvider.next();
    if (update.done) {
        clearInterval(intervalID);
        return;
    }
    rsi_line.update({time: update.value["time"], value: update.value["rsi"]});

    macd_line.update({time: update.value["time"], value: update.value["macd"]});
    macd_signal_line.update({time: update.value["time"], value: update.value["macd_signal"]});
    macd_hist.update({time: update.value["time"], value: update.value["macd_signal"] - update.value["macd"]});

    ohlcv_candles.update({time: update.value["time"], open: update.value["open"], high: update.value["high"], low: update.value["low"], close: update.value["close"]})
}, 1000);