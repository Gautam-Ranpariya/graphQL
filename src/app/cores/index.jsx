import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react'
import Loader from '../loader';
import ErrorFallback from '../errorBoundary';

const GET_SPACEX = gql`
query Query($limit: Int, $offset: Int) {
  cores(limit: $limit, offset: $offset) {
    asds_landings
    asds_attempts
    id
    block
    missions {
      name
      flight
    }
    water_landing
    status
    rtls_landings
    rtls_attempts
    reuse_count
    original_launch
  }
}`;

export default function Cores() {
  const [variables, setVariables] = useState({
    limit: 5,
    offset: 1,

  });

  console.log("variables", variables)
  const { loading, error, data } = useQuery(GET_SPACEX, {
    variables: variables,
  });

  if (loading) return <Loader />;
  if (error) return <ErrorFallback error={error} />;
  const cores = data.cores;
  console.log('cores*******', cores);

  return (
    <div className='bg-slate-50 h-screen overflow-x-hidden overflow-y-auto w-full border-3 border-green-500'>
    <div className="container mx-auto h-full scroll-smooth">
            <div className='w-full '>
                <h2 className='border-b-2 leading-9 border-b-slate-300 text-center text-lg xxs:text-xl xxs:leading-10 xs:text-2xl sm:text-3xl font-bold xs:pb-2'>Capsules</h2>
            </div>
        <div className='p-3 sm:p-2 flex flex-col xs:flex-row flex-wrap gap-5 items-center justify-center'>
            {
                cores.map((item, index) => {
                    return (
                        <div className='xs:w-96 sm:min-w-72 md:w-52 lg:w-64 border-2 border-gray-300 flex flex-col items-center justify-center bg-white rounded-xl shadow-2xl p-2 xxs:py-3 xxs:px-5 ' key={index}>
                            <p className='text-left w-full leading-7'><b className='capitalize'>id : </b> {item.id} </p>
                            <p className='text-left w-full leading-7'><b className='capitalize'>dragon : </b> {item.dragon} </p>
                            <p className='text-left w-full leading-7'><b className='capitalize'>missions : </b> {item.missions} </p>
                            <p className='text-left w-full leading-7'><b className='capitalize'>landings : </b> {item.landings} </p>
                            <p className='text-left w-full leading-7'><b className='capitalize'>original_launch : </b> {item.original_launch} </p>
                            <p className='text-left w-full leading-7'><b className='capitalize'>reuse_count : </b> {item.reuse_count} </p>
                            <p className='text-left w-full leading-7'><b className='capitalize'>status : </b> {item.status} </p>
                            <p className='text-left w-full leading-7'><b className='capitalize'>type : </b> {item.type} </p>
                            <p className='text-left w-full leading-7'><b className='capitalize'>__typename : </b> {item.__typename} </p>
                        </div>
                    )
                })
            }
        </div>
        <div className='p-3 flex items-center justify-center'>
            <button onClick={() => {
                setVariables({
                    limit: 5,
                    offset: variables.offset + 5,
                });
            }} className="py-2 px-3 bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-md text-white text-center">Set New Records</button>
        </div>
    </div>
</div>
  )
}
