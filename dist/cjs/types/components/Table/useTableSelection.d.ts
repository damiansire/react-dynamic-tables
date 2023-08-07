import { Header } from "./interfaces/Header";
import { Row } from "./interfaces/Row";
interface SelectedCell {
    trId: string | null;
    columnId: string | null;
}
export declare const useTableSelection: (rows: Row[], headers: Header[], tableRef: React.RefObject<HTMLTableElement>) => [SelectedCell, (event: KeyboardEvent) => void, (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void];
export {};
