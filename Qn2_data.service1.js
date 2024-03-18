import axios from 'axios';

export let dataServiceObj = 
{
    getAllEmployees,
    getEmpById,
    addEmp,
    updateEmp,
    deleteEmp
};



let url = "http://localhost:3000/depts/";

function getAllEmployees()
{
    return axios.get(url);
}


function addEmp(empObj)
{
    return axios.post(url, empObj);
}


function deleteEmp(eno)
{
    return axios.delete(url + eno);
}


function getEmpById(eno)
{
    return axios.get(url + eno);
}


function updateEmp(empObj)
{
    return axios.put(url + empObj.empno, empObj);
}   