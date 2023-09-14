import React from "react";
import "./main.css";
import mppt from "../assets/mppt.png";
import pwm from "../assets/pwm.png";
const Main = () => {
  return (
    <div className="main-container">
      <div>
        <h1>Solar Panels</h1>
        <div className="solar-panels-container">
          <div className="info1">
            <h1>Monocrystalline Solar Panels</h1>
            <p>
              Monocrystalline panels are widely used due to their high
              efficiency and space-efficient design. They are a popular choice
              for both residential and commercial installations.
            </p>
          </div>
          <div className="info2">
            <h1>Polycrystalline Solar Panels</h1>
            <p>
              Polycrystalline panels are also commonly used, offering a
              cost-effective alternative to monocrystalline panels while still
              delivering good overall performance.
            </p>
          </div>
          <div className="info3">
            <h1>Thin-Film Solar Panels</h1>
            <p>
              Thin-film panels, particularly those made from amorphous silicon,
              are used in specific applications such as building- integrated
              photovoltaics (BIPV)
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1>Solar Charge Controller</h1>
        <div className="scc-container">
          <div className="info1-container">
            <div className="mppt-container">
              <h1>MPPT Charge Controller</h1>
              <div className="mppt-info">
                <img src={mppt} alt="" />
                <p>
                  An MPPT (Maximum Power Point Tracking) charge controller is a
                  sophisticated electronic device used in solar power systems to
                  optimize the charging of batteries from solar panels. It is a
                  more advanced and efficient alternative to PWM (Pulse-Width
                  Modulation) charge controllers.
                </p>
              </div>
            </div>
          </div>
          <div className="info2-container">
            <div className="pwm-container">
              <h1>PWM Charge Controller</h1>
              <div className="pwm-info">
                <p>
                  A PWM (Pulse-Width Modulation) charge controller is a device
                  used in solar power systems to regulate the charging of
                  batteries from solar panels. It is a type of solar charge
                  controller that operates by modulating the width of the pulses
                  in the current sent to the battery.
                </p>
                <img src={pwm} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="battery-container">
          <h1>Battery</h1>
          <p>
            Batteries used in solar panel systems play a pivotal role in storing
            excess energy generated during the day for use during nighttime or
            periods of low sunlight. These solar batteries, often deep-cycle
            lead-acid, gel, AGM (Absorbent Glass Mat), or increasingly,
            lithium-ion, are designed to withstand the rigors of repetitive
            charging and discharging cycles. They provide a reliable source of
            electricity, ensuring a continuous power supply and offering energy
            independence. As solar technology advances, battery storage systems
            are becoming more efficient, affordable, and environmentally
            friendly, making them a crucial component in sustainable energy
            solutions and a key enabler of a clean energy future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
