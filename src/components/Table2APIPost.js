import axios from "axios";
import { useState, useEffect } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { Card } from 'react-bootstrap';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

const defaultSorted = [{
    dataField: 'dob',
    order: 'desc',
  }];

function Table2APIPost() {
    const [data,setData]=useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData= () => {
        axios("https://jsonplaceholder.typicode.com/posts").then(res=>
            setData(res.data)
        );
    };
    const columns = [{
        dataField: 'id',
        text: 'ID',
        sort: true
      }, {
        dataField: 'title',
        text: 'Judul',
        sort: true,
        filter: textFilter()
      }, {
        dataField: 'body',
        text: 'Isi',
        sort: true,
        filter: textFilter()
      }];
    return (
        <div>
            <h2 className='text-center' style={{padding: '3%'}}>Data Table API (POST)</h2>
            <Card>
                <BootstrapTable
                    bootstrap4 
                    keyField='id'
                    data={ data } 
                    columns={ columns } 
                    defaultSorted={ defaultSorted } 
                    filter={ filterFactory() }
                    pagination={ paginationFactory() } />
            </Card>
        </div>
    );
}

export default Table2APIPost;