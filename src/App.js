import React, { Component } from "react";
import { Container } from "reactstrap";
import { Table } from "./components/Table";
import logo from './jst.png';
export default class App extends Component {
  state = {
    title:"Web Alfan for PT.JST",
    users: [
      {
        id: 1,
        name:"Alfan",
        phone:"081293259751",
        dob:"26/01/87",
        address:"HahaHihi1",
        position:"Intern",
        ktp:"",
        action:"",
      },
      {
        id: 2,
        name:"Bahar",
        phone:"081234579862",
        dob:"25/01/87",
        address:"Sudirman2",
        position:"IT",
        ktp:"",
        action:"",
      },
      {
        id: 3,
        name:"Udin",
        phone:"081277151313",
        dob:"24/01/87",
        address:"HahaHihi3",
        position:"Dios",
        ktp:"",
        action:"",
      },
      {
        id: 4,
        name:"Alfanq",
        phone:"081293259754",
        dob:"23/01/87",
        address:"HahaHihi4",
        position:"Intern",
        ktp:"",
        action:"",
      },
      {
        id: 5,
        name:"Baharq",
        phone:"081234579865",
        dob:"22/01/87",
        address:"Sudirman5",
        position:"IT",
        ktp:"",
        action:"",
      },
      {
        id: 6,
        name:"Udinq",
        phone:"081277151316",
        dob:"21/01/87",
        address:"HahaHihi6",
        position:"Dios",
        ktp:"",
        action:"",
      },
      {
        id: 7,
        name:"Alfanw",
        phone:"081293259757",
        dob:"20/01/87",
        address:"HahaHihi7",
        position:"Intern",
        ktp:"",
        action:"",
      },
      {
        id: 8,
        name:"Baharw",
        phone:"081234579868",
        dob:"19/01/87",
        address:"Sudirman8",
        position:"IT",
        ktp:"",
        action:"",
      },
      {
        id: 9,
        name:"Udinw",
        phone:"081277151319",
        dob:"18/01/87",
        address:"HahaHihi9",
        position:"Dios",
        ktp:"",
        action:"",
      },
      {
        id: 10,
        name:"Alfane",
        phone:"081293259750",
        dob:"17/01/87",
        address:"HahaHihi0",
        position:"Intern",
        ktp:"",
        action:"",
      },
      {
        id: 11,
        name:"Bahare",
        phone:"081234579861",
        dob:"27/01/87",
        address:"Sudirman1",
        position:"IT",
        ktp:"",
        action:"",
      },
      {
        id: 12,
        name:"Udine",
        phone:"081277151312",
        dob:"16/01/87",
        address:"HahaHihi2",
        position:"Dios",
        ktp:"",
        action:"",
      },
      {
        id: 13,
        name:"Alfanr",
        phone:"081293259753",
        dob:"15/01/87",
        address:"HahaHihi3",
        position:"Intern",
        ktp:"",
        action:"",
      },
      {
        id: 14,
        name:"Bahar",
        phone:"081234579864",
        dob:"14/01/87",
        address:"Sudirman4",
        position:"IT",
        ktp:"",
        action:"",
      },
      {
        id: 15,
        name:"Udinr",
        phone:"081277151315",
        dob:"13/01/87",
        address:"HahaHihi5",
        position:"Dios",
        ktp:"",
        action:"",
      }
    ],
  };
  deleteUser = (id) => {
    console.log(id,"data dihapus")
    this.setState({
      users:this.state.users.filter((x)=>x.id!==Number(id))
    })
  }
  render(){
    return (
      <Container>
        <div className="text-center">
          <img className="mb-5 mt-3" src={logo} alt="Logo" />
        </div>
        <Table users={this.state.users} delete={(id)=>this.deleteUser(id)} /><hr />
        <p class="text-center text-muted">© 2022 PT. Juke Solusi Teknologi by Alfan Baharudin.</p>
      </Container>
    )
  }
}