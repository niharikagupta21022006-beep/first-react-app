function App() {
  
  return <center class ="todo-container">
    <h1>Todo App</h1>
    <div class="container text-center">
  
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here"></input>
        </div>
        <div class="col-4">
          <input type="date"></input>
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-success">Add</button>
        </div>
      </div>

      
      <div class="row">
        <div class="col-6">
          Buy Milk
        </div>
        <div class="col-4">
          18/1/26
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-danger">Delete</button>

        </div>
      </div>

      
      <div class="row">
        <div class="col-6">
          Go to College
        </div>
        <div class="col-4">
          18/1/26
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-danger">Delete</button>

        </div>
      </div>
    </div>
  </center>
}  

export default App
