"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11402],{59901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var l=n(74848),i=n(28453),s=n(94331);const r={title:"Technical Analysis",description:"This documentation page provides a comprehensive guide on using the Technical Analysis Module in Openbb, which is used for analyzing time-series data. It provides detailed usage of functions within the ta module, demonstrating features such as Momentum, Overlap, Trend, Volatility and Volume analysis plus many more techniques. It also showcases how to display the chart, instead of raw data, and best practices on using the module.",keywords:["Technical Analysis","time-series data","pandas_ta library","datascience","Momentum","Overlap","Trend","Volatility","Volume","Fibonacci","charting","ta module","SMA","EMA","HMA","WMA","ZLMA","Moving Average","ATR","Donchian"]},d=void 0,a={id:"sdk/data-available/ta",title:"Technical Analysis",description:"This documentation page provides a comprehensive guide on using the Technical Analysis Module in Openbb, which is used for analyzing time-series data. It provides detailed usage of functions within the ta module, demonstrating features such as Momentum, Overlap, Trend, Volatility and Volume analysis plus many more techniques. It also showcases how to display the chart, instead of raw data, and best practices on using the module.",source:"@site/content/sdk/data-available/ta.md",sourceDirName:"sdk/data-available",slug:"/sdk/data-available/ta",permalink:"/sdk/data-available/ta",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/ta.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1718403738e3,frontMatter:{title:"Technical Analysis",description:"This documentation page provides a comprehensive guide on using the Technical Analysis Module in Openbb, which is used for analyzing time-series data. It provides detailed usage of functions within the ta module, demonstrating features such as Momentum, Overlap, Trend, Volatility and Volume analysis plus many more techniques. It also showcases how to display the chart, instead of raw data, and best practices on using the module.",keywords:["Technical Analysis","time-series data","pandas_ta library","datascience","Momentum","Overlap","Trend","Volatility","Volume","Fibonacci","charting","ta module","SMA","EMA","HMA","WMA","ZLMA","Moving Average","ATR","Donchian"]},sidebar:"tutorialSidebar",previous:{title:"Quantitative Analysis",permalink:"/sdk/data-available/quantitative-analysis"},next:{title:"reference",permalink:"/sdk/reference/"}},h={},c=[{value:"How to Use",id:"how-to-use",level:2},{value:"_chart",id:"_chart",level:3},{value:"Examples",id:"examples",level:2},{value:"Import Statements",id:"import-statements",level:3},{value:"MA (Moving Averages)",id:"ma-moving-averages",level:3},{value:"ATR (Average True Range)",id:"atr-average-true-range",level:3},{value:"Donchian",id:"donchian",level:3}];function x(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{title:"Technical Analysis - Intros - Usage | OpenBB SDK Docs"}),"\n",(0,l.jsx)(t.p,{children:"The Technical Analysis module is a toolkit for analyzing time-series data, at any resolution. The functions are a collection of formulas that fit into broad categories, and they are mostly derived from the pandas_ta library:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Momentum"}),"\n",(0,l.jsx)(t.li,{children:"Overlap (Moving Averages)"}),"\n",(0,l.jsx)(t.li,{children:"Trend"}),"\n",(0,l.jsx)(t.li,{children:"Volatility"}),"\n",(0,l.jsx)(t.li,{children:"Volume"}),"\n",(0,l.jsx)(t.li,{children:"Other (Fibonacci)"}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,l.jsxs)(t.p,{children:["Every SDK function also has a secondary ",(0,l.jsx)(t.code,{children:"_chart"})," command. The table below is a brief description of each SDK function within the ",(0,l.jsx)(t.code,{children:"ta"})," module; for simplicity, ",(0,l.jsx)(t.code,{children:"_chart"})," has been omitted. Technical Analysis functions specific to stocks are included as a sub-module, ",(0,l.jsx)(t.code,{children:"openbb.stocks.ta"}),"."]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Path"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Category"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.ad"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Volume"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Accumulation/Distribution Line"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.adosc"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Volume"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Chaikin Oscillator"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.adx"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Trend"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Average Directional Movement Index"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.aroon"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Trend"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Aroon Indicator"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.atr"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Volatility"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Average True Range"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.bbands"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Voaltility"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Bollinger Bands"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.cci"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Momentum"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Commodity Channel Index"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.cg"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Momentum"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Center of Gravity"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.clenow"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Momentum"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Clenow Volatility Adjusted Momentum"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.demark"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Momentum"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Tom Demark's Sequential Indicator (Unofficial)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.donchian"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Volatility"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Donchian Channels"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.ema"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Overlap"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Exponential Moving Average"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.fib"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Other"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Fibonacci Retracement"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.fisher"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Momentum"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Fisher Transform"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.hma"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Overlap"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Hull Moving Average"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.kc"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Volatility"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Keltner Channels"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.ma"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Overlap"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Moving Averages (For Charting)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.macd"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Momentum"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Moving Average Convergence/Divergence"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.obv"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Volume"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"On-Balance Volume"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.rsi"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Momentum"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Relative Strength Index"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.sma"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Overlap"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Simple Moving Average"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.stoch"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Momentum"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Stochastic Oscillator"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.vwap"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Overlap"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Volume-Weighted Average Price"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.wma"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Overlap"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Weighted Moving Average"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.ta.zlma"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Overlap"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Zero-Lag Moving Average"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"The syntax for the data argument can be:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"data = ohlcv_df"})}),"\n",(0,l.jsxs)(t.p,{children:["Where functions only require a single column, ",(0,l.jsx)(t.code,{children:"data = ohlcv_df['Adj Close']"})]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:'data = openbb.stocks.load("ticker")'})}),"\n",(0,l.jsxs)(t.p,{children:["Target intraday by adding the ",(0,l.jsx)(t.code,{children:"interval"})," argument to the ",(0,l.jsx)(t.code,{children:"load"})," syntax."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Best practice is to deploy the first method because the latter will work only with the commands requiring OHLC+V data as inputs. An error message will be returned if this is the case."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"openbb.ta.obv(data = openbb.stocks.load('QQQ'))\n"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"OBV"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2019-11-15 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"1.84279e+07"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2019-11-18 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3.67938e+07"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2019-11-19 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"5.37171e+07"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2019-11-20 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"1.70881e+07"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2022-11-15 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"-1.09017e+08"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2022-11-16 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"-1.57876e+08"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2022-11-17 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"-2.13339e+08"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2022-11-18 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"-1.59987e+08"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"The error message:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"openbb.ta.rsi(data = openbb.stocks.load('QQQ'))\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-console",children:"Please send a series and not a DataFrame.\n"})}),"\n",(0,l.jsx)(t.h3,{id:"_chart",children:"_chart"}),"\n",(0,l.jsxs)(t.p,{children:["To display the chart, instead of raw data, add ",(0,l.jsx)(t.code,{children:"_chart"})," to the syntax before the (",(0,l.jsx)(t.code,{children:"arguments"}),")."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"openbb.ta.obv_chart(data= openbb.stocks.load('QQQ', start_date = '2022-11-18', interval = 5, prepost = True))\n"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/202889106-4caa882b-5e29-41a8-8cd2-b2a2a01d1fca.png",alt:"openbb.ta.obv_chart",title:"openbb.ta.obv_chart"})}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.h3,{id:"import-statements",children:"Import Statements"}),"\n",(0,l.jsx)(t.p,{children:"The examples here assume that this code block is at the top of the Python script of Notebook file:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"import pandas as pd\nfrom openbb_terminal.sdk import openbb\n# %matplotlib inline (uncomment for Jupyter environments)\n"})}),"\n",(0,l.jsx)(t.h3,{id:"ma-moving-averages",children:"MA (Moving Averages)"}),"\n",(0,l.jsxs)(t.p,{children:["The different types of moving averages, which also are individual functions (e.g., ",(0,l.jsx)(t.code,{children:"openbb.ta.ema"}),"), are available as an argument (",(0,l.jsx)(t.code,{children:"ma_type"}),") to the ",(0,l.jsx)(t.code,{children:"ma"})," command. There are five accepted arguments, they are listed below in brackets:"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Simple (SMA)"}),"\n",(0,l.jsx)(t.li,{children:"Exponential (EMA)"}),"\n",(0,l.jsx)(t.li,{children:"Hull (HMA)"}),"\n",(0,l.jsx)(t.li,{children:"Weighted (WMA)"}),"\n",(0,l.jsx)(t.li,{children:"Zero-Lag (ZLMA)"}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"window"})," argument anticipates a list of integers representing the interval (minutes, days, weeks, months, etc.) to measure against the timestamp of the DataFrame's index. The example below is a daily timeseries of S&P E-Mini Futures:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"es = openbb.stocks.load(\"ES=F\")\n\nopenbb.ta.ma_chart(\n    data = es['Adj Close'],\n    symbol = 'E-Mini S&P Futures',\n    ma_type = 'SMA',\n    window = [21, 150])\n"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/202889200-c6a3e895-f49d-4348-8635-68dd1456340d.png",alt:"openbb.ta.ma_chart",title:"openbb.ta.ma_chart"})}),"\n",(0,l.jsxs)(t.p,{children:["Changing, ",(0,l.jsx)(t.code,{children:"ma_type"}),", to, ",(0,l.jsx)(t.code,{children:"ZLMA"}),":"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/202889214-359d5d37-f8c0-49e0-9dd9-70afe970ae5f.png",alt:"openbb.ta.ma_chart",title:"openbb.ta.ma_chart"})}),"\n",(0,l.jsx)(t.h3,{id:"atr-average-true-range",children:"ATR (Average True Range)"}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"atr"})," command requires OHLC data, the data argument can be the ",(0,l.jsx)(t.code,{children:"load"})," function."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"ticker = 'ES=F'\nstart = '2000-01-01'\n\ndf_atr = openbb.ta.atr(data = openbb.stocks.load(f\"{ticker}\", start_date = f\"{start}\", monthly = True), window = 6)\n\ndf_atr.tail(5)\n"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"ATRe_6"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2022-07-01 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"454.457"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2022-08-01 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"431.612"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2022-09-01 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"469.08"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2022-10-01 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"455.7"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2022-11-01 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"424.5"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"donchian",children:"Donchian"}),"\n",(0,l.jsx)(t.p,{children:"To use the same data for multiple functions, it is more efficient to first load to a Pandas DataFrame:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"ticker = 'ES=F'\nstart = '2000-01-01'\ndata_df: pd.DataFrame = openbb.stocks.load(f\"{ticker}\", start_date = f\"{start}\", monthly = True)\n\nopenbb.ta.donchian_chart(data_df)\n"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/202889227-a985d788-a320-4193-af96-0357afe9a11d.png",alt:"openbb.ta.donchian_chart",title:"openbb.ta.donchian_chart"})}),"\n",(0,l.jsx)(t.p,{children:"The output from a function can be joined to the OHLC data:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"ticker = 'ES=F'\nstart = '2000-01-01'\ndata_df: pd.DataFrame = openbb.stocks.load(f\"{ticker}\", start_date = f\"{start}\", monthly = True)\n\ndonchian = openbb.ta.donchian(data_df)\n\ndata_df = data_df.join(donchian)\n\ndata_df.tail(5)\n"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Open"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"High"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Low"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Close"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Adj Close"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Volume"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"DCL_20_20"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"DCM_20_20"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"DCU_20_20"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2022-07-01 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3782"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4144"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3723.75"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4133.5"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4133.5"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3.40941e+07"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3198"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4003.12"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4808.25"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2022-08-01 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4137.5"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4327.5"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3953"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3956.5"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3956.5"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3.84732e+07"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3225"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4016.62"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4808.25"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2022-09-01 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3958"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4158"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3595.25"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3601.5"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3601.5"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4.68698e+07"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3595.25"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4201.75"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4808.25"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2022-10-01 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3593.25"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3924.25"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3502"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3883"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3883"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4.80686e+07"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3502"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4155.12"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4808.25"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2022-11-01 00:00:00"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3884"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4050.75"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3704.25"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3974"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3974"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"2.65215e+07"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3502"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4155.12"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4808.25"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var l=n(5260),i=n(74848);function s(e){let{title:t}=e;return(0,i.jsx)(l.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var l=n(96540);const i={},s=l.createContext(i);function r(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);