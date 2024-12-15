import React from 'react'

const Card = (props) => {

  let options=props.options;
  let priceoptions=Object.keys(options)
  return (
    <div className="card mt-3 mx-4" style={{"width": "18rem","maxHeight":"360px"}}>
  <img className="card-img-top" src={props.imgSrc} style={{maxHeight:"200px",maxWidth:"300px"}} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.foodname}</h5>
    <p className="card-text">Your orders:</p>
    <select className='rounded w-60 m-2'>
      {
        Array.from(Array(6),(e,i)=>{
          return <option key={i+1} value={i+1}>{i+1}</option>
        })
      }
    </select>
    <select className='rounded w-60 m-2 inline'>
      {priceoptions.map((data)=>{
        return <option key={data} value={data}>{data}</option>
      })}
    </select>
    <div className='d-inline fs-5'>Total price</div>
  </div>
</div>
  )
}

export default Card