import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'aplication/vnd.openxmlformats-officedocument.spreadsheetml; charset=UTF-8';
const EXCEL_EXT = '.xlsx';
@Injectable()
export class ExporterService {

  constructor() { }

  exportToExcel(json: any[], excelFileName:string):void{
    const wordsheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const wordbook: XLSX.WorkBook = {
      Sheets: {'data': wordsheet },
      SheetNames: ['data']
    };
    const excelBuffer: any = XLSX.write(wordbook, {bookType: 'xlsx', type: 'array' });
    this.saveAsExcel(excelBuffer, excelFileName);
  }
    private saveAsExcel(buffer:any, fileName:string):void{
      const data: Blob = new Blob([buffer], {type:EXCEL_TYPE});
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXT);
  }
}
