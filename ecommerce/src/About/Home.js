import React from 'react'

const  MoviesList = [
    {
        id:'z1',
    date:'JUL 16',
    venue:'DETROIT  MI',
    tetreName:'DTE ENERGY MUSIC THEATRE'
},
    {id:'z2',
    date:'JUL 16',
    venue:'DETROIT  MI',
    tetreName:'DTE ENERGY MUSIC THEATRE'},
    {id:'z3',
    date:'JUL 16',
    venue:'DETROIT  MI',
    tetreName:'DTE ENERGY MUSIC THEATRE'},
    {id:'z4',
    date:'JUL 16',
    venue:'DETROIT  MI',
    tetreName:'DTE ENERGY MUSIC THEATRE'},
    {id:'z5',
    date:'JUL 16',
    venue:'DETROIT  MI',
    tetreName:'DTE ENERGY MUSIC THEATRE'},
    {id:'z6',
    date:'JUL 16',
    venue:'DETROIT  MI',
    tetreName:'DTE ENERGY MUSIC THEATRE'}
     ];
    
const Home = () => {

  return (
    <React.Fragment>
        <h2 className='fw-semibold text-center '>Tours</h2>
        {MoviesList.map((movie)=>(
            <div className='d-flex justify-content-center'>
            <table className='table w-75  p-2'>
            <tbody  className='p-2'>
                <tr>
                    <td>{movie.date}</td>
                    <td>{movie.venue}</td>
                    <td>{movie.tetreName}</td>
                    <td><button className='btn btn-primary'>BUY TICKETS</button></td>
                </tr>
            </tbody>
            </table>
            </div>
        ))}
    </React.Fragment>
  )
}

export default Home