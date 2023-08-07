import React from "react";
import "./table.css";
import { Row } from "./interfaces/Row";
import { Header } from "./interfaces/Header";
interface TableProps {
    headers: Header[];
    rows: Row[];
}
declare const TableComponent: {
    ({ rows, headers }: TableProps): React.JSX.Element;
    defaultProps: {
        headers: never[];
        rows: never[];
    };
};
export default TableComponent;
