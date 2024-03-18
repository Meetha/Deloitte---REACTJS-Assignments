import axios from 'axios';

export let dataSericeObj = 
{
    getAllDepartments,
    getDeptById,
    addDept,
    updateDept,
    deleteDept
};



let url = "http://localhost:3000/depts/";

function getAllDepartments()
{
    return axios.get(url);
}


function addDept(deptObj)
{
    return axios.post(url, deptObj);
}


function deleteDept(dno)
{
    return axios.delete(url + dno);
}


function getDeptById(dno)
{
    return axios.get(url + dno);
}


function updateDept(deptObj)
{
    return axios.put(url + deptObj.deptno, deptObj);
}   