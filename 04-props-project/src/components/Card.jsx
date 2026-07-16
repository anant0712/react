import React from 'react'
import { Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">
        <div>
          <div className="top">
          <img src={props.brandLogo} alt="Logo" />
          <button>Save <Bookmark size={12}/></button>

        </div>
        <div className="center">
          <h2>{props.company} <span>{props.datePosted}</span></h2>
          <h2>{props.post}</h2>
          <div className="tags">
            <h3>{props.tag1}</h3>
            <h3>{props.tag2}</h3>
          </div>
        </div>
        </div>
        <div className="bottom">
            <div>
              <h3>{props.pack}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
