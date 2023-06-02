import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  Date: Date;
  Message: string;
  Fname: string;
  Lname: string;
  Email: string;
  Rate: number;
  PhoneNumber: number;
};
const Form = styled.form`
  max-width: 800px;
  margin: auto;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const InputContainer = styled.div`
  margin: 10px 0px 30px 0px;

  position: relative;
`;

const Input = styled.input`
  width: 300px;
  margin: 10px 0px;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 16px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  height: 50px;
  padding: 5px 25px;
  display: flex;
  align-items: center;
  letter-spacing: 0.75px;
  ::placeholder {
    color: #6e7191;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  color: black;
  position: relative;
  @media (max-width: 900px) {
    width: 250px;
  }
`;

const InputHeader = styled.div`
  margin: 50px auto 10px;
  font-size: 22px;
  font-weight: 500;
`;
const UserFeedbackInput = styled.textarea`
  width: 94%;
  height: 140px;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 16px;
  resize: none;
  padding: 15px 25px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;

  letter-spacing: 0.75px;

  color: black;
  ::placeholder {
    color: #6e7191;
  }
`;
const RateInputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px auto;
  width: 90%;
`;
const RateInput = styled.div<{ active: boolean }>`
  border: 1px solid #d8d8d8;
  height: 30px;
  width: 30px;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 4px;
  background-color: ${(props) => (props.active === true ? "#d8d8d8" : "white")};
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;
const Button = styled.button`
  border: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  padding: 20px 50px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 16px;
  cursor: pointer;
`;
const Dflex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    display: block;
    margin: auto;
  }
`;
const ErrorMsg = styled.div`
  position: absolute;
  color: red;
  bottom: -25px;
  left: 30px;
`;
const FormPage = () => {
  const [rate, setRate] = useState(null as null | number);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* /////// DATE  /////// */}
        <InputHeader>Date</InputHeader>
        <Dflex>
          <InputContainer>
            <Input type="date" {...register("Date")} />
            {errors.Date && <ErrorMsg>Something went wrong !</ErrorMsg>}
          </InputContainer>
        </Dflex>

        {/*//////     NAME  //////*/}

        <InputHeader>Customer Name</InputHeader>
        <Dflex>
          <InputContainer>
            <Input
              placeholder="First Name"
              {...register("Fname", { required: true, minLength: 3 })}
            />
            {errors.Fname && <ErrorMsg>please Enter a valid name</ErrorMsg>}
          </InputContainer>
          <InputContainer>
            <Input
              placeholder="Last Name"
              {...register("Lname", { required: true, minLength: 3 })}
            />
            {errors.Lname && <ErrorMsg>please Enter a valid name</ErrorMsg>}
          </InputContainer>
        </Dflex>
        {/* ///////////   PHONE NUMBER AND EMAIL //////////////// */}
        <Dflex>
          <div>
            <InputHeader>Phone Number</InputHeader>
            <InputContainer>
              <Input
                type="number"
                {...register("PhoneNumber", {
                  minLength: 11,
                  maxLength: 11,
                  min: 0,
                })}
              />
              {errors.PhoneNumber && (
                <ErrorMsg>Please Enter a valid phone number</ErrorMsg>
              )}
            </InputContainer>
          </div>
          <div>
            <InputHeader>Email</InputHeader>
            <InputContainer>
              <Input
                type="email;"
                {...register("Email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {errors.Email && <ErrorMsg>Please Enter A valid Email</ErrorMsg>}
            </InputContainer>
          </div>
        </Dflex>
        {/*/////////   User Message /////////// */}
        <InputHeader>Feedback</InputHeader>

        <InputContainer>
          <UserFeedbackInput
            placeholder="Enter your Message"
            {...register("Message", { required: true, minLength: 3 })}
          />
          {errors.Message && <ErrorMsg>This field is required</ErrorMsg>}
        </InputContainer>

        {/* ///////// OVERALL RATING /////////// */}
        <InputHeader>Overall Rating</InputHeader>
        <RateInputContainer>
          {/* ///// Generate array of numbers from 0 to 4 then map them to get the inputs from 1 to 5 //////  */}
          {[...Array(5).keys()].map((index) => (
            <RateInput
              key={index}
              active={index + 1 === rate && true}
              onClick={() => {
                setRate(index + 1),
                  setValue("Rate", index + 1, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
              }}>
              {index + 1}
            </RateInput>
          ))}
        </RateInputContainer>
        <ButtonContainer>
          <Button type="submit">Submit</Button>
        </ButtonContainer>
      </Form>
    </div>
  );
};

export default FormPage;
