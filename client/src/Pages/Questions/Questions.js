import React, { useEffect, useState } from "react";
import "./Question.css";

const Questions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);
  return (
    <>
      <div className="home">
        
        <section className="home_top">
          <div className="question_btn">Ask Question</div>

          <div className="user_class">
            <h4>WelCome:</h4>
          </div>
        </section>
        <div className="question_wrapper">
          <b>Questions</b>
        </div>
        <hr />
        {data.map((Api, data) => (
          <div className="all_user">
          <div key={data}>
           
            <i class="bi2 bi-person-circle"></i>
            <i class="bi1 bi-chevron-right"></i>
            <div className="user_name">
              <div>{Api.user_name}</div>
            </div>
            <div className="user_question">
              <div>{Api.user_question}</div>
            </div>
            <hr/>
          </div>
    </div>
        ))}
      </div>
    </>
  );
};

export default Questions;


