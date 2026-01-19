function TodoItem2(){

    let todoName = "Go TO COllege";
    let todoDate = "19/1/26";
    return (
        <div class="container">
        <div class="row Kg-row">
          <div class="col-4">{todoName}</div>
          <div class="col-4">{todoDate}</div>
          <div class="col-2">
           <button type="button" class="btn btn-danger">Delete</button> 
            </div> 
        </div>
        </div>
    )

}

export default TodoItem2;