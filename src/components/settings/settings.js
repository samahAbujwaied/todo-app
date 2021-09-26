// import { Button } from "@blueprintjs/core";
import React from "react";
import { useContext } from "react";
import  {SettingsContext}  from "../../context/settings";
import { Form ,Button } from "react-bootstrap";


function Settings(props) {
  const { holdValues } = useContext(SettingsContext);
  return (
      
    <div className="setting-contianer" style={{marginLeft:"400px",height:"300px",width:"500px" ,marginTop:"25px", borderBlockColor:"black" , borderStyle:"solid"}}>
      <Form style={{marginLeft:"40px",width:"500px" ,marginTop:"25px"}} onSubmit={holdValues}>
        <h2 className="setting-heading" style={{marginLeft:"130px" ,color:"pink"}}>Settings</h2>
        <label className="setting-title"> Show only Incompleted todo's </label> <br />
        <div>
          <input type="radio" name="incomplete" value={false} /> No
          <input type="radio" name="incomplete" value={true} /> Yes
        </div>
        <br />
        <br />
        <label className="setting-title">Select number of todo's </label> <br />
        <select name="pageNumber" id="">
          <option disabled>Select One</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="8">8</option>
        </select>
        <br />
        <br />
        <Button variant="dark" type="submit" value="apply" >
         Click
          </Button>
        
      </Form>
    </div>
  );
}

export default Settings;
