import React from "react";

function SendedMessage({ message, time }) {
  time = new Date(time);
  const hour =
    ("0" + time.getHours()).slice(-2) +
    ":" +
    ("0" + time.getMinutes()).slice(-2);
  return (
    <div className="message sended-message ml-auto mr-4 mt-3 ">
      <p className="my-auto">{message}</p>
      <p>{`${hour}`}</p>
    </div>
  );
}

export default SendedMessage;
