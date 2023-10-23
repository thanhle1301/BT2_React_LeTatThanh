import React, { Component } from "react";

export default class Face extends Component {
  state = {
    color: null,
  };
  hanldeChangeColor = (color) => {
    this.setState({ color });
  };
  render() {
    return (
      <div>
        <div className=" mau_anh">
          <div className="bg_face">
            <img src={`./BTglasses/glassesImage/model.jpg`} alt="" />
            <div className="glass_model_mau">
              <img src={`./BTglasses/glassesImage/v7.png`} alt="" />
            </div>
            <div className="text_mau">
              <h3>FENDI F8750</h3>
              <p>
                Light pink square lenses define these sunglasses, ending with
                amother of pearl effect tip.
              </p>
            </div>
          </div>
          <div className="bg_face bg_face_2">
            <img src={`./BTglasses/glassesImage/model.jpg`} alt="" />
            {this.state.color !== null && (
              <div className="thay_glass">
                <img
                  src={`./BTglasses/glassesImage/${this.state.color}.png`}
                  alt=""
                />
              </div>
            )}
          </div>

          <div></div>
        </div>
        <div>
          <div className="model_glass">
            <img
              onClick={() => {
                this.hanldeChangeColor("v1");
              }}
              src={`./BTglasses/glassesImage/v1.png`}
              alt=""
            />
            <img
              onClick={() => {
                this.hanldeChangeColor("v2");
              }}
              src={`./BTglasses/glassesImage/v2.png`}
              alt=""
            />
            <img
              onClick={() => {
                this.hanldeChangeColor("v3");
              }}
              src={`./BTglasses/glassesImage/v3.png`}
              alt=""
            />
            <img
              onClick={() => {
                this.hanldeChangeColor("v4");
              }}
              src={`./BTglasses/glassesImage/v4.png`}
              alt=""
            />
            <img
              onClick={() => {
                this.hanldeChangeColor("v5");
              }}
              src={`./BTglasses/glassesImage/v5.png`}
              alt=""
            />
            <img
              onClick={() => {
                this.hanldeChangeColor("v6");
              }}
              src={`./BTglasses/glassesImage/v6.png`}
              alt=""
            />
            <img
              onClick={() => {
                this.hanldeChangeColor("v7");
              }}
              src={`./BTglasses/glassesImage/v7.png`}
              alt=""
            />
            <img
              onClick={() => {
                this.hanldeChangeColor("v8");
              }}
              src={`./BTglasses/glassesImage/v8.png`}
              alt=""
            />
            <img
              onClick={() => {
                this.hanldeChangeColor("v9");
              }}
              src={`./BTglasses/glassesImage/v9.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
