"use client";
import React, { useEffect, useState } from "react";

const TradingViewChart = () => {
  const [symbol, setSymbol] = useState("BINANCE:SUIUSDT");

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).TradingView) {
      new (window as any).TradingView.widget({
        container_id: "tradingview_chart",
        width: "100%",
        height: 500,
        symbol: symbol,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
      });
    }
  }, [symbol]);

  return (
    <div className="w-full">
      <select onChange={(e) => setSymbol(e.target.value)} value={symbol}>
        <option value="BINANCE:BTCUSDT">BTC/USDT</option>
        <option value="BINANCE:BTCUSD">BTC/USD</option>
        <option value="BINANCE:SUIUSDT">SUI/USDT</option>
      </select>
      <div id="tradingview_chart"></div>
    </div>
  );
};

export default TradingViewChart;
