import { useEffect, useState } from "react"
import wingchunlogo from "./components/wingchunlogo.png";


function App() {

    return <div className="container">
      <h1 className="text-center display-1 py-4">WING TOKEN</h1>

      <div class="text-center">
        <img src={wingchunlogo} className="img-fluid" height="auto"/>
      </div>
      <br />
      <div class="text-center">
        <button type="button" class="btn btn-danger">TELEGRAM</button>
      </div>
      <br />
      <div class="text-center">
        <button type="button" class="btn btn-warning">DISCORD</button>
      </div>
      <br />
      <div class="text-center">
        <button type="button" class="btn btn-danger">UNISWAP</button>
      </div>
      <br />
      <br />
      <br />
      <div class="text-center">
        <h2>TOKENOMICS</h2>
        <p>Suply 1,000,000</p>
        <p>Max TX: 2%</p>
        <p>Max Wallet: 3%</p>
        <p>CA-Posted at Launch</p>
      </div>
      <br />
      <br />
      <br />
      <div class="footer">
        <div class="text-center">
          <p>COPYRIGHT © 2023 WING TOKEN ETH - ALL RIGHTS RESERVED.</p>
        </div>
      </div>

    </div>
}
export default App 