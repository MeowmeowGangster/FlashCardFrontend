export interface fileUploadResponse {
	url: string;
	size: number;
	message: string;
}
export interface filesUpload {
	file: File | Blob | null;
	filepath: string;
}
