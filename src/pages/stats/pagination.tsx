import { useState } from "react";

interface Props
{
    totalPages: number,
    setPage:Function
        
    
}


function Pagination({totalPages}:Props)
{
    const [currentPage, setCurrentPage] = useState(1);
    let pageNumbers = [];
    for(let i=currentPage;i<= Math.ceil(totalPages/100);i++)
    {
        pageNumbers.push(i);
    }
return(
    <div className="flex items-center">
    <ul className="m-auto" >
        <button className="inline pad p-2 border border-blue-400" onClick={()=>{
        if(currentPage>=2){
            {setCurrentPage(currentPage-1)
            }}}}> previous</button>
    {pageNumbers.map((pageNumber)=>{
        return(
            <button onClick={()=>{setCurrentPage(pageNumber)}} className="inline pad p-2 border border-blue-400">{pageNumber}</button>
        )
    })}
    <button className="inline pad p-2 border border-blue-400" onClick={()=>{setCurrentPage(currentPage+1)}}> next </button>
    </ul>
    </div>
)
}
function previouspage(currentPage:number)
{
if(currentPage>=1)
{
    setCurrentPage(currentPage-1);
}
}

export default Pagination;