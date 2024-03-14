import logo from './logo.svg';
import './App.css';
import pepsi from './PEPSI.jpg'
import React from 'react';


function App1() {

  let name = "Meetha";
  let age = 22;
  let email = "meethaprasad001@gmail.com";
  let designation = "Intern";
  let channel = "DAS - Audit"
  let location = "Hyderabad";

  return (
    <div>
      <div>Welcome Meetha!</div>
      <h3>Developing Web Applications using React JS</h3>
      <hr />
      <div>Your Employee Details</div>
      <hr />
      <table border='1'>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Designation</th>
          <th>Channel</th>
          <th>Location</th>
        </tr>

        <tr>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
          <td>{designation}</td>
          <td>{channel}</td>
          <td>{location}</td>
        </tr>

      </table>

      <div>
        <img src={pepsi} alt="image" width={100} height={250}></img>
      </div>

    </div>
  );
}




function App2() {

  let coursesArray = ["HTML5", "CSS3", "JAVA SCRIPT", "REACT JS", "ANGULAR"];

  //method1
  /* 
  let resultArray = new Array(4);
  resultArray[0] = <li>{coursesArray[0]}</li>;
  resultArray[1] = <li>{coursesArray[0]}</li>;
  resultArray[2] = <li>{coursesArray[0]}</li>;
  */

  //method2
  /*
  for (let i = 0; i < coursesArray.length; i++) 
  {
    resultArray ....
  }
  */

  let resultArray = coursesArray.map(item => <li>{item}</li>);

  return (
    <div>
      <div>Welcome Meetha!</div>
      <h3>Developing Web Applications using React JS</h3>
      <hr />

      <h3>Using React</h3>
      <hr />

      <ul>
        {resultArray}
      </ul>
    </div>
  );

}





function App3() {

  let file1 = "https://i.pinimg.com/236x/a4/7e/e8/a47ee84cb76226457ed3e995981d352f.jpg";
  let file2 = "imageA.png";
  let file3 = "imageB.png";

  return (
    <div>
      <h3>Working with Images in ReactJS</h3>
      <hr />

      <img width="100" src="https://images.unsplash.com/photo-1529106550889-a7ed1c7a0293?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkJTIwZ3JlZW58ZW58MHx8MHx8fDA%3D" />
      <br />

      <img width="100" src={file1} />
      <hr />

      <img width="100" src="./images/imageA.png" />
      <hr />

      <img width="100" src={"./images/" + file3} />
      <hr />

    </div>

  );
}





function App4() {

  let usersArray = [
    { "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" },
    { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" },
    { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" },
    { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" },
    { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg" },
    { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg" }
  ];

  let resultArray = usersArray.map(item =>
    <tr>
      <td>{item.id}</td>
      <td>{item.email}</td>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td><img width="100" src={item.avatar} /> </td>
    </tr>);


  return (

    <>
      <h3>Users Details Table</h3>
      <hr />

      <table border="2" width="500">

        <tr>
          <th>ID:</th>
          <th>Email:</th>
          <th>FirstName:</th>
          <th>LastName:</th>
          <th>Avatar:</th>
        </tr>

        {resultArray}

      </table>

    </>

  );

}





function App5() {

  let files = ["imageA.png","imageB.png","imageC.png","imageD.png"];
  let filex = "./images/";
  let imageprint = files.map
  (
    item=>
    <img width='100' src={filex+item}></img>
  )

  return(
    <>
      <h3>Working with Images React JS</h3>
      <hr />
      {imageprint}
    </>
  );

}



//export default App1;
//export default App2;
//export default App3;
//export default App4;
export default App5;