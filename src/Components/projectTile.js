import { Col } from "react-bootstrap";

export const ProjectTile = ({ title, description, imgUrl }) => {
  return (
    <Col size={2} sm={2} md={4}>
      <div className="proj-imgbx">
        
        <div className="proj-txtx">
         
          <span></span>
        </div>
      </div>
    
    <div className="flip-card-proj">
    <div className="flip-card-inner-proj">
      <div className="flip-card-front-proj">
        <img className="projimg" src={imgUrl} ></img>
        <h3 id="projtitle" >{title}</h3>
      </div>
      <div class="flip-card-back-proj">
        <h4 className="projdes">{description}</h4>
      </div>
    </div>
  </div>
  </Col>
  )
}