import _ from "lodash";
import { Component } from "react";

export default class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };
  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((x) => (
          <tr key={x._id}>
            {columns.map((column) => (
              <td key={this.createKey(x, column)}>
                {this.renderCell(x, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
