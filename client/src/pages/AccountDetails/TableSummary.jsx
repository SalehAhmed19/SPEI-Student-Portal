import Table from "@mui/joy/Table";
import { accountDetailsTableData } from "../../assets/assets";

export default function TableSummary() {
  return (
    <div className="h-96 overflow-y-scroll hide-scrollbar">
      <Table aria-label="basic table" stickyHeader stickyFooter>
        <thead>
          <tr className="text-xl">
            <th>SL No</th>
            <th>Date</th>
            <th>Receipt</th>
            <th>Payment Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="text-base" style={{ cursor: "pointer" }}>
          {accountDetailsTableData.map((detail, idx) => (
            <tr key={idx}>
              <td>{detail.sl}</td>
              <td>{detail.date}</td>
              <td>{detail.receipt}</td>
              <td>{detail.payment_type}</td>
              <td>{detail.amount}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr className="text-xl">
            <th scope="row">Totals</th>
            <td></td>
            <td></td>
            <td></td>
            <td>12038 BDT</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
