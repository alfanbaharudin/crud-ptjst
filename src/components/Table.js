import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Button} from 'reactstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash, faPlus} from '@fortawesome/free-solid-svg-icons';
import paginationFactory from 'react-bootstrap-table2-paginator';
import swal from 'sweetalert';
import { Modal, Row, Col } from 'react-bootstrap';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const defaultSorted = [{
  dataField: 'dob',
  order: 'desc',
}];

export const Table = (props) => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (id) => {
    swal({
      title: "Hapus Data",
      text: "Apakah data tersebut akan dihapus?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Data Terhapus", {
          icon: "success",
        });
        props.delete(id);
      } else {
        swal("Data Batal Dihapus");
      }
    });
  }

  const columns = [{
    dataField: 'name',
    text: 'Name',
    sort: true,
    filter: textFilter()
  }, {
    dataField: 'phone',
    text: 'Phone',
    sort: true,
  }, {
    dataField: 'dob',
    text: 'DOB',
    sort: true,
  }, {
    dataField: 'address',
    text: 'Address',
    sort: true,
  }, {
      dataField: 'position',
      text: 'Current Position',
      sort: true,
      filter: textFilter()
  }, {
      dataField: 'ktp',
      text: 'KTP File',
      formatter: () => {
          return (
            <div className='text-center'>
              <Button color="dark">
                  View
              </Button>
            </div>
          );
      },
  }, {
      dataField: 'action',
      text: 'Action',
      formatter: (rowContent, row) => {
          return (
            <div className='text-center'>
              <Button color="dark" onClick={handleShow}>
                  <FontAwesomeIcon icon={faEdit} />
              </Button>{' '}
              <Button color="dark" onClick={ () => {handleClick(row.id);console.log(row)} }>
                  <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          );
      },
  }];
  return (
    <div>
      <Row className='mb-2'>
        <Col>
          <h2>Employee List</h2>
        </Col>
        <Col>
          <Button color="dark" className="float-end" onClick={handleShow}>
              <FontAwesomeIcon icon={faPlus} /> Add Employee
          </Button>
        </Col>
      </Row>

      <Modal show={ show } onHide={ handleClose }>
        <Modal.Header closeButton>
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form method="post">
            <Row>
              <Col><input className='form-control' type="text" name='name' placeholder='First Name*' /></Col>
              <Col><input className='form-control' type="text" placeholder='Last Name*' /></Col>
            </Row>
            <br />
            <label>Birth Date: </label>
            <input className='form-control' type="date" name='dob' placeholder='DOB*' />
            <br />
            <input className='form-control' type="text" name='position' placeholder='Position*' />
            <br />
            <Row>
              <Col><input className='form-control' type="number" name='phone' placeholder='Phone Number*' /></Col>
              <Col><input className='form-control' type="email" placeholder='Email Address*' /></Col>
            </Row>
            <br />
            <Row>
              <Col>
                <select className='form-control' name="" id="">
                  <option value="" selected="selected">Province</option>
                </select>
              </Col>
              <Col>
                <select className='form-control' name="" id="">
                  <option value="" selected="selected">City</option>
                </select>
              </Col>
            </Row>
            <br />
            <textarea className='form-control' id="" name="" rows="4" cols="50" placeholder='Street*'></textarea>
            <br />
            <input className='form-control' type="number" placeholder='KTP Number*' />
            <br />
            <Row>
              <Col>
                <select className='form-control' name="" id="">
                  <option value="" selected="selected">Account Bank</option>
                  <option value="BNI">BNI</option>
                  <option value="BRI">BRI</option>
                  <option value="MANDIRI">MANDIRI</option>
                  <option value="BTN">BTN</option>
                </select>
              </Col>
              <Col><input className='form-control' type="number" placeholder='Account Bank Number*' /></Col>
            </Row>
            <br />
            <label>
              Attach KTP: 
              <input className='form-control' type="file" id="" name="" />
            </label><br /><br />
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Cancel</Button>
              <Button variant="primary" onClick={handleClose}>Submit</Button>
            </Modal.Footer>
            </form>
        </Modal.Body>
      </Modal>

      <BootstrapTable
          bootstrap4 
          keyField='id'
          data={ props.users } 
          columns={ columns } 
          defaultSorted={ defaultSorted } 
          filter={ filterFactory() }
          pagination={ paginationFactory() } />
    </div>
  )
}

export default Table;