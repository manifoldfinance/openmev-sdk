import useSWR, { SWRResponse } from 'swr'
import React from 'react'


function Gas() {
  const { data, error }: SWRResponse<{ average: number }, Error> = useSWR(
    'https://api.txprice.com/v1',
    (url) => fetch(url).then((r) => r.json())
  )

  if (error) return <div>{i18n._(t`failed to load`)}</div>
  if (!data) return <div>{i18n._(t`loading...`)}</div>
 
    return <div>{data}</div>
 // return <div>{data.average / 10}</div>
}

export default Gas
