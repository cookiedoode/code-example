import Data from "../../src/data/data"
import Link from 'next/link'

export default function Page() {
  const name = "Location Name 1"
  const community = Data.filter(function( obj ) {
    return obj.name === name;
  })
  return (
    <div className="maxWidth" community={community} >
      <h1>{community[0].name}</h1>
      <p>{community[0].address}</p>
      <Link href="/">Back</Link>
    </div>
  )
}

