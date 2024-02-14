import React from 'react';
import * as XLSX from 'xlsx'
function Download({data}) {
    let handledownload = () => {
        let workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook,worksheet,'Sheet1');
        XLSX.writeFile(workbook,'data.xlsx');
    }
    return (
        <div className='post_operations_button'>
            <button onClick={handledownload}>Download in Excel</button>
        </div>
    );
}

export default Download;