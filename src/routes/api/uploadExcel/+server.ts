import { json, type RequestEvent } from "@sveltejs/kit";
import { writeFileSync } from 'fs';

export async function POST({ request }: RequestEvent) {
    try {
        const formData = Object.fromEntries(await request.formData());

        if (!(formData.file as File).name || (formData.file as File).name === 'undefined') {
            throw new Error('File name is missing or is "undefined".');
        }

        const { file } = formData as { file: File };

        writeFileSync(`static/${file.name}`, Buffer.from(await file.arrayBuffer()));
    

        return json({success: true, message: 'Successfully uploaded the file' });
    } catch (error) {
        console.error('Error with the file:', error);
        return json(
            { success: false, error: `An error occurred with the file` },
            { status: 500 }
        );
    }
}
