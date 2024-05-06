import { FunctionComponent } from "react";
import styles from "./TokenSwapUI.module.css";
import V1Balance from "./V1Balance";

const TokenSwapUI: FunctionComponent = () => {
  return (
    <section className={styles.tokenSwapUi}>
      <div className={styles.tokenSwapUi1}>
        <div className={styles.tokenSwapUiInner}>
          <div className={styles.swapParent}>
            <div className={styles.swap}>Swap</div>
            {/* <img
              className={styles.settingIcon}
              loading="lazy"
              alt=""
              src="/setting.svg"
            /> */}
          </div>
        </div>
        <div className={styles.block1Parent}>
          <div className={styles.block1}>
            <div className={styles.ethParent}>
              <button className={styles.eth}>
                <img
                  className={styles.tokenethIcon}
                  alt=""
                  src="icons/ApeSafariCoinV0.svg"
                />
                <div className={styles.name}>
                  <div className={styles.name1}>AS_v0</div>
                </div>
                {/* <div className={styles.iconWrapper}>
                  <div className={styles.icon}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                  </div>
                </div> */}
              </button>
              <div className={styles.wrapper}>
                <div className={styles.div}>0.00</div>
              </div>
            </div>
            <div className={styles.eTHEOSParent}>
              <div className={styles.eTHEOS}>
                <div className={styles.max}>
                  <div className={styles.balance}>Balance:</div>
                </div>
                <div className={styles.eth1}><V1Balance /></div>
                {/* <div className={styles.max1}>(Max)</div> */}
              </div>
              <div className={styles.div1}>≈ $ 30,000.00</div>
            </div>
            <img
              className={styles.icon1}
              loading="lazy"
              alt=""
              src="icons/icon@2x.png"
            />
          </div>
          <div className={styles.block2}>
            <div className={styles.ethGroup}>
              <button className={styles.eth2}>
                <img className={styles.vectorIcon} alt="" src="/icons/ApeSafariCoinV1.svg" />
                <div className={styles.nameWrapper}>
                  <div className={styles.name2}>AS_v1</div>
                </div>
                {/* <div className={styles.iconContainer}>
                  <div className={styles.icon2}>
                    <img
                      className={styles.shapeIcon1}
                      alt=""
                      src="/shape.svg"
                    />
                  </div>
                </div> */}
              </button>
              <div className={styles.container}>
                <div className={styles.div2}>0.00</div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.balanceParent}>
                <div className={styles.balance1}>Balance:</div>
                <div className={styles.eos}>0 ApeSafari_v1</div>
              </div>
              <div className={styles.div3}>≈ $ 0.0</div>
            </div>
          </div>
        </div>
        <div className={styles.footerLeftBalance} />
        <div className={styles.eos00003064ethWrapper}>
          <div className={styles.eos00003064eth}>1 ApeSafari_v0 -&gt; 1 ApeSafari_v1</div>
        </div>
        <button className={styles.btn}>
          <div className={styles.swap1}>Swap</div>
        </button>
      </div>
    </section>
  );
};

export default TokenSwapUI;