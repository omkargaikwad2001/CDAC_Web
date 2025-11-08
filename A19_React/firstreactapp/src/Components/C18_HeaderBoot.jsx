const HeaderBoot = () => {
  return (
    <>
      <div className="container mt-5 text-center">
        <h1 className="text-primary mb-4">Welcome to Bootstrap × React</h1>

        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>React Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>React is a Single Page Application (SPA)</td>
              </tr>
              <tr>
                <td>Can update the DOM without reloading the entire page</td>
              </tr>
              <tr>
                <td>Component-based architecture</td>
              </tr>
              <tr>
                <td>Dynamic and responsive UI</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export { HeaderBoot };