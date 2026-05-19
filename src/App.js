import { useState } from "react";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";

function App() {

    const [show, setShow] = useState(true);
    const close = () => {
        setShow(false);
    }
  return (
     <>
      <section className="main-page">
        <h1>Star Rating System</h1>
         <StarRating />
          {show && ( <Dialog close={close}/>)}
       </section>
      </>
    );
  }

export default App;
