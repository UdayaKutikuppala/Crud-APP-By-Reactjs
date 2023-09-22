import { useState } from "react"

function Form(props){
    const [product,setProduct]=useState(props.data) //for edit button 
    let  changeFormData=(event)=>{
   
  const{name,value}=  event.target
  setProduct({...product,[name]:value})

    }
    return(
        
        <div className="form-overlay">   
         <form>
            <div className="form-group">
                <label>Name: </label>
                <input  className="form-control mt-2" value={product.name}type="text" name="name" placeholder="Enter Name"
                        onChange={changeFormData}/> 
                        
            </div>
            <div className="form-group">
                <label>Price </label>
                <input className="form-control mt-2" value={product.price}type="number" name="price" placeholder="Enter price"
                  onChange={changeFormData}/>
            </div>
            <div className="form-group">
            <label>Category </label>
            <select  className="form-control mt-2" value={product.category} name="category"
            
                onChange={changeFormData}>
               <option value='-1'>

               </option>
               
               <option value={'mobiles'}>mobiles</option>
               <option value={'desktop'}>desktop</option>
               <option value={'laptop'}>laptops</option>
            </select>


              
            </div>
            <button className="btn btn-primary float -end"
            onClick={(e)=>{
                 e.preventDefault();
                 props.add(product)
            }}
            >send</button>
            <button className="btn btn-danger float-end"
             onClick={(e)=>{
                e.preventDefault()
                props.closeForm()
           }} 
            > cancel</button>
         </form>
        </div>
        
    )
}
export default Form