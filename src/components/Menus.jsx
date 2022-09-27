import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

export const Menus=({ourMenus})=> {
    console.log("menu komponens:", ourMenus)
  return (
    <div className="row mt-5">
        {ourMenus.map(obj=>(
            <div className="col-md-6 col-12 mt-2">
                <div className="row mt-3">
                    <div className="col-5 text-center">
                        <img className='img-thumbnail' src={obj.img} alt={obj.title} />
                    </div>
                    <div className="col-7">
                        <div className="d-flex border-bottom border-warning justify-content-between">
                            <h6 className="text-capitalize">{obj.title}</h6>
                            <h6 className='text-warning'>${obj.price}</h6>
                        </div>
                        {obj.desc}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
