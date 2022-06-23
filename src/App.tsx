import { gql } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
    query {
      lessons {
        id
        title

        teacher{
          name
        }
      }
    }
`

function App() {
  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY,
    }).then(response => {
      console.log(response.data)
    })
  }, [])
  

  return (
    <div>
      <h1 className="text-5xl">oioioi</h1>
    </div>
  )
}

export default App
