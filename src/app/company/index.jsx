import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react'
import Loader from '../loader';
import ErrorFallback from '../errorBoundary';


const GET_SPACEX = gql`
  query ExampleQuery {
    company {
      ceo
      coo
      cto
      employees
      links {
        flickr
        twitter
        website
      }
      founder
      vehicles
      valuation
      name
      launch_sites
      summary
    }
  }
`;

export default function Company() {
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

    const company = data.company;
    
    return (
        <div className='bg-slate-50 h-screen overflow-y-auto overflow-x-hidden w-full'>
            <div className="container mx-auto h-full">
                <div className='p-2 flex flex-col flex-wrap gap-5 items-center justify-center'>
                    <div className='w-full '>
                        <h2 className='border-b-2 leading-9 border-b-slate-300 text-center text-lg xxs:text-xl xxs:leading-10 xs:text-2xl sm:text-3xl font-bold xs:pb-2'>Company</h2>
                    </div>
                    <div className='max-w-64 xxs:max-w-md xs:max-w-lg overflow-hidden text-wrap sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl border-2 border-gray-300 flex flex-col items-center justify-center bg-white rounded-xl shadow-2xl p-3'>
                        <p className='text-left w-full leading-7'><b className='capitalize'>ceo : </b> {company?.ceo} </p>
                        <p className='text-left w-full leading-7'><b className='capitalize'>coo : </b> {company?.coo} </p>
                        <p className='text-left w-full leading-7'><b className='capitalize'>cto : </b> {company?.cto} </p>
                        <p className='text-left w-full leading-7'><b className='capitalize'>employees : </b> {company?.employees} </p>
                        <p className='text-left w-full leading-7'><b className='capitalize'>founder : </b> {company?.founder} </p>
                        <p className='text-left w-full leading-7'><b className='capitalize'>launch_sites : </b> {company?.launch_sites} </p>
                        <p className='text-left w-full leading-7'><b className='capitalize'>flickr : </b> {company?.links?.flickr} </p>
                        <p className='text-left w-full leading-7'><b className='capitalize'>twitter : </b> {company?.links?.twitter} </p>
                        <p className='text-left w-full leading-7'><b className='capitalize'>website : </b> {company?.links?.website} </p>
                        <p className='text-left w-full leading-7'><b className='capitalize'>__typename : </b> {company?.links?.__typename} </p>
                        <p className='text-left w-full leading-7'><b className='capitalize'>name : </b> {company?.name} </p>
                        <p className='text-left w-full leading-7'><b className='capitalize'>summary : </b> {company?.summary} </p>
                        <p className='text-left w-full leading-7'><b className='capitalize'>valuation : </b> {company?.valuation} </p>
                        <p className='text-left w-full leading-7'><b className='capitalize'>vehicles : </b> {company?.vehicles} </p>
                        <p className='text-left w-full leading-7'><b className='capitalize'>__typename : </b> {company?.__typename} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
