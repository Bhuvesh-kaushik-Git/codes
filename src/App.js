// import { Modal } from "./components/Modal";
// import { LargeBookListItem } from "./components/books/LargeListItems";
// import { books } from "./data/books";

// function App() {
//   return (
//     <>
//       <Modal>
//         <LargeBookListItem book={books[0]} />
//       </Modal>
//     </>
//   );
// }

// export default App;

// New Implementation of section3

// import { CurrentUserLoader } from "./components/current-user-loader";
// import { UserInfo } from "./components/user-info";
// import { UserLoader } from "./components/user-loader";

// function App() {
//   return (
//     <>
//     <CurrentUserLoader><UserInfo /></CurrentUserLoader>
//       <UserLoader userId = {"3"}>
//         <UserInfo />
//       </UserLoader>
//     </>
//   );
// }

// export default App;
// Section 4 udemy code.

// import { UncontrolledForm } from "./components/uncontrolled-form";
// import { ControlledForm } from "./components/controlled-form";
// import { UncontrolledModal } from "./components/uncontrolled-modal";
// import { ControlledModal } from "./components/controlled-modal";
// import { useState } from "react";
import { UncontrolledFlow } from "./components/uncontrolled-flow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1 : Enter Your Name:</h1>
      <button onClick={() => goNext({name: 'Bhuvesh'})}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
       <h1>Step #2 : Enter Your Email:</h1>
      <button onClick={() => goNext({Email: 'bhuvesh.kaushik@ongraph.com'})}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
       <h1>Step #3 : Enter Your Age:</h1>
      <button onClick={() => goNext({age: '24'})}>Next</button>
    </>
  );
};

function App() {
  //const [shouldDisplay, setShouldDisplay] = useState(false);
  return (
    <>
      <UncontrolledFlow
      onDone={(data) => {
        console.log(data);
        alert("You are at the Final step!!!!!")
      }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm />
      <UncontrolledModal />
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <h3>Hey Bhuvesh Modal is open!!!</h3>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? "Hide Modal" : "Display Modal"}
      </button> */}
    </>
  );
}
export default App;
