import React from "react";
import { gql, useQuery } from '@apollo/client'

const Name = () => {

  const query = gql`
{
  user(id: 1) {
    id
    name
  }
}
`
  const { loading, error, data } = useQuery(query)

  if (loading) () => 'Loading...'
  if (error) () => `Error occured: ${error.message}`

  return <span>{data && data.user.name}</span>
}


export default Name
