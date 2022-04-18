import React, {useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component';

 function Addmovie({setMovies , movies}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
     const[names,setNames]=useState("");
     const[rates,setRates]=useState(0);
     const[image,setImage]=useState("");
const starRating=(newRating)=>{
    return setRates(newRating)
}

const handlesubmit=()=>{
  
    let newmovie ={
        name : names ,
        url : image ,
        rate : rates
    }
    setMovies([...movies , newmovie])
   setShow(false);
}
  return (
    <div>

<div>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <label> Movie's name</label> <input type="text" onChange={e=>setNames(e.target.value)}/>
           <br/>
           <label> Movie's image</label> <input type="text" onChange={e=>setImage(e.target.value)}/>
           <br/>
           <p> Movie's rate <ReactStars onChange={starRating}/></p> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlesubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
</div>



    </div>
  )
}
export default Addmovie