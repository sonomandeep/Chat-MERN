import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Main from "./Main";
import InputForm from "./InputForm";

function Chat({ activeUser }) {
  let main = null;

  if (activeUser)
    main = (
      <React.Fragment>
        <Main />
        <InputForm />
      </React.Fragment>
    );
  else
    main = (
      <div className="d-flex flex-column h-100 justify-content-center align-items-center">
        <p className="">
          Nessun utente selezionato. Selezionane uno per poter inviare un
          messaggio.
        </p>
      </div>
    );

  return (
    <div className="chat mh-100 w-100 mr-2 d-flex flex-column">
      <Header />
      {main}
    </div>
  );
}

const mapStateToProps = state => {
  return { activeUser: state.chat.activeUser };
};

export default connect(mapStateToProps)(Chat);
