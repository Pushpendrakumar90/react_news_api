import React, { useState } from 'react'
import { fetchcountry } from './fetchcountry';
import { Link } from 'react-router-dom';

function FetchcountryName() {
    let [country, setCountry] = useState('');
    let [error, setError] = useState('')
    let [loading, setLoading] = useState('')
    let [article, setArticle] = useState();

    function handleInput(e) {
        setCountry(e);

    }

    async function getData() {
        let data = await fetchcountry(country);
        try {
            setLoading(true)
            if (data) {
                setError('');
                setLoading(false);
                setArticle(data);
                console.log(article);

            }
        } catch (err) {
            setError(error.message)
            setLoading(false)
        } finally {
            setLoading(false)
        }

    }

    function formHandler(e){
        e.preventDefault()
    }

    return (
        <>

            <nav className="navbar bg-body-tertiary border-bottom">
                <div className="container py-2">
                    <Link className="navbar-brand">Find Country Details</Link>
                    <form className="d-flex" role="search" onSubmit={(e) => formHandler(e)}>
                        <input className="form-control me-2" type="search" placeholder="Search via country" aria-label="Search" value={country} onChange={(e) => handleInput(e.target.value)} />
                        <button className="btn btn-outline-success" type="submit" onClick={getData}> Get </button>
                    </form>
                </div>
            </nav>

        
        <div className="container  mt-3 bg-light rounded">
            <div className="row pt-3">

            <table cellPadding={5} cellSpacing={5} className=' table p-3 w-100'>
                {loading && <tr><td>{loading}</td></tr>}
                {error && <tr><td>{error}</td></tr>}
                <thead>
                    <tr className='text-success fw-bold'>
                        <td>Country Name</td>
                        <td>Capital</td>
                        <td>Country Population</td>
                        <td>Country official Hi</td>
                        <td>Flag Image</td>
                    </tr>
                </thead>
                <tbody>

                    {article && <tr>
                        <td>{article?.name.common}</td>
                        <td>{article?.capital}</td>
                        <td>{article?.population}</td>
                        <td>{article?.name.nativeName.hin?.official}</td>
                        <td>
                            <img src={article?.flags.png} alt="flags pic" height={80} width={100} />
                        </td>
                    </tr>}
                </tbody>

            </table>
            </div>
        </div>



 

            {/* disaply country value */}

        </>
    )
}

export default FetchcountryName
