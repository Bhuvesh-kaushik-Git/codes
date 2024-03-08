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

// New Implementation

import { CurrentUserLoader } from "./components/current-user-loader";
import { UserInfo } from "./components/user-info";  
import { UserLoader } from "./components/user-loader";


function App() {
  return (
    <>
    <CurrentUserLoader><UserInfo /></CurrentUserLoader>
      <UserLoader userId = {"3"}>
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;