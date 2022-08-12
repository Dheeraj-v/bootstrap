import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions1 from "../Actions/Action1";
import { GET, POST } from "../utils";
function AddEdit(props) {
  console.log(props);

  const  handleAddEdit = async() => {
    props.actions.setAddEditAction(true);
    console.log("inside handle AddEdit");
    const result = await GET('https://reqres.in/api/users');

    console.log('result', result)
    const result2 = await POST('https://reqres.in/api/users',{"name": "morpheus",
    "job": "leader"});
    console.log(result2)


  };

  return (
    <div className="App">
      <button onClick={handleAddEdit}>Add/Edit</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...Actions1 }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEdit);
