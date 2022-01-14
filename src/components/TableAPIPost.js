import React, { Component } from 'react'
import { Container } from 'reactstrap'

class TableAPIPost extends Component {
    state={
        datauser:[],
        loading:true,
        erro:false
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
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

        const tableapi1= datauser.map(user=>{
            return(
                <div key={user.id} className='alert alert-secondary' >
                    <h3>Data {user.id}</h3>
                    <p><b>Judul:</b><br /> {user.title}</p>
                    <p><b>Isi:</b><br /> {user.body}</p>
                </div>
            )
        });
        return (
            <div style={{backgroundColor: '#FEF7CB', padding:'3%'}}>
                <h2 className='text-center' style={{padding: '3%'}}>Data List API (POST)</h2>
                <Container>
                    {tableapi1}
                </Container>
            </div>
        )
    }
}

export default TableAPIPost
