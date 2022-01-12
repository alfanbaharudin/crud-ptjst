import React, { Component } from 'react'
import { Container } from 'reactstrap'

class TableAPIComments extends Component {
    state={
        datauser:[],
        loading:true,
        erro:false
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response=>{
            if (response.ok){
                return response.json()
            } else {
                throw new Error('Ambil data gagal')
            }
        })
        .then(
            data=>this.setState({ datauser: data,loading:false })
        )
        .catch(error=>this.state({error:error, loading:true}))
    }
    render() {
        const {error, loading, datauser}=this.state

        if (error){
            return <p>(error message)</p>
        }
        if (loading){
            return <p>Loading...</p>
        }

        const tableapi2= datauser.map(user=>{
            return(
                <div key={user.id} className='alert alert-secondary' >
                    <h3>Data {user.id}</h3>
                    <p><b>Nama:</b><br /> {user.name}</p>
                    <p><b>Email:</b><br /> {user.email}</p>
                    <p><b>Isi:</b><br /> {user.body}</p>
                </div>
            )
        });
        return (
            <div style={{backgroundColor: '#C2F9DC', padding:'3%'}}>
                <h2 className='text-center' style={{padding: '3%'}}>Data Table API (Comments)</h2>
                <Container>
                    {tableapi2}
                </Container>
            </div>
        )
    }
}

export default TableAPIComments
