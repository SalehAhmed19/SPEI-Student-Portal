import Table from "@mui/joy/Table";

export default function OtherInformationTable() {
  return (
    <div className="h-96 overflow-y-scroll hide-scrollbar">
      <Table aria-label="basic table" stickyHeader>
        <tbody className="text-base font-bold" style={{ cursor: "pointer" }}>
          <tr>
            <td>Total Fee</td>
            <td className="text-right">65000 BDT</td>
          </tr>
          <tr>
            <td>Semester Fee</td>
            <td className="text-right">6000 BDT</td>
          </tr>
          <tr>
            <td>Total Paid</td>
            <td className="text-right">36000 BDT</td>
          </tr>
          <tr>
            <td>Current Due</td>
            <td className="text-right">24000 BDT</td>
          </tr>
        </tbody>

        <tfoot>
          <tr className="text-xl font-bold">
            <th scope="row">Totals</th>
            <td className="text-right">12038 BDT</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
