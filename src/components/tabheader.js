function TabHeader({component}) {
        return (
            <div className="card-header bg-secoundary-subtle bg-gradient ml-0 py-3">
            <div className="row">
              <div className="col-12 text-center">
                <h4 className="py-2">{component}</h4>
                <h6 className="py-2">Logged user: {localStorage.getItem("userName")}</h6>
                <h6 className="py-2">Current company: {localStorage.getItem("companyName")}</h6>
              </div>
            </div>
          </div>
        );
}

export default TabHeader;