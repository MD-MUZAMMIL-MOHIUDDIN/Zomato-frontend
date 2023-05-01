import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Gallery({gallery}) {

    const displayGallery=(gallery)=>{
        if(gallery){
            return gallery.map((item,index)=>{
                return <img src={item} key={index+1} />
            })
        }
      
    }
  return (
   <>
   

    <div className="modal fade" id="gallery" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Gallery</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <Carousel>
            {  displayGallery(gallery)
        }
            </Carousel>

      
     
          </div>
         
        </div>
      </div>
    </div>
    </>
  )
}

export default Gallery