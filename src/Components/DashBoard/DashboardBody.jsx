import "./DashboardBody.css"
const DashboardBody = () => {
  return (
    <div style={{alignItems:"center"}}>
        <table>
            <tr>
                <th>Employee Number</th>
                <th>Employee Name</th>
                <th>Department</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Position</th>
                <th>View Details</th>
            </tr>
            <tr>
                <td>197745</td>
                <td>Chamika Prasad</td>
                <td>IT</td>
                <td>chamika123@gmail.com</td>
                <td>0772556993</td>
                <td>Associate SE</td>
                <td><button>See More Details..</button></td>
            </tr>    
            
        </table>
    </div>
  )
}

export default DashboardBody