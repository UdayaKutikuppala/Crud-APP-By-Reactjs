import Table from "./Table"
import Form from "./Form"
import { getData, deleteData ,postData,putData} from "./api"
import { useEffect ,useState } from "react"
function Crud(){
    const[products,setProducts]=useState([])
    const[openForm,setopenForm]=useState(false)
    const[edit,setedit]=useState(false)
    
    const[initialForm, setForm]= useState({
        name:'', price:'' ,categoty:''
    })
    useEffect(
        ()=>{
           getProducts()
        },[]
        
    )
  let getProducts = async()=>{
    let res = await getData();
    
        setProducts(res.data)   
}           
   
let deleteProduct = async(id)=>{
        await deleteData(id);
       getProducts()  
}
let showForm=()=>{
    setopenForm(true);
    setForm({
        name:'', price:'' ,categoty:''
     })
}
let closeForm=()=>{
    setopenForm(false)

}
let addProduct = async(product)=>{
    let data={
        name:product.name,
        price:product.price,
        category:product.category
    }
    if(edit)
    await putData(product.id,data);
    
    else
    await postData(data);
   getProducts();
   setopenForm(false)
}


let editProduct = async(data)=>{
    setForm(data)
   
   setopenForm(true)
   setedit(true)
}
    return(
        <div className ="memo m-5 w-50">
            <h1 className="text-primary">Crud operations</h1>
            <button className="btn btn-primary" onClick={()=>{showForm ()}}>Add product</button>
            <Table products={products} delete={deleteProduct} edit={editProduct}></Table>
            {
                openForm && <Form closeForm={closeForm} data={initialForm}add ={addProduct}></Form>
            }
        </div>

    )
}
export  default Crud