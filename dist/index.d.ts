import React from 'react';

interface Row {
    id: string;
    [key: string]: string;
}

interface Header {
    attributeName: string;
    displayText: string;
}

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

export { TableComponent as Table };
