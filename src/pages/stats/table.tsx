import { toSentenceCase } from "../../common/utils"


interface Props <T>
{
    data: T[],
    headings: string[]
}


function Table <T> ({data,headings}:Props<T>)
{
    console.log((data))
    type playerData = typeof data;


return (
<div>
   { data != [] &&
   <table className="table-fixed border-2 border-black m-auto">
       <thead>
       <tr className="border-2 border-black">
        
       {headings.map((heading)=>{
           return(
               <th>
                   {heading}
               </th>
           )

       }
       )
       
    }
    </tr>
    </thead>
    <tbody >
        {data.map((playerData)=>{
            return(
                <tr className="border-2 border-black">
                    {Object.keys(playerData).map((data)=>{
                       return (<td>{playerData[data as keyof T]}</td>)
                    })}
                </tr>
            )
        })}
    </tbody>
    </table>}
    </div>
)
}

export default Table;
