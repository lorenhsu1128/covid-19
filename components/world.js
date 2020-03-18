import Card from "./card";

import { commaNum } from "../utils";

export default function World({ world }) {
  return (
    <Card>
      <div className="world">
        <div className="title">Coronavirus</div>
        <div className="highlight">{commaNum(world.cases)}</div>
        <div className="side">
          <div>
            <div className="val">{commaNum(world.deaths)}</div>
            <div className="label">死亡</div>
          </div>
          <div>
            <div className="val">{commaNum(world.recovered)}</div>
            <div className="label">康復</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .title {
          font-size: 24px;
          color: #a0a0a0;
        }
        .highlight {
          font-size: 60px;
          font-weight: 300;
          line-height: 60px;
        }
        .label {
          color: #a0a0a0;
          font-size: 16px;
          font-weight: 500;
        }
        .side {
          display: flex;
          margin-top: 15px;
        }
        .side > * {
          margin-right: 30px;
        }
        .val {
          font-size: 16px;
          line-height: 20px;
        }
      `}</style>
    </Card>
  );
}
