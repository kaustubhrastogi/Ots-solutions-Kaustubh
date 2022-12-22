import React, { useEffect, useState } from "react";
import { Header, Input, Button, Dropdown } from "semantic-ui-react";
import TraineesList from "./TraineesList";

const TraineesComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [traineesList, setTraineesList] = useState([]);
  const [searchedTraineesList, setSearchedTraineesList] = useState([]);
  const [name, setName] = useState("");


  const mockTraineesData = [
    {
      firstName: "Rahul",
      lastName: "Rauniyar",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Saurabh",
      lastName: "Singh",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Mohd.",
      lastName: "Ehtesham",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Arun",
      lastName: "Kumar",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Rahul",
      lastName: "Rauniyar",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Saurabh",
      lastName: "Singh",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Mohd.",
      lastName: "Ehtesham",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Arun",
      lastName: "Kumar",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Rahul",
      lastName: "Rauniyar",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Saurabh",
      lastName: "Singh",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Mohd.",
      lastName: "Ehtesham",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Arun",
      lastName: "Kumar",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
  ];

  const options = [
    {
      key: "ascending",
      text: "Ascending Order",
      value: "ascending",
    },
    {
      key: "descending",
      text: "Descending Order",
      value: "descending",
    },
  ];

  const deleteItems = (index) => {

    const deleteItem = searchedTraineesList.filter((item, i) => {

      if (index === i) {

        return false;

      }
      return true;

    });

    console.log("deleteItem", deleteItem)
    console.log(index)

    setSearchedTraineesList(deleteItem);

    setTraineesList(deleteItem);

  };

  useEffect(() => {
    setTraineesList(mockTraineesData);
  }, []);

  useEffect(() => {
    if (searchTerm != "") {
      const filteredData = mockTraineesData.filter((trainee) =>
        trainee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedTraineesList(filteredData);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (name == 'ascending' || name == 'descending') {
      let ascending = mockTraineesData.sort((a, b) => {
        let fa = a.firstName;
        let fb = b.firstName;
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      if (name == 'ascending') {
        setTraineesList(ascending);
        setName('');
      } else if (name == 'descending') {
        setTraineesList(ascending.reverse());
        setName('');
      }
    }
  }, [name]);


  // useEffect(() => {
  //   if (name === 'ascending') {
  //     let ascending = mockTraineesData.sort((a, b) => {
  //       let fa = a.firstName;
  //       let fb = b.firstName;
  //       if (fa > fb) {
  //         return 1;
  //       }
  //       if (fa < fb) {
  //         return -1;
  //       }
  //       return 0;
  //     });
  //     setTraineesList(ascending);
  //     setName('');
  //     console.log(ascending,'<<<==ascending');
  //   } else if (name === 'descending') {
  //     let descending = mockTraineesData.sort((a, b) => {
  //       let fa = a.firstName;
  //       let fb = b.firstName;
  //       if (fa < fb) {
  //         return 1;
  //       }
  //       if (fa > fb) {
  //         return -1;
  //       }
  //       return 0;
  //     });
  //     setTraineesList(descending);
  //     setName('');
  //     console.log(descending,'<<<==descending');
  //   } else {
  //     setSearchedTraineesList(mockTraineesData);
  //     // console.log("searched",searchedTraineesList);
  //   }
  // }, [name]);
  // {console.log('mockTraineesData==>>>',mockTraineesData);}
  return (
    <>
      <Header as="h1">Trainees</Header>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "1rem",
        }}
      >
        <Input
          style={{ width: "25rem" }}
          icon={{ name: "search", circular: true, link: true }}
          placeholder="Search Name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <Button.Group color="blue" style={{ marginLeft: "1rem" }}>
            <Button>Sort</Button>
            <Dropdown
              className="button icon"
              floating
              options={options}
              onChange={(e, { value }) => setName(value)}
              trigger={<></>}
            />
          </Button.Group>
        </div>
      </div>

      <div style={{ margin: "1rem" }}>
        <TraineesList deleteItems={deleteItems} trainees={searchTerm === '' ? traineesList : searchedTraineesList} />
      </div>
    </>
  );
};

export default TraineesComponent;
