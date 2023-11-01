
export const DisplayOrder = (props) => {

    console.log(props);


    const renderData = ({ orderData }) => {
        if (orderData) {
            return orderData.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.rest_name}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.cost}</td>

                    </tr>
                )
            })
        }


    }


    return (

        <div className="container">
            <center>
                <p className="h3">Order List</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">OrderId</th>
                            <th scope="col">Restaurant Name</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData(props)}
                    </tbody>


                </table>

            </center>

        </div>
    )
}