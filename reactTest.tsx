/**
 * If you want to prove your React skills, please try this test.
 *
 * TIPS:
 * - These are a theoretical questions, there is no need to install packages or run the code.
 */


//test 2 imports
import react, { useState, useEffect } from "react";

/**
 * TEST 1
 *
 * This test is a simple one with conditional rendering.
 *
 * This component has to return:
 *  The name in blue if the age is greater than or equal than 18.
 *  The name in red otherwise.
 */

interface ITest1ComponentProps {
  name: string;
  age: number;
}

export const Test1Component = (props: ITest1ComponentProps) => {
  return (
    <div>
      {/* check if age is >= 18 using ternary operator */}
      {props.age >= 18 ? (
        // if the age is greater than or = 18 return name in blue
        <p style={{ color: "blue" }}>{props.name} </p>
      ) : (
        // else -  18 return name in red
        <p style={{ color: "red" }}>{props.name} </p>
      )}
    </div>
  );
};

/**
 * TEST 2
 *
 * This is test is about handling changes of the data from an API.
 *
 * Like test 1, this component has to return:
 *  The name in blue if the age is greater than or equal than 18.
 *  The name in red otherwise.
 *
 * The difference is we don't have the age, we need to use the function below to get it.
 * The name from the parent can change any time, we have ensure the component rerenders if it happens
 * Getting data from an API (we simulate it with a timeout) is async, please be sure the code updates when we get the response back from the API
 */

/**
 * This function accepts a name and simulates and API call to get the age of the person
 * Please use it in the component
 * @param name Name of the person we want to find the age
 * @returns random integer from 0 to 39
 */


//I have used a live environment using code sandbox to complete this test. you can view it at: 
// url:  https://codesandbox.io/p/sandbox/test-react-jjy77w?from-embed=

interface ITest2ComponentProps {
  name: string;
}

export const Test2Component = (props: ITest2ComponentProps) => {
  // Declare a state variable to store and set age value when calling function through useEffect,
  const [age, setAge] = useState(0);

  const getAge = async (name: string): Promise<number> => {
    // This function calls an API and returns
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        resolve(Math.floor(Math.random() * 40));
      }, 500);
    });
  };

  // Call the getAge function when the props.name changes
  useEffect(() => {
    getAge(props.name).then((age: number) => {
      setAge(age);
    });
  }, [props.name]);

  return (
    <div>
      {/* check if age is >= 18 using ternary operator */}
      {age >= 18 ? (
        // if the age is greater than or = 18 return name in blue
        <p id="p" style={{ color: "blue" }}>
          {props.name}
        </p>
      ) : (
        // else -  18 return name in blue
        <p style={{ color: "red" }}>{props.name} </p>
      )}
    </div>
  );
};
