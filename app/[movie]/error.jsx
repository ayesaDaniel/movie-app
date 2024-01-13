"use client"

export default function Error({error,reset}){
    return(
        <div>
 An error occured while loading the page:{error.message}
 <button onClick={()=>reset()}> Reload </button>
        </div>
    )
}