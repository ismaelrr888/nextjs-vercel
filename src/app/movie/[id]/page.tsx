
export default function Movie({params: { id }}: {params: { id: string }}) {

    console.log(id)
   
    return <div>{id}</div>
}