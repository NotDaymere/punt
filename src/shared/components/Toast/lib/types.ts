export interface ToastData {
    id: string;
    type: "success" | "error";
    duration: number;
    title: string;
    content: string;
    removed: boolean;
}
export interface ToastContextType {
    data: ToastData[];
    onChange: (data: ToastData[] | ((data: ToastData[]) => ToastData[])) => void;
}
export interface ToastDataProps extends Omit<ToastData, 'duration' | 'id' | 'removed'> {
    duration?: number;
}