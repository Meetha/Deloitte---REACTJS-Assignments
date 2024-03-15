// DAY 3 Assignment - QN 2 ==> EMPLOYEE CRUD


import React from "react";
import { useState } from "react";
 
 
function EmployeeCrud() {
    
    const [empArray, setEmpArray] = useState([]);
    const [deptno, setDeptno] = useState("");
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
   
 
    function getDeptsButton_click() 
    {
 
        let tempArray = [
            { deptno: 3, empno: 1, ename: "Anshita", job: "Dev1", sal : 25000 },
            { deptno: 4, empno: 2, ename: "Meetha", job: "Dev2", sal : 25000 },
            { deptno: 6, empno: 3, ename: "Snigdha", job: "Dev3", sal : 25000 },
            { deptno: 10, empno: 4, ename: "Deepika", job: "Dev4", sal : 25000 }
        ];
 
        setEmpArray(tempArray);
 
    }
 
 
    function addDeptButton_click() 
    {
        let deptObj = {};
        deptObj.deptno = deptno;
        deptObj.empno = empno;
        deptObj.ename = ename;
        deptObj.job = job;
        deptObj.sal = sal;
 
 
        let tempArray = [...empArray];
        tempArray.push(deptObj);
        setEmpArray(tempArray);
 
        clearFields();
    }
 

    function clearFields()
    {
        setDeptno("");
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
    }
 
 
    function  deleteEmp_click(dno)
    {
        let tempArray = [...empArray];
       
        let index = tempArray.findIndex(item => item.deptno == dno);
        const confirmed=window.confirm("Are you sure you want to delete?");
        if (confirmed){
            tempArray.splice(index, 1);
 
        setEmpArray(tempArray);
        }
       
    }
 

    function  selectEmp_click(dno)
    {
        let deptObj = empArray.find(item => item.deptno == dno);
 
        setDeptno(deptObj.deptno);
        setEmpno(deptObj.empno);
        setEname(deptObj.dname);
        setJob(deptObj.job);
        setSal(deptObj.sal);
    }
 

    function updateDeptButton_click() 
    {
        let tempArray = [...empArray];
       
        let index = tempArray.findIndex(item => item.deptno == deptno);
        tempArray[index].empno = empno ;
        tempArray[index].ename = ename ;
        tempArray[index].job = job ;
        tempArray[index].sal = sal ;
 
        setEmpArray(tempArray);
        clearFields();
    }
 
    let resultArray = empArray.map((item, index) => {
        return <tr key={index}>
                        <td>   {item.deptno}  </td>
                        <td>   {item.empno}  </td>
                        <td>   {item.ename}  </td>
                        <td>   {item.job}  </td>
                        <td>   {item.sal}  </td>
                        <td>
                            <button  onClick={() => selectEmp_click(item.deptno)}>
                                <img height="30" width="80" src ="https://thumbs.dreamstime.com/b/select-button-rounded-sign-white-background-isolated-196848781.jpg"></img>
                            </button>
                            <button  onClick={() => deleteEmp_click(item.deptno)} >
                                <img  height="30" width="80" src ="https://www.vhv.rs/dpng/d/496-4966672_coquelicot-hd-png-download.png"></img>
                            </button>
                        </td>
                </tr>
    });
 
 
    return (
    <>
 
        <h3>CRUD Operations </h3>
        <hr />
 
        <input type="text" placeholder="Dept Number" value={deptno}   onChange={(e) => setDeptno(e.target.value)} />
        <input type="text" placeholder="Employee Number" value={empno}   onChange={(e) => setEmpno(e.target.value)} />
        <input type="text" placeholder="Employee Name" value={ename}  onChange={(e) => setEname(e.target.value)} />
        <input type="text" placeholder="Job" value={job}   onChange={(e) => setJob(e.target.value)} />
        <input type="text" placeholder="Salary" value={sal}  onChange={(e) => setSal(e.target.value)} />
        <hr />
 
        <input type="button" onClick={getDeptsButton_click} value="Get Employee" />
        <input type="button" onClick={addDeptButton_click} value="Add Employee" />
        <input type="button" onClick={updateDeptButton_click} value="Update Employee" />
       
        <hr />
 
        <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>Dept Number</th>
                <th>Emp Number</th>
                <th>Emp Name</th>
                <th>Job</th>
                <th>Salary</th>
               
                <th></th>
            </tr>
            {resultArray}
        </table>
 
    </>
    );
}
 
export default EmployeeCrud;