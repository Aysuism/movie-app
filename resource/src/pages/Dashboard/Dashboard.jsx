import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { movieDelToDatabase_Action } from '../../tools/actions/movieAction'
import slugify from 'slugify'

const Dashboard = () => {

    const movie = useSelector(p => p.movie)

    const dispatch = useDispatch()

    return (
        <>

<h1 className='text-center my-5 alert alert-dark text-light '>Dashboard</h1>

            <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="col-9">
                    <Link to="/dashboard/add" className="btn btn-dark my-5">Add to movie </Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {movie.map((item, i) => (
                                <tr key={item.id}>
                                    <th scope="row">{i+1}</th>
                                    <td><img height={100} src={item.img} alt={item.title} /></td>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td><Link to={`/dashboard/edit/${slugify(item.title)}`} className='btn btn-warning'>Edit</Link></td>
                                    <td><button onClick={()=>{dispatch(movieDelToDatabase_Action(item.id))}} className='btn btn-danger'>X</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Dashboard